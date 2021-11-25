import { useEffect, useMemo, useState } from "react";
// import { ProgressBar } from "react-bootstrap";

import axios from "axios";
import { useHistory } from "react-router";
import Example from "./example";
import Progress from "./progress";

const Test = ({ user }) => {
  const history = useHistory();
  const progressPercentage = useMemo(() => {}, []);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const key = "a4c80b03ef9a8b8df73cf7b36775257c";
    let result = [];
    const url = `https://www.career.go.kr/inspct/openapi/test/questions?apikey=${key}&q=${user.seq}`;
    axios
      .get(url)
      .then((res) => {
        result = res.data["RESULT"];
        setQuestions(result);
      })
      .catch((err) => console.error(err));
  }, [user]);

  const handleClickMove = (e) => {
    if (e.target.id === "next") {
      handleClickNext();
    } else if (e.target.id === "prev") {
      handleClickPrev();
    }
  };
  const handleClickNext = () => {
    setCurrentPageIndex((current) => {
      return current + 1;
    });
    console.log(currentPageIndex);
  };

  const handleClickPrev = () => {
    if (currentPageIndex === 0) {
      history.goBack();
    }
    setCurrentPageIndex((current) => {
      return current - 1;
    });
    console.log(currentPageIndex);
  };

  // const handleSelect = (qitemNo, selectAnswer) => {
  //   console.log(qitemNo, selectAnswer);
  //   setAnswerList((current) => {
  //     let newAnswerList = [...current];
  //     newAnswerList[qitemNo] = selectAnswer;
  //     return newAnswerList;
  //   });
  // };

  return (
    <div>
      {currentPageIndex === 0 && (
        <div>
          <Example questions={questions[0]} onMove={handleClickMove} />
        </div>
      )}
      {currentPageIndex > 0 && (
        <div>
          <Progress
            questions={questions}
            progressPercentage={progressPercentage}
            onMove={handleClickMove}
          />
        </div>
      )}
    </div>
  );
};

export default Test;
