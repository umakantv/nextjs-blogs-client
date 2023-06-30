import Axios from "axios";
import config from "../config";
import AppError from "../utils/AppError";

const axios = Axios.create({
  baseURL: config.API_BASE_URL, // http://localhost:3002/api + /auth/register
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(
  function (value) {
    // console.log(value.data.data)
    return value.data.data;
  },
  function (err) {
    console.error(err.response?.status, err.response.data);
    const status = err.response?.status || 500;
    const message = err.response?.data.message || "Something went wrong";
    const errorCode = err.response?.data.error_code || "";
    const meta = err.response?.data.meta || {};

    throw new AppError(message, status, message, errorCode, meta);
  }
);

export default axios;
