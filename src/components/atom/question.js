import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./card";

const Question = (props) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const key = "a4c80b03ef9a8b8df73cf7b36775257c";

  useEffect(() => {
    axios
      .get(
        `https://www.career.go.kr/inspct/openapi/test/questions?apikey=${key}&q=${props.seq}`
      )
      .then((res) => res.data["RESULT"])
      .then((result) => {
        console.log(result);
        console.log(props.seq);
        setQuestions(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [props.seq]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (props.seq === "0") return <p>검사변수가 없습니다!</p>;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {questions.map((question) => {
        return <Card question={question} onSelect={props.onSelect} />;
      })}
    </div>
  );
};

export default Question;
