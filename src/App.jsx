import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Categories from './components/Categories'; // Smart Component
import Products from './components/Products';     // Smart Component (NEW)
import WholesalePage from './pages/WholesalePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Reuse Components with isPage={true} */}
          <Route path="/categories" element={<Categories isPage={true} />} />
          <Route path="/products" element={<Products isPage={true} />} />
          
          <Route path="/wholesale" element={<WholesalePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;