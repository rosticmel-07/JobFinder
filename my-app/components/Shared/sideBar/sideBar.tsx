import Link from "next/link";
import styles from "./sidebar.module.css";

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>JobFinder</h2>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/dashboard" className={styles.navLink}>
            Home
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/jobs" className={styles.navLink}>
            Jobs
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/companies" className={styles.navLink}>
            Companies
          </Link>
        </li>
      </ul>
    </aside>
  );
}
