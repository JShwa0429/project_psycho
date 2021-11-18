import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './card.css';

const Card = ({ question, onSelect }) => {
  const [selectAnswer, setSelectAnswer] = useState(null);
  const handleClick = (e) => {
    setSelectAnswer(e.target.value);
    onSelect(selectAnswer);
  };

  const qestStr = `문제${question['qitemNo']}. ${question['question']}`;
  qestStr.split('<br/>').map((line) => {
    return (
      <span>
        {line}
        <br />
      </span>
    );
  });

  const answer = [];
  let index = '01';
  for (let i = 1; i < 11; i++) {
    index = i < 10 ? '0' + i.toString() : '10';
    if (question['answer' + index] == null) break;

    answer.push(
      <Button onClick={handleClick} value={question['answerScore' + index]}>
        {question['answer' + index]}
      </Button>,
    );
  }

  return (
    <div
      claseName="container"
      style={{
        margin: 14,
        backgroundColor: 'pink',
        display: 'block',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <div claseName="question">
        {qestStr.split('<br/>').map((line) => {
          return (
            <h3>
              {line}
              <br />
            </h3>
          );
        })}
      </div>
      <div className="answer">{answer}</div>
    </div>
  );
};
export default Card;

// {
//   "question": "직장에서 업무에 필요한 전화연락, 우편물, 서류 등을 정리한다.",
//   "answer01": "매우싫다",
//   "answer02": "약간싫다",
//   "answer03": "약간좋다",
//   "answer04": "매우좋다",
//   "answer05": null,
//   "answer06": null,
//   "answer07": null,
//   "answer08": null,
//   "answer09": null,
//   "answer10": null,
//   "answerScore01": "1",
//   "answerScore02": "2",
//   "answerScore03": "3",
//   "answerScore04": "4",
//   "answerScore05": null,
//   "answerScore06": null,
//   "answerScore07": null,
//   "answerScore08": null,
//   "answerScore09": null,
//   "answerScore10": null,
//   "tip1Score": null,
//   "tip2Score": null,
//   "tip3Score": null,
//   "tip1Desc": null,
//   "tip2Desc": null,
//   "tip3Desc": null,
//   "qitemNo": 1
// },
