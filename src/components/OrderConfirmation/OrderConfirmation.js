import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {};

  if (!orderDetails) {
    return (
      <div className="order-confirmation">
        <div className="confirmation-content error">
          <h2>Order Information Not Found</h2>
          <p>We couldn't find the order details. Please try placing your order again.</p>
          <Link to="/" className="back-home">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="order-confirmation">
      <div className="confirmation-content">
        <div className="confirmation-header">
          <span className="success-icon">✓</span>
          <h2>Order Confirmed!</h2>
          <p>Thank you for choosing Hapenzo. Your order has been successfully placed.</p>
        </div>

        <div className="order-details">
          <h3>Order Details</h3>
          <div className="order-info">
            <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          </div>

          <div className="customer-details">
            <h4>Customer Information</h4>
            <p><strong>Name:</strong> {orderDetails.name}</p>
            <p><strong>Email:</strong> {orderDetails.email}</p>
            <p><strong>Phone:</strong> {orderDetails.phone}</p>
          </div>

          <div className="event-details">
            <h4>Event Information</h4>
            <p><strong>Event Date:</strong> {orderDetails.eventDate}</p>
            <p><strong>Event Time:</strong> {orderDetails.eventTime}</p>
            <p><strong>Venue:</strong> {orderDetails.venue}</p>
          </div>

          <div className="items-list">
            <h4>Ordered Items</h4>
            {orderDetails.items.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h5>{item.title}</h5>
                  <p>Quantity: {item.quantity}</p>
                  <p className="item-price">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="price-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{orderDetails.subtotal}</span>
            </div>
            <div className="summary-row">
              <span>GST (5%):</span>
              <span>₹{orderDetails.gst}</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount:</span>
              <span>₹{orderDetails.total}</span>
            </div>
          </div>
        </div>

        <div className="confirmation-footer">
          <p>A confirmation email has been sent to {orderDetails.email}</p>
          <p className="note">Our team will contact you shortly to discuss the setup details.</p>
          <div className="actions">
            <Link to="/" className="back-home">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 