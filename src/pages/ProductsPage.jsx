import React from 'react';
import Products from '../components/Products';

const ProductsPage = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Our Products</h1>
        <Products />
        {/* Add more detailed content here */}
        <div className="detailed-content">
          <h2>Premium Selection</h2>
          <p>Explore our complete range of premium teas, carefully sourced and packaged for maximum freshness.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;