import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'content-type': 'application/json',
  },
  timeout: 5000,
  responseType: 'json',
});

export default axiosInstance;
