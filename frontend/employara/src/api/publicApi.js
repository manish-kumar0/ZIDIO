import axios from "axios";

const publicApi = axios.create({
  baseURL: "http://locolhost:8080/api/public",
  withCredentials: true,
});

// Add this to your existing publicApi endpoints
const searchJobs = async (searchParams) => {
  return await publicApi.post("/search-jobs", searchParams);
};

// Add to your exports
export { searchJobs };
export default publicApi;
