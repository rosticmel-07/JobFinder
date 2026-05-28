"use client";
import JobsSearch from "@/components/Jobs/JobsSearch/JobsSearch";
import { useState } from "react";
import JobsCards from "../JobsCards/JobsCards";
import { Job } from "@/type/jobs/job";

type JobProps = {
  jobs: Job[];
};

export default function JobsClient({ jobs }: JobProps) {
  const [search, setSearch] = useState("");
  const handleSearchChange = (value: string) => {
    setSearch(value);
  };
  const searchValue = search.toLowerCase();

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchValue) ||
      job.company.toLowerCase().includes(searchValue) ||
      job.location.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div>
      <JobsSearch value={search} onChange={handleSearchChange} />
      <JobsCards jobs={filteredJobs} />
    </div>
  );
}
