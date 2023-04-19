import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BlockCharity
        </Link>
        <div className="menu-text" onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </div>
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/l"
              className="nav-links"
              onClick={() => setMenuOpen(false)}
            >
              Our Mission
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              onClick={() => setMenuOpen(false)}
            >
              Affiliated Apps
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-links"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links"
              onClick={() => setMenuOpen(false)}
            >
              Recent Donations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
