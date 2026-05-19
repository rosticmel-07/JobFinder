import SideBar from "@/components/Shared/sideBar/sideBar";
import styles from "./layout.module.css";

import SearchBar from "@/components/Shared/searchBar/searchBar";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";
import StatsCards from "@/components/StatsCards/StatsCards";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <SideBar />

      <div className={styles.dashboardArea}>
        <SearchBar />

        <main className={styles.content}>
          {children}
          <DashboardHeader />
          <StatsCards />
        </main>
      </div>
    </div>
  );
}
