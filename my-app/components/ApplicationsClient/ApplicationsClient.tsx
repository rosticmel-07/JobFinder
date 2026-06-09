"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import css from "./ApplicationsClient.module.css";

type Application = {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  name: string;
  email: string;
  message: string;
  status: string;
  createdAt: string;
};

export default function ApplicationsClient() {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const storedApplications = localStorage.getItem("applications");

    if (storedApplications) {
      setApplications(JSON.parse(storedApplications));
    }
  }, []);

  return (
    <div className={css.list}>
      {applications.map((application) => (
        <article key={application.id} className={css.card}>
          <div>
            <h3 className={css.jobTitle}>{application.jobTitle}</h3>

            <p className={css.company}>{application.company}</p>
          </div>

          <div className={css.meta}>
            <span className={css.status}>{application.status}</span>

            <span className={css.date}>{application.createdAt}</span>
          </div>

          {application.message && (
            <p className={css.message}>{application.message}</p>
          )}

          <div className={css.actions}>
            <Link href={`/jobs/${application.jobId}`} className={css.button}>
              View Job
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
