import axios, { AxiosInstance } from "axios";

import { getApiBase } from "../config";

export const api: AxiosInstance = axios.create({
  baseURL: getApiBase(),
  headers: {
    "Content-Type": "application/json",
  },
});
