import React from 'react';
import '../styles/Order.css';

function Order({ cart }) {
  // If the cart is undefined, use an empty array as a fallback
  const cartItems = cart || [];

  return (
    <div className="order-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
      <div className="total">
        <h3>Total Price: $
          {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </h3>
      </div>
    </div>
  );
}

export default Order;
