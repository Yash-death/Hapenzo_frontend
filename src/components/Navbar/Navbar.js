import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="material-icons">celebration</span>
          Hapenzo
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              <span className="material-icons">home</span>
              Home
            </Link>
          </li>
          <li>
            <Link to="/packages" className="nav-link">
              <span className="material-icons">inventory_2</span>
              Packages
            </Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              <span className="material-icons">shopping_cart</span>
              Cart
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 