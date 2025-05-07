import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/index.css";

const LandingPage = () => {
  const navigate = useNavigate();
  

  return (
    <div>

      {/* Gantikan dengan gambar */}
      <img src="/images/bvyu-blue.png" alt="Bvyu Logo" style={{ width: '200px' }} />

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

      <h3>
        Explore and feel other’s journey with us
      </h3>
      <h1>
      Create your journey story with BVyu
      </h1>
      <button onClick={() => navigate("/login")}>Explore</button>

    </div>
  );
};

export default LandingPage;
