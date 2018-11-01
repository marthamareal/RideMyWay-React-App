import axios from "axios";

const url = "https://ride-my-way-api-database.herokuapp.com";

let settings = {
  baseURL: url
};

if (localStorage.getItem("token")) {
  settings = {
    baseURL: url,
    headers: { token: localStorage.getItem("token") }
  };
}
export const axiosInstance = axios.create(settings);
