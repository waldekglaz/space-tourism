import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <img src="" alt="" className="logo" />
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
    </div>
  );
};

export default Navbar;
