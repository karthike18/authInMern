// cartPage.jsx
import React, { useEffect, useState } from 'react';
import Cart from './cart';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className="cart-page">
      <h1>My Cart</h1>
      <Cart cart={cart} />
    </div>
  );
};

export default CartPage;