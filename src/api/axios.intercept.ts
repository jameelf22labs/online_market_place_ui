import axios from "axios";
import jsCookie from "js-cookie";
import { APP_BASE_URL } from "../common/constant/common.constant";

const api = axios.create({
  baseURL: APP_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = jsCookie.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;