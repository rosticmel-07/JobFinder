import Link from "next/link";
import { ArrowLeft, Bookmark, Send } from "lucide-react";
import { getJobById } from "@/lib/api";
import css from "./JobDetails.module.css";
import SaveJobButton from "@/components/SaveJobButton/SaveJobButton";
import ApplyButton from "@/components/Jobs/ApplyButton/ApplyButton";

type Props = {
  params: Promise<{ jobId: string }>;
};

export default async function JobDetailsPage(props: Props) {
  const { jobId } = await props.params;
  const job = await getJobById(jobId);

  return (
    <section className={css.wrapper}>
      <Link href="/jobs" className={css.backLink}>
        <ArrowLeft size={18} />
        Back to jobs
      </Link>

      <div className={css.card}>
        <div className={css.header}>
          <div className={css.logoBox}>{job.company?.[0]}</div>

          <div>
            <h1 className={css.title}>{job.title}</h1>
            <p className={css.company}>
              {job.company} • {job.location}
            </p>
          </div>
        </div>

        <div className={css.badges}>
          <span className={css.badge}>{job.type}</span>
          <span className={css.badge}>{job.level}</span>
        </div>

        <div className={css.salaryBlock}>
          <span className={css.label}>Salary</span>
          <strong className={css.salary}>${job.salary}/month</strong>
        </div>

        <div className={css.descriptionBlock}>
          <h2 className={css.sectionTitle}>Job Description</h2>
          <p className={css.description}>
            {job.description ?? "No description provided."}
          </p>
        </div>

        <div className={css.actions}>
          <SaveJobButton jobId={job.id} />
          <ApplyButton
            jobId={job.id}
            jobTitle={job.title}
            company={job.company}
          />
        </div>
      </div>
    </section>
  );
}
