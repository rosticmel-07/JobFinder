import SearchBar from "@/components/Shared/searchBar/searchBar";
import ProfileCard from "@/components/Profile/ProfileCard";

import styles from "./layout.module.css";

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.dashboardArea}>
      <div className={styles.mainContent}>
        <SearchBar />

        <main>{children}</main>
      </div>

      <aside className={styles.profileSection}>
        <ProfileCard />
      </aside>
    </div>
  );
}
