import axios from "axios";

export const instance = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});
