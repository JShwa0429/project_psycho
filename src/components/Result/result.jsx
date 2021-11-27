import Axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo, useCallback } from "react";
import Chart from "./chart";
import { gender, majorNames, educationLevelNames } from "../../static/js/data";
import api from "../../static/js/api";

const Result = ({ user, answers, onInit }) => {
  const [majors, setMajors] = useState(null);

  const [jobs, setJobs] = useState(null);
  const [getSEQ, setGetSEQ] = useState("");
  const [report, setReport] = useState({});
  const answers_data = answers.score
    ? JSON.stringify(answers.score)
        .replaceAll(/:/g, "=")
        .replaceAll(/"/g, "")
        .replaceAll(/,/g, " ")
        .replaceAll(/{/g, "")
        .replaceAll(/}/g, "")
    : " ";

  const isReportLoaded = useMemo(() => {
    return report && report?.user && report?.inspct && report?.result;
  }, [report]);

  const {
    name: userName,
    gender: userGender,
    date: reportedDate,
  } = useMemo(() => {
    if (isReportLoaded) {
      const { name } = report?.user;
      const { registDt: registrationDateString, sexdstn: genderSeq } =
        report?.inspct;

      return {
        name,
        date: new Date(registrationDateString).toLocaleDateString(),
        gender: gender[genderSeq],
      };
    }
    return {};
  }, [isReportLoaded, report]);

  useEffect(() => {
    const data = {
      apikey: "a4c80b03ef9a8b8df73cf7b36775257c",
      qestrnSeq: user.seq,
      trgetSe: "100209",
      gender: user.gender,
      name: user.name,
      startDtm: user.startDtm,
      answers: answers_data,
    };

    const axios = Axios.create({
      baseURL: process.env.REACT_APP_RESULT_API_HOST,
      headers: { "Content-Type": "application/json" },
    });

    const postURL = "http://www.career.go.kr/inspct/openapi/test/report";
    axios
      .post(postURL, data)
      .then((res) => {
        return res.data.RESULT.url;
      })
      .then((res) => {
        return res.split(
          "https://www.career.go.kr/inspct/web/psycho/value/report?seq="
        )[1];
      })
      .then((res) => {
        setGetSEQ(res);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, [answers_data, user]);

  useEffect(() => {
    let getURL = "https://www.career.go.kr/inspct/api/psycho/report";
    const axios = Axios.create({
      baseURL: process.env.REACT_APP_RESULT_API_HOST,
      headers: { "Content-Type": "application/json" },
    });
    axios
      .get(getURL, { params: { seq: getSEQ } })
      .then((res) => {
        console.log(res.data);
        setReport(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [getSEQ]);

  const reportScores = useMemo(() => {
    if (report?.result?.wonScore) {
      const scores = (report.result.wonScore + "")
        .split(" ")
        .filter((value) => {
          return !!value;
        })
        .map((value) => {
          const [seq, score] = value
            .split("=")
            .map((text) => parseInt(text, 10));
          return { seq, score };
        });
      return scores;
    }
    return [];
  }, [report]);

  const sortedReportScores = useMemo(() => {
    if (Array.isArray(reportScores)) {
      return [...reportScores].sort((a, b) => {
        return a.score < b.score ? 1 : -1;
      });
    }
    return [];
  }, [reportScores]);
  const fetchJobs = useCallback(async () => {
    if (Array.isArray(sortedReportScores) && sortedReportScores.length > 2) {
      const [{ seq: no1 }, { seq: no2 }] = sortedReportScores;
      if (no1 && no2) {
        const res = await api.getJobs({
          no1: no1,
          no2: no2,
        });
        if (res) {
          setJobs(res);
        }
      }
    }
  }, [sortedReportScores]);

  const fetchMajors = useCallback(async () => {
    if (Array.isArray(sortedReportScores) && sortedReportScores.length > 2) {
      const [{ seq: no1 }, { seq: no2 }] = sortedReportScores;
      if (no1 && no2) {
        const res = await api.getMajors({
          no1: no1,
          no2: no2,
        });
        if (res) {
          setMajors(res);
        }
      }
    }
  }, [sortedReportScores]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  useEffect(() => {
    fetchMajors();
  }, [fetchMajors]);
  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="border-bottom d-inline-block">직업가치관검사 결과표</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">성별</th>
            <th scope="col">검사일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userName}</td>
            <td>{userGender}</td>
            <td>{reportedDate}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <div>
        <h3>직업가치관결과</h3>
        <Chart data={reportScores} />
      </div>
      <br />
      <br />
      <div>
        <h3>가치관과 관련이 높은 직업</h3>
        <div className="bg-secondary p-2 text-center text-white">
          <h4>종사자 평균 학력별</h4>
        </div>
        <table className="table">
          <thread>
            <tr>
              <th scope="col" style={{ whiteSpace: "nowrap", minWidth: 120 }}>
                분야
              </th>
              <th scope="col">직업</th>
            </tr>
            {educationLevelNames.map(
              (educationLevelName, educationLevelIndex) => {
                const jobsByEducationLevel = (jobs || []).filter((job) => {
                  return job?.[2] === educationLevelIndex + 1;
                });
                return (
                  <tr
                    style={
                      jobsByEducationLevel.length <= 0
                        ? { display: "none" }
                        : {}
                    }
                  >
                    <td
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      {educationLevelName}
                    </td>
                    <td>
                      {jobsByEducationLevel.map((job) => {
                        const [jobSeq, jobName] = job;
                        return (
                          <a
                            className="mr-2"
                            href={`https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${jobSeq}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {jobName}
                          </a>
                        );
                      })}
                    </td>
                  </tr>
                );
              }
            )}
          </thread>
        </table>
        <div className="bg-secondary p-2 text-center text-white">
          <h4>종사자 평균 전공별</h4>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{ whiteSpace: "nowrap", minWidth: 120 }}>
                분야
              </th>
              <th scope="col">직업</th>
            </tr>
            {majorNames.map((majorName, majorNameIndex) => {
              const jobsByMajor = (majors || []).filter((job) => {
                return job?.[2] === majorNameIndex + 1;
              });
              return (
                <tr style={jobsByMajor.length <= 0 ? { display: "none" } : {}}>
                  <td
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    {majorName}
                  </td>
                  <td>
                    {jobsByMajor.map((job) => {
                      const [jobSeq, jobName] = job;
                      return (
                        <a
                          className="mr-2"
                          href={`https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${jobSeq}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {jobName}
                        </a>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
      <Link className="btn btn-outline-primary" to="/" onClick={() => onInit()}>
        다시 검사하기
      </Link>
    </div>
  );
};

export default Result;
