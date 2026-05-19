import css from "./StatsCards.module.css";

export default function StatsCards() {
  const stats = [
    {
      value: 100,
      title: "Interview Schedule",
    },
    {
      value: 45,
      title: "Application Sent",
    },
    {
      value: 12,
      title: "Application Rejected",
    },
    {
      value: 2,
      title: "Offers",
    },
  ];

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {stats.map((stat) => (
          <li key={stat.title} className={css.card}>
            <p className={css.value}>{stat.value}</p>

            <p className={css.title}>{stat.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
