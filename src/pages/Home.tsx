import React from "react";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className={styles.home}>
      <header>
        <Navbar />
      </header>
      <div className={styles["text-content"]}>
        <div className={styles.eyebrow}>SO, YOU WANT TO TRAVEL TO</div>
        <h1 className={styles.title}>SPACE</h1>
        <div className={styles.text}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
      <Link to="/destination">
        <button type="button" className={styles.home__btn}>
          EXPLORE
        </button>
      </Link>
    </main>
  );
};

export default Home;
