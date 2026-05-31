import css from "./JobsCards.module.css";
import type { Job } from "@/type/jobs/job";
import Link from "next/link";
type JobProps = {
  jobs: Job[];
};

export default function JobsCards({ jobs }: JobProps) {
  return (
    <section className={css.wrapper}>
      <div className={css.list}>
        {jobs.map((job) => (
          <article key={job.id} className={css.card}>
            <div className={css.top}>
              <img
                src={job.logo}
                width={60}
                height={60}
                alt={job.company}
                className={css.logo}
              />

              <div className={css.info}>
                <h2 className={css.jobTitle}>{job.title}</h2>

                <p className={css.company}>
                  {job.company} • {job.location}
                </p>
              </div>
            </div>

            <div className={css.badges}>
              <span className={css.badge}>{job.type}</span>

              <span className={css.badge}>{job.level}</span>
            </div>

            <p className={css.description}>
              {(job.description ?? "No description provided.").slice(0, 90)}...
            </p>

            <div className={css.bottom}>
              <p className={css.salary}>${job.salary}/month</p>

              <Link href={`/jobs/${job.id}`} className={css.button}>
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
