import React, { useState } from "react";
import "./TopSection.css";
import { Link } from "react-router-dom";
import Background from "../Background/Background";

function TopSection() {
  const inspirationalTextOptions = [
    "Together we can make a difference.",
    "Let's change the world together.",
    "Join us in making a difference.",
    "Small actions, big impact.",
    "Hope is contagious. Let's spread it.",
    "Be the change you wish to see.",
    "Together for a better tomorrow.",
    "A brighter future starts with us.",
    "Building a better world, together.",
    "We can make a difference. Together.",
    "Together we rise.",
    "Giving is receiving.",
    "Kindness creates ripples.",
    "Build hope, create compassion.",
    "Small gestures, big impact.",
    "Create the change you seek.",
    "Together we change the world.",
    "Be the light in darkness.",
    "Make a difference today.",
  ];

  const [randomIndex, setRandomIndex] = useState(0);

  function chooseRandomIndex() {
    const maxIndex = inspirationalTextOptions.length - 1;
    const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
    setRandomIndex(randomIndex);
  }

  return (
    <div className="top-section">
      <Background />
      <h1 className="top-section-heading" onClick={chooseRandomIndex}>
        {inspirationalTextOptions[randomIndex]}
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