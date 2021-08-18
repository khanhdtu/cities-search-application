import axios from 'axios';

const request = axios.create({
  baseURL: process.env.SEARCH_END_POINT,
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  params: {
    types: '(cities)',
    language: 'vi_VN',
    key: process.env.GOOGLE_API_KEY,
  },
});

request.interceptors.response.use(
  response => response,
  error => error,
);

export default request;
