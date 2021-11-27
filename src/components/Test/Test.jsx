import { useEffect, useState } from "react";
// import { ProgressBar } from "react-bootstrap";

import axios from "axios";
import { useHistory } from "react-router";
// import Example from "./example";
import Progress from "./progress";
import Completed from "./completed";

const Test = ({ user, onSave }) => {
  const history = useHistory();
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const cut = 5; // page 나누는 기준

  // 문제 GET API
  useEffect(() => {
    const key = "a4c80b03ef9a8b8df73cf7b36775257c";
    let result = [];
    const url = `https://www.career.go.kr/inspct/openapi/test/questions?apikey=${key}&q=${user.seq}`;
    axios
      .get(url)
      .then((res) => {
        result = res.data["RESULT"];
        setQuestions(result);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [user]);

  // 이전으로 가기, 다음으로 가기
  const handleClickMove = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (e.target.id === "next") {
      setCurrentPageIndex((current) => {
        return current + 1;
      });
    } else if (e.target.id === "prev") {
      if (currentPageIndex === 1) {
        history.goBack();
      }
      setCurrentPageIndex((current) => {
        return current - 1;
      });
    }
  };
  if (loading) return <div>로딩중...</div>;

  return (
    <div className="test">
      {/* PAGE 번호 1 일 때는 첫 문제를 예시로 보여준다 */}
      {currentPageIndex === 1 && (
        <div>
          <Progress
            testState="검사예시"
            questions={[Object.assign({}, questions[0], { qitemNo: 0 })]}
            cut={cut}
            currentPageIndex={currentPageIndex}
            onMove={handleClickMove}
            onSave={onSave}
          />
        </div>
      )}
      {/* 문제가 남아있는 경우 보여줄 PROGRESS */}
      {Math.ceil(questions.length / cut) + 1 >= currentPageIndex &&
        currentPageIndex > 1 && (
          <div>
            <Progress
              testState="검사진행"
              onSave={onSave}
              questions={questions}
              cut={cut}
              currentPageIndex={currentPageIndex}
              onMove={handleClickMove}
            />
          </div>
        )}
      {/* 문제가 더 이상 없을 때 보여줄 결과 완료 창 */}
      {currentPageIndex > Math.ceil(questions.length / cut) + 1 && (
        <div>
          <Completed seq={user.seq} />
        </div>
      )}
    </div>
  );
};

export default Test;
