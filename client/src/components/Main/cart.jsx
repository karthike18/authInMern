// Cart.js
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>No. of items in cart: {cart ? cart.length : 0}</p>
      <ul>
        {cart &&
          cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              {item.name} - ${item.price}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cart;