import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const categories = [{"name":"Our Mission","sections":[{"name":"About Us","directory":"/about"},{"name":"Whitepaper","directory":"/mission"},{"name":"Team","directory":"/team"}]},{"name":"Affiliated Apps","sections":[{"name":"All Apps","directory":"/apps"},{"name":"Integration","directory":"/docs"},{"name":"Add Your App","directory":"/appresources"}]},{"name":"Blog","sections":[{"name":"Latest Posts","directory":"/posts"},{"name":"Highlights","directory":"/highlights"}]},{"name":"Charity Resources","sections":[{"name":"Donate","directory":"/donate"},{"name":"Volunteer","directory":"/volunteer"},{"name":"Add Your Charity","directory":"/Add-Your-Charity"}]}]

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
          <img alt="blockcharity logo" width="36px" height="36px" src="/assets/logo300.png"></img>
          <p className="logo-text">BlockCharity</p>
        </Link>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {categories.map((category, index) => (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => handleMenuHover(index)}
              onMouseLeave={() => handleMenuLeave()}
            >
              <div className="nav-links">{category.name}</div>
              {menuOpen === index && (
                <div className="dropdown-menu">
                  {category.sections.map((section, index) => (
                    <Link
                      key={index}
                      to={section.directory}
                      className="dropdown-link"
                    >
                      {section.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
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
          {categories.map((category, index) => (
            <li className="nav-item" key={index}>
              <div className="nav-links">{category.name}</div>
              <div className="dropdown-menu">
                {category.sections.map((section, index) => (
                  <Link to={section.directory} className="dropdown-link" key={index}>{section.name}</Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
