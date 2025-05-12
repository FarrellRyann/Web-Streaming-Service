import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1 className="logo">Bvyu</h1>
        <h2 className="hero-title">The best movie streaming<br />service for your experience</h2>
        <button className="learn-more" onClick={() => navigate('/login')}>Learn more →</button>
      </header>

      <section className="quotes-section">
        <p>In the theater of the mind, every frame flickers with the potential to ignite empathy.</p>
        <p>Watching a movie isn’t merely entertainment, it’s a doorway to understanding the human experience.</p>
      </section>

     
      <section className="features-section">
        <div className="feature-card">
          <h3>🎬 Over 5,000 Movies</h3>
          <p>Explore a vast collection from around the world.</p>
        </div>
        <div className="feature-card">
          <h3>🕐 Stream Anytime</h3>
          <p>Watch your favorites 24/7, anywhere.</p>
        </div>
        <div className="feature-card">
          <h3>🎞️ Exclusive Originals</h3>
          <p>Discover content only on BlockVyu.</p>
        </div>
      </section>

      <section className="explore-section">
        <h2>Explore your favorite shows</h2>
        <div className="movie-posters">
          <img src="https://via.placeholder.com/120x180" alt="Fall" />
          <img src="https://via.placeholder.com/120x180" alt="The Valet" />
          <img src="https://via.placeholder.com/120x180" alt="Uncharted" />
        </div>
      </section>

      <section className="cta-section">
        <h2>Begin your journey at BlockVyu</h2>
        <button className="get-started" onClick={() => navigate('/login')}>Get started</button>
      </section>

      <footer className="footer">
        <div className="footer-logo">Bvyu</div>
        <div className="footer-links">
          <a href="#">FAQ</a>
          <a href="#">Cookies Preferences</a>
          <a href="#">Help Center</a>
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms of Use</a>
        </div>
        <p>© BlockVyu 2025, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;
