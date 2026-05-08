import styles from "./Sidebar.module.css";
 
const navItems = [
  { icon: "fa-solid fa-gauge-high",   label: "Dashboard",    active: false },
  { icon: "fa-solid fa-newspaper",    label: "Manage Posts", active: false },
  { icon: "fa-solid fa-plus",         label: "New Post",     active: false },
  { icon: "fa-solid fa-arrow-left",   label: "Back to Site", active: false },
];
 
function Sidebar() {
  return (
    <aside className={styles.sidebar}>
 
      {/* Logo */}
      <div className={styles.logoArea}>
        <div className={styles.logoIcon}>
          <i className="fa-solid fa-cube"></i>
        </div>
        <div>
          <div className={styles.logoName}>AgencyCMS</div>
          <div className={styles.logoRole}>Admin Panel</div>
        </div>
      </div>
 
      {/* Divider */}
      <div className={styles.divider}></div>
 
      {/* Nav label */}
      <p className={styles.navLabel}>MAIN MENU</p>
 
      {/* Nav Links */}
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={[
              styles.navLink,
              item.active    ? styles.navLinkActive    : "",
              item.highlight ? styles.navLinkHighlight : "",
            ].join(" ")}
          >
            <i className={`${item.icon} ${styles.navIcon}`}></i>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
 
      {/* Bottom user badge */}
      <div className={styles.userBadge}>
        <div className={styles.userAvatar}>
          <i className="fa-solid fa-user"></i>
        </div>
        <div>
          <div className={styles.userName}>Admin User</div>
          <div className={styles.userEmail}>admin@agency.com</div>
        </div>
      </div>
 
    </aside>
  );
}
 
export default Sidebar;