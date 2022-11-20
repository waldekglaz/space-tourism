import React from "react";
import Navbar from "../components/Navbar";

interface DestinationProps {}

const Destination: React.FC = (props) => {
  return (
    <main>
      <Navbar />
      <h1 className="title">
        <span>01</span>Pick your destination
      </h1>
      <img src="" alt="" />
      <ul>
        <li>
          <button type="button">Moon</button>
        </li>
        <li>
          <button type="button">Mars</button>
        </li>
        <li>
          <button type="button">Europa</button>
        </li>
        <li>
          <button type="button">Titan</button>
        </li>
      </ul>
    </main>
  );
};

export default Destination;
