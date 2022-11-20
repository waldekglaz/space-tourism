import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleOpenNav = () => {
    setIsMobileMenuOpen(true);
  };
  const handleCloseNav = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="logo" className={styles.logo} />
      {isMobileMenuOpen && (
        <ul>
          <button onClick={handleCloseNav}>
            <img src={closeIcon} alt="close" className={styles["close-icon"]} />
          </button>
          <li className={styles["list-item"]}>
            <Link to="/" className={styles["navbar__link"]}>
              <span className="list-item__index">00</span>Home
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link to="/destination" className={styles["navbar__link"]}>
              <span className="list-item__index">01</span>Destination
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link to="/crew" className={styles["navbar__link"]}>
              <span className="list-item__index">02</span>crew
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link to="/technology" className={styles["navbar__link"]}>
              <span className="list-item__index">03</span>technology
            </Link>
          </li>
        </ul>
      )}

      <button type="button">
        <img src={hamburger} alt="hamburger menu" onClick={handleOpenNav} />
      </button>
    </div>
  );
};

export default Navbar;
