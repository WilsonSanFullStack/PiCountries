import SearchBar from "./SearchBar";
import styles from "../styles/NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.btn}>
      <NavLink to="/Home">
        <button>Home</button>
      </NavLink>
      </div>
      <div className={styles.btn}>
      </div>
      <div className={styles.btn}>
      <Link to="/activity">
        <button>Activity</button>
      </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
