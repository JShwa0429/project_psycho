import Axios from "axios";

const axios = Axios.create({
  headers: { "Content-Type": "application/json" },
});

const api = {};
// const QUESTION_SEQ = "6";

api.getJobs = async ({ no1, no2 }) => {
  const res = await axios.get(
    "https://inspct.career.go.kr/inspct/api/psycho/value/jobs",
    {
      params: { no1, no2 },
    }
  );
  if (Array.isArray(res?.data)) {
    return res.data;
  }
};

api.getMajors = async ({ no1, no2 }) => {
  const res = await axios.get(
    "https://inspct.career.go.kr/inspct/api/psycho/value/majors",
    {
      params: { no1, no2 },
    }
  );
  if (Array.isArray(res?.data)) {
    return res.data;
  }
  throw new Error(res?.data?.ERROR_REASON || "");
};

export default api;
