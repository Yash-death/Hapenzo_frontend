import React from 'react';
import { Link } from 'react-router-dom';
import './PackagesGrid.css';

const packages = [
  {
    id: 1,
    title: "Adults Birthday Party Champagne Decor",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800",
    price: 7999,
    originalPrice: 9999,
    rating: 4.5
  },
  {
    id: 2,
    title: "Aeroplane Theme Birthday Decoration",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    price: 8999,
    originalPrice: 10999,
    rating: 4.7
  },
  {
    id: 3,
    title: "Amazing Birthday Neon Light Ring Decoration",
    image: "https://plus.unsplash.com/premium_photo-1675278299445-9765d43f8418?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",
    price: 5499,
    originalPrice: 6999,
    rating: 4.9
  },
  {
    id: 4,
    title: "Rustic Garden Party Setup",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
    price: 12999,
    originalPrice: 15999,
    rating: 4.8
  },
  {
    id: 5,
    title: "Elegant White & Gold Theme",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    price: 9999,
    originalPrice: 12999,
    rating: 4.6
  },
  {
    id: 6,
    title: "Bohemian Beach Party Setup",
    image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800",
    price: 15999,
    originalPrice: 19999,
    rating: 4.9
  },
  {
    id: 7,
    title: "Kids Superhero Party Theme",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800",
    price: 6999,
    originalPrice: 8999,
    rating: 4.7
  },
  {
    id: 8,
    title: "Minimalist Modern Celebration",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800",
    price: 11999,
    originalPrice: 14999,
    rating: 4.5
  },
  {
    id: 9,
    title: "Vintage Tea Party Setup",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    price: 8499,
    originalPrice: 10499,
    rating: 4.6
  }
];

const PackagesGrid = () => {
  return (
    <div className="packages-container">
      <div className="packages-header">
        <h1>Our Decoration Packages</h1>
        <div className="filters">
          <select className="price-filter">
            <option value="all">Price : All</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
          <select className="sort-filter">
            <option value="featured">Sort By: Featured</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      
      <div className="packages-grid">
        {packages.map((pkg) => (
          <Link to={`/packages/${pkg.id}`} key={pkg.id} className="package-card">
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
            </div>
            <div className="package-info">
              <h3>{pkg.title}</h3>
              <div className="package-price">
                <span className="current-price">₹{pkg.price}</span>
                <span className="original-price">₹{pkg.originalPrice}</span>
              </div>
              <div className="package-rating">
                <span className="stars">{'★'.repeat(Math.floor(pkg.rating))}{'☆'.repeat(5-Math.floor(pkg.rating))}</span>
                <span className="rating-number">{pkg.rating}</span>
              </div>
              <button className="add-to-cart">View Details</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PackagesGrid; 