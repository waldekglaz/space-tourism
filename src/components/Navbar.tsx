import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li className="list-item">
          <Link to="/">
            <span className="list-item__index">00</span>Home
          </Link>
        </li>
        <li className="list-item">
          <Link to="/destination">
            <span className="list-item__index">01</span>Destination
          </Link>
        </li>
        <li className="list-item">
          <Link to="/crew">
            <span className="list-item__index">02</span>crew
          </Link>
        </li>
        <li className="list-item">
          <Link to="/technology">
            <span className="list-item__index">03</span>technology
          </Link>
        </li>
      </ul>
      <button type="button">
        <img src={hamburger} alt="hamburger menu" />
      </button>
    </div>
  );
};

export default Navbar;
