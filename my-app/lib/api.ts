import { Job } from "@/type/jobs/job";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://69e50bedcfa9394db8daa851.mockapi.io",
});

export const fetchJobs = async () => {
  const response = await api.get<Job[]>("/jobs");
  return response.data;
};

export const getJobById = async (jobId: string) => {
  const response = await api.get<Job>(`/jobs/${jobId}`);
  return response.data;
};
