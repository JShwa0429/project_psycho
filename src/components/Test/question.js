import { Card } from "react-bootstrap";
import { useMemo } from "react";
const Question = ({ question, onSelect, answers }) => {
  const handleChange = (index, qitemNo, score) => {
    onSelect(index, qitemNo, score);
  };
  // const [selectValue, setSelectValue] = useState(null);

  const { qestNum, qestStr } = useMemo(() => {
    return {
      qestNum: `문제 ${question["qitemNo"]}`,
      qestStr: question["question"],
    };
  }, [question]);

  const AnswerSelect = [];
  for (let i = 1; i < 11; i++) {
    // 답안은 있는데, 점수가 반영이 안 된 경우 해당 답안을 힌트로 바꾼다
    if (question["answer0" + i] == null) continue;
    if (question["answerScore0" + i] == null || question["answer0" + i] == null)
      continue;

    // 답안을 순서대로 넣는다
    AnswerSelect.push(
      // <Button onClick={handleClick} value={question["answerScore" + index]}>
      //   {question["answer" + index]}
      // </Button>

      <>
        <input
          className="btn-check"
          type="radio"
          name={`${question["qitemNo"]}`}
          id={`${question["qitemNo"]}-${i}`}
          value={`${question["answerScore0" + i]}`}
          checked={answers?.index?.[question["qitemNo"]] === i}
          onClick={(e) => {
            if (typeof handleChange === "function") {
              // i : 답이 몇 번째 선택사항인지
              // e.target.id : 답이 몇 번째 문제 인지
              // const element = document.getElementById(e.target.id);
              window.scrollBy(0, 0.3 * window.innerHeight);
              handleChange(i, e.target.name, e.target.value);
            }
          }}
        />
        <label
          className="btn btn-outline-primary justify-center"
          style={{
            width: "15vw",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2vw",
          }}
          htmlFor={`${question["qitemNo"]}-${i}`}
        >
          {question["answer0" + i]}
        </label>
      </>
    );
  }

  return (
    <Card className="text-center" style={{ width: "90%" }}>
      <Card.Header>
        <b>{qestNum}</b>
      </Card.Header>
      <Card.Body>
        <Card.Title style={{ marginTop: "1vh", marginBottom: "0vh" }}>
          <h4>{qestStr}</h4>
        </Card.Title>
        <div
          className="answer justify-center"
          role="group"
          aria-label="Basic radio toggle button group"
          style={{ marginTop: "3vh" }}
        >
          {AnswerSelect.map((value, index = 0) => {
            return (
              <div
                key={value + index++}
                className="form-check form-check-inline"
              >
                {value}
              </div>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
};
export default Question;

// {
//   "question": "직장에서 업무에 필요한 전화연락, 우편물, 서류 등을 정리한다.",
//   "answer01": "매우싫다",
//   "answer02": "약간싫다",
//   "answer03": "약간좋다",
//   "answer04": "매우좋다",
//   "answer05": null,
//   "answer06": null,
//   "answer07": null,
//   "answer08": null,
//   "answer09": null,
//   "answer10": null,
//   "answerScore01": "1",
//   "answerScore02": "2",
//   "answerScore03": "3",
//   "answerScore04": "4",
//   "answerScore05": null,
//   "answerScore06": null,
//   "answerScore07": null,
//   "answerScore08": null,
//   "answerScore09": null,
//   "answerScore10": null,
//   "tip1Score": null,
//   "tip2Score": null,
//   "tip3Score": null,
//   "tip1Desc": null,
//   "tip2Desc": null,
//   "tip3Desc": null,
//   "qitemNo": 1
// },
