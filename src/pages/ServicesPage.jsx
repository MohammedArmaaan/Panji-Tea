import React from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Our Services</h1>
        <Services />
        {/* Add more detailed content here */}
        {/* <div className="detailed-content">
          <h2>Tea Consulting</h2>
          <p>Expert advice on tea selection, brewing techniques, and pairing suggestions.</p>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesPage;