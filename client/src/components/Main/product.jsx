// product.js
import React, { useState } from 'react';

const Product = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);

    // Reset the added state after a delay (you can adjust the delay as needed)
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart} disabled={isAdded}>
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
      {isAdded && <span className="checkmark">&#10003;</span>}
    </div>
  );
};

export default Product;