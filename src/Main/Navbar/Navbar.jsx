import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img alt="blockcharity logo" width="37.5px" height="32px" src="assets/logo.png"></img>
        <p className="logo-text">BlockCharity</p>
        </Link>
        <div className="menu-text" onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </div>
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/mission"
              className="nav-links"
              onClick={() => setMenuOpen(false)}
            >
              Our Mission
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/apps"
              className="nav-links"
              onClick={() => setMenuOpen(false)}
            >
              Affiliated Apps
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className="nav-links"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/charities"
              className="nav-links"
              onClick={() => setMenuOpen(false)}
            >
              Charity Resources
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
