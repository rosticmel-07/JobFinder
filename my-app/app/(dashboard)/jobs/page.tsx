import JobsCards from "@/components/Jobs/JobsCards/JobsCards";
import { fetchJobs } from "@/lib/api";
import type { Job } from "@/type/jobs/job";
import JobsClient from "@/components/Jobs/JobsClient/JobsClient";
export default async function JobsPage() {
  const jobs: Job[] = await fetchJobs();
  return (
    <div>
      {/* <JobsCards jobs={jobs} /> */}
      <JobsClient jobs={jobs} />
    </div>
  );
}
