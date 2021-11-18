import React from 'react';
import Move from './atom/move';
import Question from './question';

const Test = ({ location }) => {
  const userProfile = location.userProfile;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h4>테스트 항목들입니다</h4>
      <Question seq={userProfile ? userProfile['qestrnSeq'] : '0'}></Question>
      <Move next={'/result'} />
    </div>
  );
};

export default Test;
