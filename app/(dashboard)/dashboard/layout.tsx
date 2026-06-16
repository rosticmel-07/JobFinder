import SearchBar from "@/components/Shared/searchBar/searchBar";
import ProfileCard from "@/components/Profile/ProfileCard";
import RecentApplications from "@/components/RecentApplications/RecentApplications";

import styles from "./layout.module.css";

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.dashboardArea}>
      <div className={styles.mainContent}>
        <main>
          {children}
          <RecentApplications />
        </main>
      </div>
    </div>
  );
}
