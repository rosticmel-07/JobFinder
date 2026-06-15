import ApplicationsClient from "@/components/ApplicationsClient/ApplicationsClient";
import css from "./page.module.css";

export default function ApplicationsPage() {
  return (
    <section className={css.wrapper}>
      <div className={css.header}>
        <h1 className={css.title}>Applications</h1>

        <p className={css.subtitle}>Your submitted job applications</p>
      </div>

      <ApplicationsClient />
    </section>
  );
}
