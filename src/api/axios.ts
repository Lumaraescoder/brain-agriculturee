import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 5000,
  responseType: 'json',
});

export default axiosInstance;
