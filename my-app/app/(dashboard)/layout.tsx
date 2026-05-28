import SideBar from "@/components/Shared/sideBar/sideBar";
import styles from "./layout.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <SideBar />

      <div className={styles.container}>{children}</div>
    </div>
  );
}
