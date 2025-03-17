import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Hapenzo</h1>
          <p>Transform Your Events into Extraordinary Experiences</p>
          <Link to="/packages" className="cta-button">
            View All Packages
          </Link>
        </div>
      </div>

      <div className="featured-packages">
        <h2>Our Services</h2>
        <div className="package-highlights">
          <div className="highlight">
            <span className="highlight-icon">🎂</span>
            <h3>Birthday Celebrations</h3>
            <ul>
              <li>Champagne & Neon Themes</li>
              <li>Kids Superhero Parties</li>
              <li>Elegant Gold & White Setup</li>
            </ul>
          </div>
          <div className="highlight">
            <span className="highlight-icon">🎈</span>
            <h3>Theme Decorations</h3>
            <ul>
              <li>Aeroplane Theme Setup</li>
              <li>Rustic Garden Parties</li>
              <li>Vintage Tea Parties</li>
            </ul>
          </div>
          <div className="highlight">
            <span className="highlight-icon">✨</span>
            <h3>Special Events</h3>
            <ul>
              <li>Bohemian Beach Setup</li>
              <li>Minimalist Modern Decor</li>
              <li>Custom Theme Design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Make Your Event Special?</h2>
        <p>Browse our packages and find the perfect decoration for your celebration</p>
        <Link to="/packages" className="cta-button">
          Explore Packages
        </Link>
      </div>
    </div>
  );
};

export default Home; 