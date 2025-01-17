import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <footer className={styles.footer}>
        <p>&copy; Copyright {new Date().getFullYear()} by Dan Toledano</p>
      </footer>
    </div>
  );
}

export default Sidebar;
