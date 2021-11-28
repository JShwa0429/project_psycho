import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Progress from "./progress";
import Completed from "./completed";
import Loading from "../Loading";

const Test = ({ onSave }) => {
  // Store 에 데이터를 저장할 함수를 받아옵니다
  const history = useHistory(); // 페이지 이동용 history
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 담을 변수
  const [questions, setQuestions] = useState([]); // Api 에서 받아온 문제들을 담는 State
  const [loading, setLoading] = useState(true); // Api 데이터 가져오는 경우
  const cut = 5; // page 나누는 기준

  // 문제 GET API
  const getQuestion = useCallback(() => {
    const key = "a4c80b03ef9a8b8df73cf7b36775257c";
    const url = `https://www.career.go.kr/inspct/openapi/test/questions?apikey=${key}&q=6`;
    let result = [];

    axios
      .get(url)
      .then((res) => {
        result = res.data["RESULT"];
        setQuestions(result);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // 이전으로 가기, 다음으로 가기를 눌렀을 때 현재 페이지 이동
  const handleClickMove = (e) => {
    // 화면 맨 위로 올라갑니다
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (e.target.id === "next") {
      setCurrentPage((current) => {
        return current + 1;
      });
    } else if (e.target.id === "prev") {
      if (currentPage === 1) {
        history.goBack();
      }
      setCurrentPage((current) => {
        return current - 1;
      });
    }
  };

  useEffect(() => {
    getQuestion();
  }, [getQuestion]);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <div className="test">
      {/* PAGE 번호 1 일 때는 첫 문제를 예시로 보여준다 */}
      {currentPage === 1 && (
        <Progress
          testState="검사예시" // 검사 상태
          questions={[Object.assign({}, questions[0], { qitemNo: 0 })]} // 1번문제를 문제0으로 해서 예시로 보여준다
          cut={cut} // 한 페이지 당 표시할 문제
          currentPage={currentPage} // 현재 페이지
          onMove={handleClickMove} // 페이지를 이동할 핸들러
          onSave={onSave} // 선택한 답안을 리덕스에 저장
        />
      )}

      {/* 선택해야할 것이 아직 남은 상황이면 검사 진행 페이지를 출력한다 */}
      {Math.ceil(questions.length / cut) + 1 >= currentPage && currentPage > 1 && (
        <Progress
          testState="검사진행" // 검사 표시
          questions={questions} // question에 보내줄 문제들
          cut={cut} // 한 페이지 당 표시할 문제
          currentPage={currentPage} // 현재 페이지
          onMove={handleClickMove} // 페이지를 이동할 핸들러
          onSave={onSave} // 선택한 답안을 리덕스에 저장
        />
      )}

      {/* 문제가 더 이상 없을 때 보여줄 결과 완료 창 */}
      {currentPage > Math.ceil(questions.length / cut) + 1 && <Completed />}
    </div>
  );
};

export default Test;
