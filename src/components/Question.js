// import React, { useEffect, useState } from 'react';
// import Api from '../static/js/api';

// const Questions = () => {
//   const [questions, setQuestions] = useState([]);
//   const api = new Api();

//   useEffect(() => {
//     setQuestions(api.getQuestions(5));
//   }, [api]);

//   return (
//     <div>
//       <h4>GET 요청해보기</h4>
//       <div>{questions[0]}</div>
//     </div>
//   );
// };

// export default Questions;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './atom/card';

const Question = (seq) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const key = 'a4c80b03ef9a8b8df73cf7b36775257c';

  useEffect(
    (seq) => {
      axios
        .get(
          `https://www.career.go.kr/inspct/openapi/test/questions?apikey=${key}&q=5`,
        )
        .then((res) => res.data['RESULT'])
        .then((result) => {
          setQuestions(result);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    },
    [seq],
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      {questions.map((question) => {
        return (
          <Card
            question={question}
            onSelect={(value) => console.log(value)}
          ></Card>
        );
      })}
    </div>
  );
};

export default Question;

const style = {
  card: {
    display: 'flex',
    justifyContent: 'center',
  },
};
