import axios from "axios";

export const instance = axios.create({
  baseURL: "https://ebff-200-24-80-15.ngrok-free.app/",
  timeout: 2000,
})