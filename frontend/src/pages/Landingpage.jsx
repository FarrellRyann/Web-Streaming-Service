import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/index.css";

const LandingPage = () => {
  const navigate = useNavigate();
  

  return (
    <div>
      <img src="/images/bvyu-blue.png" alt="Bvyu Logo" className="logo-img" />

      <p className="landing-text">
        In the theater of the mind, every frame flickers with the potential to ignite empathy;
      </p>
      <p className="landing-text">
        Watching a movie isn't merely entertainment, it's a doorway to understanding the human experience.
      </p>

      <ul className="landing-list">
        <li>Fast.</li>
        <li>Clear.</li>
        <li>Complete.</li>
      </ul>

      <img src="/images/icon-power.png" alt="Icon" className="glow-icon" />

      <div className="card-container">
        <div className="card yellow">
          <span className="dot"></span>
        </div>
        <div className="card">
          <span className="dot"></span>
        </div>
        <div className="card blue">
          <span className="dot"></span>
        </div>
      </div>

      <button className="neon-button" onClick={() => navigate("/login")}>
        Sign In
      </button>
    </div>
  );
};

export default LandingPage;
