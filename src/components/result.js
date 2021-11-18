import React from 'react';
import { useHistory } from 'react-router';
import '../App.css';
import Button from 'react-bootstrap/Button';

const Result = ({ location }) => {
  const userProfile = location.userProfile;
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.replace('/');
  };

  return (
    <div>
      <h1>직업가치관검사 결과표</h1>
      <p>어쩌구 저쩌구</p>
      <table>
        <tr>
          <td>이름</td>
          <td>성별</td>
          <td>검사일</td>
        </tr>
        {userProfile && (
          <tr>
            <td>{userProfile['name']}</td>
            <td>{userProfile['gender']}</td>
            <td>{userProfile['startDtm']}</td>
          </tr>
        )}
      </table>
      <form onSubmit={handleSubmit}>
        <Button type="submit">다시 검사하기</Button>
      </form>
    </div>
  );
};

export default Result;
