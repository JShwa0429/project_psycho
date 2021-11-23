import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import Move from "./atom/move";
import Question from "./atom/question";
import Card from "./atom/card";
import Button from "react-bootstrap/Button";

const Test = ({ location }) => {
  const userProfile = location.userProfile;
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const exampleQuestion = {};
  exampleQuestion["question"] = "오늘 기분은 어떠신가요?";
  exampleQuestion["answer01"] = "나빠요";
  exampleQuestion["answer02"] = "별로에요";
  exampleQuestion["answer03"] = "괜찮아요";
  exampleQuestion["answer04"] = "좋아요";
  exampleQuestion["answerScore01"] = 1;
  exampleQuestion["answerScore02"] = 2;
  exampleQuestion["answerScore03"] = 3;
  exampleQuestion["answerScore04"] = 4;
  exampleQuestion["answerScore05"] = 5;
  exampleQuestion["qitemNo"] = "0";
  const [answerList, setAnswerList] = useState([]);

  const handleClickPrev = () => {
    setCurrentPageIndex((current) => {
      return current - 1;
    });
    console.log(currentPageIndex);
  };

  const handleSelect = (qitemNo, selectAnswer) => {
    console.log(qitemNo, selectAnswer);
    setAnswerList((current) => {
      let newAnswerList = [...current];
      newAnswerList[qitemNo] = selectAnswer;
      return newAnswerList;
    });
  };
  const handleClickNext = () => {
    setCurrentPageIndex((current) => {
      return current + 1;
    });
    console.log(currentPageIndex);
  };
  return (
    <div>
      {currentPageIndex === 0 && (
        <div>
          <div>
            <div className="mb-4">
              <div className="row justify-content-between">
                <div className="col col-auto">
                  <h2>검사 예시</h2>
                </div>
                <div className="col col-auto">
                  <h3>{progressPercentage}%</h3>
                </div>
              </div>
              <ProgressBar percentage={progressPercentage} />
            </div>
            <h4>문제를 읽고 자신에게 맞는 답안을 선택해주세요.</h4>
            <Card question={exampleQuestion} onSelect={handleSelect} />
          </div>
          <div className="text-center justify-content">
            <Move />
            <Button onClick={handleClickNext} disabled={answerList}>
              검사 시작
            </Button>
          </div>
        </div>
      )}
      {currentPageIndex > 0 && (
        <div>
          <div className="mb-4">
            <div className="row justify-content-between">
              <div className="col col-auto">
                <h2>검사 진행</h2>
              </div>
            </div>
            <div className="col col-auto">
              <h3>{progressPercentage}%</h3>
            </div>
            <ProgressBar percentage={progressPercentage} />
            <Question
              onSelect={handleSelect}
              seq={userProfile ? userProfile["qestrnSeq"] : "0"}
            />
          </div>
          <div className="text-center justify-content">
            <Move next={"/result"} />
            <Button onClick={handleClickPrev}>이전으로</Button>
            <Button onClick={handleClickNext}>다음으로</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
