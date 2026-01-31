import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';

// Ye wahi smart component hai
import Categories from '../components/Categories'; 
import Products from '../components/Products';
import Wholesale from '../components/Wholesale';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div> 
      <Hero />
      <About />
      
      {/* Yahan koi prop nahi diya, iska matlab isPage={false} (Slider View) */}
      <Categories /> 
      <Products />  {/* Slider View (Automatic) */}
      <Wholesale />
      <Services />
      <Testimonials />
      {/* <Newsletter /> */}
    </div>
  );
};

export default Home;