import SideBar from "@/components/Shared/sideBar/sideBar";
import styles from "./layout.module.css";

import toast, { Toaster } from "react-hot-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <SideBar />

      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
