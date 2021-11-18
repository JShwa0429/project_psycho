import React from 'react';
import Question from './Question';
const Test = ({ history }) => {
  const handleClick = (e) => {
    const id = e.target.id;
    //  임시로 이동하는 거 만듬
    if (id === 'btn_prev') {
      history.push('/example');
    } else {
      history.push('/result');
    }
  };

  return (
    <div>
      <h4>테스트 항목들입니다</h4>
      <Question seq="5"></Question>
      <button id="btn_prev" onClick={handleClick}>
        이전으로 가기
      </button>
      <button id="btn_next" onClick={handleClick}>
        다음으로 가기
      </button>
    </div>
  );
};

export default Test;
