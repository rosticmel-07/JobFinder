import css from "./page.module.css"
import { fetchJobs } from "@/lib/api";
import type { Job } from "@/type/jobs/job";
import SavedJobsClient from "@/components/SavedJobsClient/SavedJobsClient";
export default async function SavedPage() {
  const jobs: Job[] = await fetchJobs();
  return (
    <section className={css.savedPage}>
      <div className={css.header}>
        <h1>Saved Jobs</h1>
        <p>Your bookmarked opportunities</p>
      </div>

      <SavedJobsClient jobs={jobs} />
    </section>
  );
}
