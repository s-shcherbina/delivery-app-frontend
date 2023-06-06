import axios from 'axios';
// import { config } from 'process';

// const token = localStorage.getItem('token');

export const API_URL = 'http://localhost:3001';

export const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  // headers: {},
});

export const instanceAuth = axios.create({
  // baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  baseURL: API_URL,
  timeout: 1000,
  // headers: {
  //   'X-Custom-Header': 'foobar',
  //   Authorization: `Bearer ${localStorage.getItem('token')}`,
  // },
});

// const authInterceptor = (config: any) => {
//   config.headers.autorization = `Bearer ${localStorage.getItem('token')}`;
//   return config;
// };

instanceAuth.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
