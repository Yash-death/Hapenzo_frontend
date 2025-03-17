import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hapenzo</h3>
          <p>Creating magical moments and unforgettable celebrations since 2023</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@hapenzo.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Party Street, Event City, 400001</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2023 Hapenzo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 