import JobsCards from "@/components/Jobs/JobsCards/JobsCards";
import { fetchJobs } from "@/lib/api";
import type { Job } from "@/type/jobs/job";
import JobsClient from "@/components/Jobs/JobsClient/JobsClient";
import css from "./page.module.css";
export default async function JobsPage() {
  const jobs: Job[] = await fetchJobs();
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h1 className={css.title}>Browse Jobs</h1>
        <p className={css.subtitle}>Find your next opportunity</p>
      </div>

      <JobsClient jobs={jobs} />
    </div>
  );
}
