"use client";
import type { Job } from "@/type/jobs/job";
import { useState, useEffect } from "react";
import JobsCards from "@/components/Jobs/JobsCards/JobsCards";
import SaveEmptyState from "../Jobs/EmptyState/SaveEmptyState/SaveEmptyState";

type JobProps = {
  jobs: Job[];
};

export default function SavedJobsClient({ jobs }: JobProps) {
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem("saved-jobs");

    if (saved) {
      setSavedJobIds(JSON.parse(saved));
    }
  }, []);
  const savedJobs = jobs.filter((job) => {
    return savedJobIds.includes(job.id);
  });
  return (
    <>
      {savedJobs.length === 0 ? (
        <SaveEmptyState />
      ) : (
        <JobsCards jobs={savedJobs} />
      )}
    </>
  );
}
