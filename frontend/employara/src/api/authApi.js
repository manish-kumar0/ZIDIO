import axios from 'axios';
import { handle401 } from './handle401';

const authApi = axios.create({
  baseURL: 'http://locolhost:8080/api/auth',
  withCredentials: true,
});


authApi.interceptors.response.use(
  response => response,
  error => handle401(error, authApi)
);

export default authApi;