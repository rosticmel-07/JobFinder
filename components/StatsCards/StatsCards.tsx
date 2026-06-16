"use client";
import { useState, useEffect } from "react";
import css from "./StatsCards.module.css";
import {
  Briefcase,
  Calendar,
  XCircle,
  Hammer,
  Toolbox,
  Archive,
  Mail,
  icons,
} from "lucide-react";

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

export default function StatsCards() {
  const [savedJobsCount, setSavedJobsCount] = useState(0);
  const [applicationsCount, setApplicationsCount] = useState(0);
  const [interviewCount, setInterviewCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [offersCount, setOffersCount] = useState(0);

  useEffect(() => {
    const savedClicks = window.localStorage.getItem("saved-jobs");

    if (savedClicks) {
      const savedJobs = JSON.parse(savedClicks);
      setSavedJobsCount(savedJobs.length);
    }
  }, []);

  useEffect(() => {
    const applications = window.localStorage.getItem("applications");

    if (applications) {
      const savedApplications: Application[] = JSON.parse(applications);

      setApplicationsCount(savedApplications.length);

      setInterviewCount(
        savedApplications.filter((app) => app.status === "Interview").length,
      );

      setRejectedCount(
        savedApplications.filter((app) => app.status === "Rejected").length,
      );

      setOffersCount(
        savedApplications.filter((app) => app.status === "Offer").length,
      );
    }
  }, []);

  const stats = [
    {
      value: interviewCount,
      title: "Interview Schedule",
      icon: Calendar,
    },
    {
      value: applicationsCount,
      title: "Application Sent",
      icon: Toolbox,
    },
    {
      value: rejectedCount,
      title: "Application Rejected",
      icon: XCircle,
    },
    {
      value: offersCount,
      title: "Offers",
      icon: Briefcase,
    },
    {
      value: 69,
      title: "Resume Views",
      icon: Mail,
    },
    {
      value: savedJobsCount,
      title: "Saved Jobs",
      icon: Archive,
    },
  ];

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <li key={stat.title} className={css.card}>
              <Icon color="#3bc444" strokeWidth={1.5} absoluteStrokeWidth />
              <div className={css.listWrapper}>
                <p className={css.value}>{stat.value}</p>
                <p className={css.title}>{stat.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
