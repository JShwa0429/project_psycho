import React, { useMemo, useState } from "react";
import Card from "../../containers/Card";
import { ProgressBar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Progress = ({ questions, currentPageIndex, cut, onMove, onSave }) => {
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const len = questions.length;

  const visibleQuestions = useMemo(() => {
    return questions.slice(
      (currentPageIndex - 2) * 5,
      (currentPageIndex - 1) * 5
    );
  }, [questions, currentPageIndex]);

  const progress = useMemo(() => {
    return selectedAnswer
      ? (Object.keys(selectedAnswer).length / len) * 100
      : 0;
  }, [selectedAnswer, len]);

  const disable = useMemo(() => {
    return ((cut * (currentPageIndex - 1)) / len) * 100 > progress;
  }, [cut, len, currentPageIndex, progress]);

  const handleSelect = (i, qitemNo) => {
    //    i 는 답변의 번호
    // qitemNo 는 문제 번호
    // score 는 해당 답변의 점수
    setSelectedAnswer((current) => {
      let newSelectedAnswer = { ...current };
      newSelectedAnswer[qitemNo] = i;
      onSave(newSelectedAnswer);
      return newSelectedAnswer;
    });
    console.log(disable);
    console.log(selectedAnswer);
    console.log(i, qitemNo);
  };

  return (
    <div>
      <div>
        <div className="mb-4">
          <div className="row justify-content-between">
            <div className="col col-auto">
              <h2>검사 진행</h2>
            </div>
            <div className="col col-auto">
              <h3>{Math.round(progress)}%</h3>
            </div>
          </div>
          <ProgressBar percentage={Number(progress)} />
        </div>

        {visibleQuestions.map((question) => {
          return <Card question={question} onSelect={handleSelect} />;
        })}
      </div>
      <div className="text-center justify-content">
        <Button id="prev" onClick={onMove}>
          이전으로
        </Button>

        <Button id="next" onClick={onMove} disabled={disable}>
          다음으로
        </Button>
      </div>
    </div>
  );
};

export default Progress;
