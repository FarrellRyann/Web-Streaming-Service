// src/pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Gantikan dengan gambar */}
      <img src="/images/bvyu-blue.png" alt="Bvyu Logo" style={{ width: '200px' }} />

      <p>
        In the theater of the mind, every frame flickers with the potential to ignite empathy.
      </p>
      <p>
        Watching a movie isn’t merely entertainment; it’s a doorway to understanding the human experience.
      </p>
      <ul>
        <li>Fast.</li>
        <li>Clear.</li>
        <li>Complete.</li>
      </ul>
      
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
