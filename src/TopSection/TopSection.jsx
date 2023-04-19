import React from "react";
import "./TopSection.css";

function TopSection() {
  return (
    <div className="top-section">
      <h1 className="top-section-heading">
        We can make a difference. Together.
      </h1>
      <p className="top-section-description">
        Blockcharity collects donations direct and through many projects in blockchain and allocates them to those less fortunate using a classic DAO model.
      </p>
      <button className="top-section-button">
        Get Started
      </button>
    </div>
  );
}

export default TopSection;
