import axios from "axios";

export const fetchJobs = async () => {
  const response = await axios.get(
    "https://69e50bedcfa9394db8daa851.mockapi.io/jobs",
  );
  return response.data;
};
