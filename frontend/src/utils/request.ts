import axios, { AxiosInstance } from 'axios';

const url = 'http://localhost:3000';

const service:AxiosInstance = axios.create({
    baseURL: url,
});

// request interceptor
service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

// response interceptor
service.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default service;