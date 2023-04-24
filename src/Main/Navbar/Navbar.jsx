import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuHover = (index) => {
    setMenuOpen(index);
  };

  const handleMenuLeave = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container desktop">
        <Link to="/" className="navbar-logo">
          <img alt="blockcharity logo" width="36px" height="36px" src="assets/logo300.png"></img>
          <p className="logo-text">BlockCharity</p>
        </Link>
      
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item" onMouseEnter={() => handleMenuHover(1)} onMouseLeave={() => handleMenuLeave()}>
            <div className="nav-links">Our Mission</div>
            {menuOpen === 1 && (
              <div className="dropdown-menu">
                <Link to="/about" className="dropdown-link">About Us</Link>
                <Link to="/mission" className="dropdown-link">Whitepaper</Link>
                <Link to="/team" className="dropdown-link">Team</Link>
              </div>
            )}
          </li>
          <li className="nav-item" onMouseEnter={() => handleMenuHover(2)} onMouseLeave={() => handleMenuLeave()}>
            <div className="nav-links">Affiliated Apps</div>
            {menuOpen === 2 && (
              <div className="dropdown-menu">
                <Link to="/apps" className="dropdown-link">All Apps</Link>
                <Link to="/docs" className="dropdown-link">Integration</Link>
                <Link to="/appresources" className="dropdown-link">Add Your App</Link>
              </div>
            )}
          </li>
          <li className="nav-item" onMouseEnter={() => handleMenuHover(3)} onMouseLeave={() => handleMenuLeave()}>
            <div className="nav-links">Blog</div>
            {menuOpen === 3 && (
              <div className="dropdown-menu">
                <Link to="/posts" className="dropdown-link">Latest Posts</Link>
                <Link to="/highlights" className="dropdown-link">Highlights</Link>
              </div>
            )}
          </li>
          <li className="nav-item" onMouseEnter={() => handleMenuHover(4)} onMouseLeave={() => handleMenuLeave()}>
            <div className="nav-links">Charity Resources</div>
            {menuOpen === 4 && (
              <div className="dropdown-menu">
                <Link to="/donate" className="dropdown-link">Donate</Link>
                <Link to="/volunteer" className="dropdown-link">Volunteer</Link>
                <Link to="/Add-Your-Charity" className="dropdown-link">Add Your Charity</Link>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-container mobile">
        <Link to="/" className="navbar-logo">
          <img alt="blockcharity logo" width="36px" height="36px" src="assets/logo300.png"></img>
          <p className="logo-text">BlockCharity</p>
        </Link>
        
        <div className="menu-text" onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </div>
        
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <div className="nav-links">Our Mission</div>
              <div >
              <Link to="/about" className="dropdown-link">About Us</Link>
                <Link to="/mission" className="dropdown-link">Whitepaper</Link>
                <Link to="/team" className="dropdown-link">Team</Link>
              </div>
          </li>
          <li className="nav-item">
            <div className="nav-links">Affiliated Apps</div>
              <div >
              <Link to="/apps" className="dropdown-link">All Apps</Link>
                <Link to="/docs" className="dropdown-link">Integration</Link>
                <Link to="/appresources" className="dropdown-link">Add Your App</Link>
              </div>
          </li>
          <li className="nav-item">
            <div className="nav-links">Blog</div>
              <div >
              <Link to="/posts" className="dropdown-link">Latest Posts</Link>
                <Link to="/highlights" className="dropdown-link">Highlights</Link>
              </div>
          </li>
          <li className="nav-item">
            <div className="nav-links">Charity Resources</div>
              <div >
              <Link to="/donate" className="dropdown-link">Donate</Link>
                <Link to="/volunteer" className="dropdown-link">Volunteer</Link>
                <Link to="/Add-Your-Charity" className="dropdown-link">Add Your Charity</Link>

              </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
