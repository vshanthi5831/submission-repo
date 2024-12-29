import React, { useEffect, useState } from 'react';

const Products = ({darkMode, handleMode}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id} style={{ backgroundImage: `url(${product.image})` }}>
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}


    </div>
  );
};

export default Products;
