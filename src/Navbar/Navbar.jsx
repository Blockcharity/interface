import React from "react";
import "./Navbar.css";
const logo = "";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Logo" />
          
        </a>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="/">Our Mission</a>
        </li>
        <li>
          <a href="/apps">Affiliated Apps</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/donations">Recent Donations</a>
        </li>
      </ul>
      <div className="navbar-right">
        <a href="/app/dao" className="navbar-button">
          Enter Governance
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
