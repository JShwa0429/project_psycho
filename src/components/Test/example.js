import React, { useMemo, useState } from "react";
import Card from "../../containers/Card";
import { ProgressBar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Example = ({ questions, onMove, onSave }) => {
  const [selectedAnswer, setSelectedAnswer] = useState({});

  const progressPercentage = useMemo(
    (questions) => {
      return parseInt(
        selectedAnswer
          ? (Object.keys(selectedAnswer).length /
              (Array.isArray(questions) ? Object.keys(questions).length : 1)) *
              100
          : 0
      );
    },
    [selectedAnswer]
  );

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
  };

  return (
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
          <ProgressBar now={progressPercentage} />
        </div>
        {questions && (
          <Card
            question={Object.assign({}, questions, { qitemNo: "0" })}
            onSelect={handleSelect}
          />
        )}
      </div>
      <div className="text-center justify-content">
        <Button id="prev" onClick={onMove}>
          이전으로
        </Button>

        <Button id="next" onClick={onMove}>
          검사 시작
        </Button>
      </div>
    </div>
  );
};

export default Example;
