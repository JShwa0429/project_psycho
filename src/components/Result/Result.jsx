import Axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo, useCallback } from "react";
import Chart from "./chart";
import { genderList, majorList, educationList } from "../../etc/data";
import api from "../../etc/api";
import { Table } from "react-bootstrap";
import { apikey, Seq } from "../../etc/data";

const Result = ({ user, answers, onInit }) => {
  const [getSEQ, setGetSEQ] = useState("");
  const [major, setMajor] = useState(null);
  const [job, setJob] = useState(null);
  const [report, setReport] = useState({});

  const answersScoreData = answers.score
    ? JSON.stringify(answers.score)
        .replaceAll(/:/g, "=")
        .replaceAll(/"/g, "")
        .replaceAll(/,/g, " ")
        .replaceAll(/{/g, "")
        .replaceAll(/}/g, "")
    : " ";

  const TestDate = useMemo(() => {
    return user ? new Date(user?.startDtm).toLocaleDateString() : 0;
  }, [user]);

  const getResult = useCallback(() => {
    if (user) {
      const data = {
        apikey: apikey,
        qestrnSeq: Seq,
        trgetSe: "100209",
        gender: user.gender,
        name: user.name,
        startDtm: user.startDtm,
        answers: answersScoreData,
      };

      const axios = Axios.create({
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
        })
        .catch((error) => console.log(error));
    }
  }, [answersScoreData, user]);

  const getReport = useCallback(() => {
    let getURL = "https://www.career.go.kr/inspct/api/psycho/report";
    const axios = Axios.create({
      headers: { "Content-Type": "application/json" },
    });
    axios
      .get(getURL, { params: { seq: getSEQ } })
      .then((res) => {
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

  const getJob = useCallback(async () => {
    if (Array.isArray(sortedReportScores) && sortedReportScores.length > 2) {
      const [{ seq: no1 }, { seq: no2 }] = sortedReportScores;
      if (no1 && no2) {
        const res = await api.getJob({
          no1: no1,
          no2: no2,
        });
        if (res) {
          setJob(res);
        }
      }
    }
  }, [sortedReportScores]);

  const getMajor = useCallback(async () => {
    if (Array.isArray(sortedReportScores) && sortedReportScores.length > 2) {
      const [{ seq: no1 }, { seq: no2 }] = sortedReportScores;
      if (no1 && no2) {
        const res = await api.getMajor({
          no1: no1,
          no2: no2,
        });
        if (res) {
          setMajor(res);
        }
      }
    }
  }, [sortedReportScores]);

  useEffect(() => {
    getResult();
  }, [getResult]);

  useEffect(() => {
    getReport();
  }, [getReport]);

  useEffect(() => {
    getJob();
  }, [getJob]);

  useEffect(() => {
    getMajor();
  }, [getMajor]);

  return (
    <div className="result">
      <div className="text-center mb-4">
        <h1 className="border-bottom d-inline-block">????????????????????? ?????????</h1>
      </div>
      <p>
        <b>???????????????</b>?????? ????????? ????????? ??? ????????? ????????? ???????????? ?????????
        ???????????????. ????????? ???????????? ??????????????? ???????????? ???????????? ?????? ???????????????
        ????????? ????????? ??? ??? ????????????. ???????????????????????? ???????????? ????????? ????????? ???
        ??????????????? ????????? ????????? ???????????? ?????????????????? ???????????????. ?????? ?????????
        ?????? ???????????? ???????????? ????????? ??????????????? ??? ?????? ????????? ?????? ????????? ???
        ????????? ???????????????.
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>??????</th>
            <th>??????</th>
            <th>?????????</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name ?? "??????"}</td>
            <td>{user.gender ? genderList[user.gender] : "??????"}</td>
            <td>{TestDate ?? "?????????"}</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <br />
      <div className="score-chart" style={{ paddingBottom: "3vh" }}>
        <h2>?????????????????????</h2>
        <div style={{ border: "1px solid black" }}>
          <Chart data={reportScores} />
        </div>
      </div>
      <div style={{ marginTop: "8vh" }}>
        <h2>???????????? ????????? ?????? ??????</h2>
        <div className="bg-primary p-2 text-center text-white">
          <h4>????????? ?????? ?????????</h4>
        </div>
        <Table>
          <thead>
            <tr>
              <th scope="col" style={{ whiteSpace: "nowrap", minWidth: 120 }}>
                ??????
              </th>
              <th scope="col">??????</th>
            </tr>
          </thead>
          <tbody>
            {educationList.map((education, educationIndex) => {
              const jobByEducation = (job || []).filter((job) => {
                return job?.[2] === educationIndex + 1;
              });
              return (
                <tr
                  style={jobByEducation.length <= 0 ? { display: "none" } : {}}
                >
                  <td
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    {education}
                  </td>
                  <td>
                    {jobByEducation.map((job) => {
                      const [jobSeq, jobName] = job;
                      return (
                        <a
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
          </tbody>
        </Table>

        <div className="bg-primary p-2 text-center text-white">
          <h4>????????? ?????? ?????????</h4>
        </div>
        <Table>
          <thead>
            <tr>
              <th
                scope="col"
                style={{
                  whiteSpace: "nowrap",
                  minWidth: 120,
                }}
              >
                ??????
              </th>
              <th scope="col">??????</th>
            </tr>
            {majorList.map((majorName, majorNameIndex) => {
              const jobsByMajor = (major || []).filter((job) => {
                return job?.[2] === majorNameIndex + 1;
              });
              return (
                <tr style={jobsByMajor.length <= 0 ? { display: "none" } : {}}>
                  <td>{majorName}</td>
                  <td>
                    {jobsByMajor.map((job) => {
                      const [jobSeq, jobName] = job;
                      return (
                        <a
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
        </Table>
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          className="btn btn-outline-primary"
          to="/"
          onClick={() => onInit()}
          style={{
            fontSize: "2em",
          }}
        >
          ?????? ????????????
        </Link>
      </div>
    </div>
  );
};

export default Result;
