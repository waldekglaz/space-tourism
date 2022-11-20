import React from "react";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <div className="text-content">
        <div className="eyebrow">SO, YOU WANT TO TRAVEL TO</div>
        <h1 className="title">SPACE</h1>
        <div className="text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
    </main>
  );
};

export default Home;
