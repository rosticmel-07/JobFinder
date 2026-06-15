"use client";
import JobsSearch from "@/components/Jobs/JobsSearch/JobsSearch";
import { useState } from "react";
import JobsCards from "../JobsCards/JobsCards";
import { Job } from "@/type/jobs/job";
import { useDebouncedCallback } from "use-debounce";
import JobsFilters from "../JobsFilters/JobsFilters";
import EmptyState from "../EmptyState/EmptyState";

type JobProps = {
  jobs: Job[];
};

export default function JobsClient({ jobs }: JobProps) {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const debounced = useDebouncedCallback(
    (value: string) => {
      setDebouncedSearch(value);
    },

    500,
  );
  const handleSearchChange = (value: string) => {
    setSearch(value);
    debounced(value);
  };

  const searchValue = debouncedSearch.toLowerCase();

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchValue) ||
      job.company.toLowerCase().includes(searchValue) ||
      job.location.toLowerCase().includes(searchValue);

    const matchesLevel = selectedLevel === "All" || job.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  return (
    <div>
      <JobsSearch value={search} onChange={handleSearchChange} />
      <JobsFilters
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
      />
      {filteredJobs.length === 0 ? (
        <EmptyState />
      ) : (
        <JobsCards jobs={filteredJobs} />
      )}
    </div>
  );
}
