import React, { useState } from 'react';
import Card from './atom/card';

const Example = ({ history }) => {
  const [select, setSelect] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/test');
  };

  const handleSelect = (value) => {
    setSelect(value);
  };
  const exampleQuestion = {};
  exampleQuestion['question'] = '문제 0.오늘 기분은 어떠신가요?';
  exampleQuestion['answer01'] = '답1';
  exampleQuestion['answer02'] = '답2';
  exampleQuestion['answer03'] = '답3';
  exampleQuestion['answer04'] = '답4';

  return (
    <div>
      <h1>검사 예시</h1>
      <p>본인에게 알맞은 적성을 선택해주세요.</p>
      <form onSubmit={handleClick}>
        <Card question={exampleQuestion} onSelect={handleSelect} />

        {select ? (
          <button type="submit">검사 시작</button>
        ) : (
          <button type="submit" disabled>
            검사 시작
          </button>
        )}
      </form>
    </div>
  );
};

export default Example;
