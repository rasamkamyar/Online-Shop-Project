import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

api.interceptors.response(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export default api;
