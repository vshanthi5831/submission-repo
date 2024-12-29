import React, { useEffect, useState } from 'react';

const Products = ({ darkMode, addToCart, removeFromCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(new Set()); // To track selected product ids

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleCheckboxChange = (product, isChecked) => {
    if (isChecked) {
      addToCart(product); // Add product to cart
      setSelectedProducts(prevState => new Set(prevState.add(product.id))); // Track selected product
    } else {
      removeFromCart(product.id); // Remove product from cart
      setSelectedProducts(prevState => {
        const updatedState = new Set(prevState);
        updatedState.delete(product.id); // Remove from selection
        return updatedState;
      });
    }
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id} style={{ backgroundImage: `url(${product.image})` }}>
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <input
              type="checkbox"
              checked={selectedProducts.has(product.id)}
              onChange={(e) => handleCheckboxChange(product, e.target.checked)}
            />
            <label style = {{color: 'black'}}>Add to Cart</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
