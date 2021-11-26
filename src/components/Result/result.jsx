import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Result = ({ user, answers, onInit }) => {
  // const [report, setReport] = useState({});
  // const [majors, setMajors] = useState(null);
  // const [jobs, setJobs] = useState(null);
  const postURL = "http://www.career.go.kr/inspct/openapi/test/report";
  let getURL = "https://www.career.go.kr/inspct/api/psycho/report?seq=";
  const answers_data = JSON.stringify(answers)
    .replaceAll(/:/g, "=")
    .replaceAll(/"/g, "")
    .replaceAll(/,/g, " ")
    .replaceAll(/{/g, "")
    .replaceAll(/}/g, "");
  // const data = { ...user, answers: answers_data };
  // console.log(data);
  const data = {
    apikey: "a4c80b03ef9a8b8df73cf7b36775257c",
    qestrnSeq: "6",
    trgetSe: "100206",
    gender: "100205",
    name: "홍",
    startDtm: 1637950538941,
    answers:
      "B1=2 B2=2 B3=2 B4=2 B5=2 B6=2 B7=2 B8=2 B9=2 B10=2 B11=2 B12=2 B13=2 B14=2 B15=2 B16=2 B17=2 B18=1 B19=2 B20=1 B21=2 B22=2 B23=2 B24=2 B25=2 B26=2 B27=2 B28=2",
  };

  useEffect(() => {
    axios
      .post(postURL, data)
      .then((res) => {
        getURL += res.data.RESULT.url.replace(
          "https://www.career.go.kr/inspct/web/psycho/value/report?seq=",
          ""
        );
        console.log(getURL);
      })
      .catch((error) => console.log(error));
  }, [getURL]);

  return (
    <div>
      <p>{JSON.stringify(user)}</p>
      <p>{answers_data}</p>
      <Link className="btn btn-outline-primary" to="/" onClick={() => onInit()}>
        다시 검사하기
      </Link>
    </div>
  );
};

export default Result;
