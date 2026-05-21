import SideBar from "@/components/Shared/sideBar/sideBar";
import styles from "./layout.module.css";

import SearchBar from "@/components/Shared/searchBar/searchBar";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import StatsCards from "@/components/StatsCards/StatsCards";
import ProfileCard from "@/components/Profile/ProfileCard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <SideBar />

      <div className={styles.container}>
        <div className={styles.dashboardArea}>
          <div className={styles.mainContent}>
            <SearchBar />

            <main className={styles.content}>
              {children}
              <DashboardHeader />
              <StatsCards />
            </main>
          </div>

          <aside className={styles.profileSection}>
            <ProfileCard />
          </aside>
        </div>
      </div>
    </div>
  );
}
