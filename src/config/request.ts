import axios, { AxiosInstance } from "axios";
import { loadState } from "../storage/Storage";

const request:AxiosInstance = axios.create({ 
    baseURL: "http://135.181.108.207",
    headers: {
        "Content-Type": "application/json",
    }
})

request.interceptors.request.use((config:any) => {
    const token = loadState("user")
    if(config.url !== "/api/admin-login/")
        config.headers["Authorization"] = `Token ${token}`
      return config
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export {request}