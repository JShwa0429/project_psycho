import React, { useState } from 'react';
import Card from './atom/card';
import Move from './atom/move';
import Button from 'react-bootstrap/Button';

const Example = ({ history, location }) => {
  const [selected, setSelected] = useState(0);
  const userProfile = location.userProfile;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selected);
    history.push({
      pathname: '/test',
      userProfile: userProfile,
    });
  };

  const handleSelect = (value) => {
    setSelected(value);
    console.log(value);
  };

  const exampleQuestion = {};
  exampleQuestion['question'] = `${
    userProfile ? userProfile['name'] + '님' : ''
  } 오늘 기분은 어떠신가요?`;
  exampleQuestion['answer01'] = '나빠요';
  exampleQuestion['answer02'] = '별로에요';
  exampleQuestion['answer03'] = '괜찮아요';
  exampleQuestion['answer04'] = '좋아요';
  exampleQuestion['answerScore01'] = 1;
  exampleQuestion['answerScore02'] = 2;
  exampleQuestion['answerScore03'] = 3;
  exampleQuestion['answerScore04'] = 4;
  exampleQuestion['answerScore05'] = 5;
  exampleQuestion['qitemNo'] = '예시';

  return (
    <div>
      <h1>검사 예시</h1>
      <p>본인에게 알맞은 적성을 선택해주세요.</p>
      <form onSubmit={handleSubmit}>
        <Card question={exampleQuestion} onSelect={handleSelect} />

        <div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
          <Move />
          {selected ? (
            <Button type="submit">검사 시작</Button>
          ) : (
            <Button type="submit" disabled>
              검사 시작
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Example;
