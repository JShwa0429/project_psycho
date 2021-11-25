import React, { useMemo, useState } from "react";
import Card from "./card";
import { ProgressBar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Example = ({ questions, progressPercentage, onMove }) => {
  const [selected, setSelected] = useState(undefined);
  const [selectedAnswer, setSelectedAnswer] = useState({});

  const progress = useMemo(
    (questions) => {
      return selectedAnswer
        ? (Object.keys(selectedAnswer).length /
            (Array.isArray(questions) ? Object.keys(questions).length : 1)) *
            100
        : 0;
    },
    [selectedAnswer]
  );

  const handleSelect = (i, qitemNo, answerScore) => {
    //    i 는 답변의 번호
    // qitemNo 는 문제 번호
    // score 는 해당 답변의 점수
    setSelected(i);
    setSelectedAnswer((current) => {
      let newSelectedAnswer = { ...current };
      newSelectedAnswer[qitemNo] = [i, answerScore];
      return newSelectedAnswer;
    });
    console.log(selectedAnswer);
    console.log(typeof questions);
    console.log(i, qitemNo, answerScore);
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
              <h3>{Number(progress)}%</h3>
            </div>
          </div>
          <ProgressBar percentage={Number(progress)} />
        </div>
        {questions && <Card question={questions} onSelect={handleSelect} />}
      </div>
      <div className="text-center justify-content">
        <Button id="prev" onClick={onMove}>
          이전으로
        </Button>

        <Button id="next" onClick={onMove} disabled={!selected}>
          검사 시작
        </Button>
      </div>
    </div>
  );
};

export default Example;
