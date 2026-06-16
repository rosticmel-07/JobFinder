"use client";

import { useEffect, useState } from "react";
import css from "./RecentApplications.module.css";
type Application = {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  status: string;
};

export default function RecentApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  useEffect(() => {
    const storedApplications = localStorage.getItem("applications");

    if (storedApplications) {
      const parsedApplications: Application[] = JSON.parse(storedApplications);

      setApplications(parsedApplications.slice(-3).reverse());
    }
  }, []);
  return (
    <section className={css.wrapper}>
      <div className={css.header}>
        <h2 className={css.title}>Recent Applications</h2>
      </div>

      {applications.length === 0 ? (
        <div className={css.empty}>
          <p>No recent applications yet.</p>
        </div>
      ) : (
        <div className={css.list}>
          {applications.map((app) => (
            <div key={app.id} className={css.application}>
              <div>
                <h3 className={css.jobTitle}>{app.jobTitle}</h3>
                <p className={css.company}>{app.company}</p>
              </div>

              <span className={css.status}>{app.status}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
