import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          QMC Events
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/packages" className="nav-link">Packages</Link>
          </li>
          <li className="nav-item">
            <Link to="/checkout" className="nav-link">Checkout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 