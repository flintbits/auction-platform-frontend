import { Link } from "@tanstack/react-router";
import { ChevronRight, Home, Menu, Settings, User } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";

const menuItems = [
  { icon: Home, label: "Home", link: "/" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" }
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu when desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Tab Arrow */}
      <div className={styles.mobileTab}>
        <button
          className={styles.tabBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          ${styles.sidebar}
          ${collapsed ? styles.collapsed : ""}
          ${mobileOpen ? styles.mobileOpen : styles.mobileClose}
        `}
      >
        {/* Toggle button */}
        <button
          className={styles.collapseBtn}
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu size={20} />
        </button>

        <nav className={styles.nav}>
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link key={i} to={item.link} className={styles.navItem}>
                <Icon size={20} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
