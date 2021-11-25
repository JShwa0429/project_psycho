const Card = ({ question, onSelect, answers }) => {
  const handleChange = (index, qitemNo) => {
    onSelect(index, qitemNo);
  };
  // const [selectValue, setSelectValue] = useState(null);

  const qestStr = `문제${question["qitemNo"]}. ${question["question"]}`;
  qestStr.split("<br/>").map((line) => {
    return (
      <span>
        {line}
        <br />
      </span>
    );
  });

  const answer = [];
  let count = 1;
  for (let i = 1; i < 11; i++) {
    // 답안은 있는데, 점수가 반영이 안 된 경우 해당 답안을 힌트로 바꾼다
    if (question["answer0" + i] == null) break;
    if (question["answerScore0" + i] == null) {
      question[`tip${count}Score`] = question["answer0" + i];
      question["answer0" + i] = null;
      count += 1;
      break;
    }
    answer.push(
      // <Button onClick={handleClick} value={question["answerScore" + index]}>
      //   {question["answer" + index]}
      // </Button>

      <label class="btn btn-outline-primary">
        <input
          type="radio"
          // className="btn-check"
          name={`${question["qitemNo"]}`}
          id={`${question["qitemNo"]}`}
          value={`${question["answerScore0" + i]}`}
          checked={answers?.[question["qitemNo"]] === i}
          onChange={(e) => {
            if (typeof handleChange === "function") {
              // i : 답이 몇 번째 선택사항인지
              // e.target.id : 답이 몇 번째 문제 인지
              handleChange(i, e.target.id);
            }
          }}
        />
        {question["answer0" + i]}
      </label>
    );
  }

  return (
    <div
      claseName="container"
      style={{
        margin: "14 0",
        display: "block",
        width: "100%",
        justifyContent: "center",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <div claseName="question">
        {qestStr.split("<br/>").map((line) => {
          return (
            <h3>
              {line}
              <br />
            </h3>
          );
        })}
      </div>
      <div
        className="answer justify-center"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        {answer.map((value) => {
          return <div className="form-check form-check-inline">{value}</div>;
        })}
      </div>
    </div>
  );
};
export default Card;

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
