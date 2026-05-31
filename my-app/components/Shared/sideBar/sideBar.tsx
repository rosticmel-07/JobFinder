"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  Building2,
  Bookmark,
  MessageSquare,
} from "lucide-react";

import styles from "./sidebar.module.css";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Browse Jobs",
    href: "/jobs",
    icon: BriefcaseBusiness,
  },
  {
    label: "Applications",
    href: "/applications",
    icon: FileText,
  },
  {
    label: "Companies",
    href: "/companies",
    icon: Building2,
  },
  {
    label: "Saved",
    href: "/saved",
    icon: Bookmark,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>JobFinder</h2>

      <nav>
        <ul className={styles.navList}>
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <li key={href} className={styles.navItem}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
