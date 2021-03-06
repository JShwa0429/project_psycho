import React, { useMemo, useState } from "react";
import Question from "../../containers/Question";
import { ProgressBar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Progress = ({
  questions,
  currentPage,
  cut,
  onMove,
  onSave,
  testState,
}) => {
  const len = useMemo(() => {
    return questions.length;
  }, [questions]);

  const [selectedAnswer, setSelectedAnswer] = useState([{}, {}]);

  const visibleQuestions = useMemo(() => {
    return len > 1
      ? questions.slice((currentPage - 2) * 5, (currentPage - 1) * 5)
      : questions;
  }, [questions, currentPage, len]);

  const progressPercentage = useMemo(() => {
    return selectedAnswer
      ? (Object.keys(selectedAnswer[0]).length / len) * 100
      : 0;
  }, [selectedAnswer, len]);

  const disable = useMemo(() => {
    return (
      ((cut * (currentPage - 1)) / len) * 100 > progressPercentage &&
      progressPercentage !== 100
    );
  }, [cut, len, currentPage, progressPercentage]);

  const handleSelect = (i, qitemNo, score) => {
    //    i 는 답변의 번호
    // qitemNo 는 문제 번호
    // score 는 해당 답변의 점수
    setSelectedAnswer((current) => {
      let newSelectedAnswer = { ...current };
      newSelectedAnswer[0][qitemNo] = i;
      newSelectedAnswer[1]["B" + qitemNo] = score;
      onSave(newSelectedAnswer);
      return newSelectedAnswer;
    });
  };

  return (
    <div style={{ marginTop: "5vh" }}>
      <div>
        <div className="mb-5">
          <div
            className="row justify-content-between"
            style={{ marginBottom: "2vh" }}
          >
            <div className="col col-auto" style={{ marginLeft: "2vw" }}>
              <h1>{testState}</h1>
            </div>
            <div className="col col-auto" style={{ marginRight: "2vw" }}>
              <h1>{Math.round(progressPercentage)}%</h1>
            </div>
          </div>
          <ProgressBar
            variant={disable ? "danger" : ""}
            now={progressPercentage}
          />
        </div>

        {visibleQuestions.map((question, index = 1) => {
          return (
            <div className="question">
              <Question
                key={Math.random()}
                question={question}
                onSelect={handleSelect}
              />
            </div>
          );
        })}
      </div>

      <div className="btn-move" style={{ textAlign: "center" }}>
        <Button
          variant="secondary"
          style={{ float: "left", fontSize: "2em" }}
          size="lg"
          id="prev"
          onClick={onMove}
        >
          이전으로
        </Button>

        <Button
          size="lg"
          style={{ float: "right", fontSize: "2em" }}
          id="next"
          onClick={onMove}
          disabled={disable}
        >
          {currentPage === 1 ? "검사시작" : "다음으로"}
        </Button>

        {currentPage !== 1 && (
          <Button
            size="lg"
            variant="outline-primary"
            style={{ fontSize: "2em" }}
            id="next"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            위로 가기
          </Button>
        )}
      </div>
    </div>
  );
};

export default Progress;
