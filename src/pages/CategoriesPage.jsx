import React from 'react';
import Categories from '../components/Categories';

const CategoriesPage = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Tea Categories</h1>
        <Categories />
        {/* Add more detailed content here */}
        <div className="detailed-content">
          <h2>Explore Our Collection</h2>
          <p>Discover our wide range of tea categories, each carefully selected for its unique flavor profile and health benefits.</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;