import React from 'react';
import Wholesale from '../components/Wholesale';

const WholesalePage = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Wholesale</h1>
        <Wholesale />
        {/* Add more detailed content here */}
        {/* <div className="detailed-content">
          <h2>Bulk Orders</h2>
          <p>Contact us for wholesale pricing and bulk orders. Perfect for restaurants, cafes, and retailers.</p>
        </div> */}
      </div>
    </div>
  );
};

export default WholesalePage;