import Button from 'react-bootstrap/Button';
import React from 'react';
import styled from 'styled-components';

const Card = ({ question, onSelect }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onSelect(e.target.value);
  };

  return (
    <div style={style.container}>
      <div style={style.question}>
        <h3>문제.{question['question']}</h3>
      </div>
      <div style={style.answer}>
        <Button onClick={handleClick} value={1}>
          {question['answer01']}
        </Button>
        <Button onClick={handleClick} value={2}>
          {question['answer02']}
        </Button>
        <Button onClick={handleClick} value={3}>
          {question['answer03']}
        </Button>
        <Button onClick={handleClick} value={4}>
          {question['answer04']}
        </Button>
      </div>
    </div>
  );
};
export default Card;

const style = {
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#dfe3e6',
    marginTop: 8,
    padding: 8,
    width: 1000,
    height: 200,
    borderRadius: 3,
  },

  answer: {
    display: 'flex',
    justifyContent: 'center',
  },
};
