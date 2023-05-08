import axios from "axios";

export const instance = axios.create({
  baseURL: "https://madesco.serveo.net/",
  timeout: 2000,
})