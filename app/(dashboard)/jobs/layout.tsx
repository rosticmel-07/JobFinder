import SearchBar from "@/components/Shared/searchBar/searchBar";
import ProfileCard from "@/components/Profile/ProfileCard";

import styles from "./layout.module.css";

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.jobsArea}>
      <div className={styles.mainContent}>{children}</div>
    </div>
  );
}
