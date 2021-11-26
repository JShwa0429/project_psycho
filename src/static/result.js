import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_RESULT_API_HOST,
  headers: { "Content-Type": "application/json" },
});
