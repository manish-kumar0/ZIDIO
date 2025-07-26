import axios from 'axios';
import { handle401 } from './handle401';

const jobseekerApi = axios.create({
  baseURL: 'http://locolhost:8080/api/user/jobseeker',
  withCredentials: true,
});

jobseekerApi.interceptors.response.use(
  response => response,
  error => handle401(error, jobseekerApi)
);

export default jobseekerApi;