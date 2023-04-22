import React from "react";
import "./TopSection.css";
import { Link } from "react-router-dom";

function TopSection() {
  return (
    <div className="top-section">
      <h1 className="top-section-heading">
        We can make a difference. Together.
      </h1>
      <p className="top-section-description">
        Blockcharity is a transparent protocol that collects donations direct and through many projects in blockchain and allocates them to those less fortunate using a classic DAO model.
      </p>
      <Link
              to="/dashboard"
              className="top-section-button"
            >
              Get Started
            </Link>
    </div>
  );
}

export default TopSection;
