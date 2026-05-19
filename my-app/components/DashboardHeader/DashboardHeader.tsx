import css from "./DashboardHeader.module.css";

export default function DashboardHeader() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={css.wrapper}>
      <div className={css.left}>
        <p className={css.date}>{formattedDate}</p>

        <h1 className={css.title}>Good morning, Rostik 👋</h1>

        <p className={css.subtitle}>Track your job applications</p>
      </div>

      <button className={css.button}>+ Post Job</button>
    </div>
  );
}
