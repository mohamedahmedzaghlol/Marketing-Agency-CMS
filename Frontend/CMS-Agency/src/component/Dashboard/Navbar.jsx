import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>

      {/* Logo */}
      <div className={styles.logo}>
        <i className="fa-solid fa-code"></i>
        <span>My Dashboard</span>
      </div>

    

      {/* Right Side */}
      <div className={styles.navRight}>

        <button className={styles.iconBtn} title="Notifications">
          <i className="fa-regular fa-bell"></i>
        </button>

        <button className={styles.iconBtn} title="Settings">
          <i className="fa-solid fa-gear"></i>
        </button>

         <button className={styles.profile} title="profile">
          {/* <i class="fa-regular fa-circle-user"></i>       */}
        </button>

        <div className={styles.profile}>
         
          <span>Mirna</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;