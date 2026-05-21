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

export default function StatsCards() {
  const stats = [
    {
      value: 100,
      title: "Interview Schedule",
      icon: Calendar,
    },
    {
      value: 45,
      title: "Application Sent",
      icon: Toolbox,
    },
    {
      value: 12,
      title: "Application Rejected",
      icon: XCircle,
    },
    {
      value: 2,
      title: "Offers",
      icon: Briefcase,
    },
    {
      value: 69,
      title: "Resume Views",
      icon: Mail,
    },
    {
      value: 14,
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
