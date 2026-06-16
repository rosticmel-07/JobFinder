"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Building2,
  Bookmark,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import styles from "./sidebar.module.css";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/jobs", label: "Browse Jobs", icon: Briefcase },
  { href: "/applications", label: "Applications", icon: FileText },
  // { href: "/companies", label: "Companies", icon: Building2 },
  { href: "/saved", label: "Saved", icon: Bookmark },
  // { href: "/messages", label: "Messages", icon: MessageSquare },
];

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        className={styles.menuButton}
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.top}>
          <h2 className={styles.logo}>JobFinder</h2>

          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav>
          <ul className={styles.navList}>
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.navLink} ${
                      isActive ? styles.active : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={18} />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
