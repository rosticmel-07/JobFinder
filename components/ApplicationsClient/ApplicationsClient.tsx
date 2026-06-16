"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import css from "./ApplicationsClient.module.css";
import toast from "react-hot-toast";

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

  const handleStatusChange = (applicationId: string, newStatus: string) => {
    const updatedApplications = applications.map((application) => {
      if (application.id === applicationId) {
        return {
          ...application,
          status: newStatus,
        };
      }

      return application;
    });

    setApplications(updatedApplications);

    localStorage.setItem("applications", JSON.stringify(updatedApplications));
  };
  const handleDelete = (id: string) => {
    const updated = applications.filter((application) => application.id !== id);

    setApplications(updated);

    localStorage.setItem("applications", JSON.stringify(updated));
  };
  const handleButtonClick = (id: string) => {
    toast.success("Application deleted successfully!");
    handleDelete(id);
  };

  return (
    <div className={css.list}>
      {applications.map((application) => (
        <article key={application.id} className={css.card}>
          <div>
            <h3 className={css.jobTitle}>{application.jobTitle}</h3>

            <p className={css.company}>{application.company}</p>
          </div>

          <div className={css.meta}>
            <select
              value={application.status}
              onChange={(e) =>
                handleStatusChange(application.id, e.target.value)
              }
              className={css.statusSelect}
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Rejected">Rejected</option>
              <option value="Offer">Offer</option>
            </select>

            <span className={css.date}>{application.createdAt}</span>
          </div>

          {application.message && (
            <p className={css.message}>{application.message}</p>
          )}

          <div className={css.actions}>
            <Link href={`/jobs/${application.jobId}`} className={css.button}>
              View Job
            </Link>
            <button
              onClick={() => handleButtonClick(application.id)}
              className={`${css.button} ${css.rejectButton}`}
            >
              Delete
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
