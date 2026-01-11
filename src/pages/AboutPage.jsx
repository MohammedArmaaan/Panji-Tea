import React from 'react';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>About Panji Tea</h1>
        <About />
        {/* Add more detailed content here */}
        <div className="detailed-content">
          <h2>Our Story</h2>
          <p>Panji Tea has been serving premium quality teas for over a decade. Our journey began with a passion for authentic flavors and sustainable sourcing practices.</p>
          <h2>Quality Commitment</h2>
          <p>We source our teas directly from trusted farmers and ensure every cup meets our high standards of excellence.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;