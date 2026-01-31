import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { MdHeight } from 'react-icons/md';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">
            <img style={{ height: "48px", width: "50px", marginTop: "10px" }} src="/images/download.png" alt="Logo" />
          </span>
          <h1>Panji Tea</h1>
        </Link>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/categories" onClick={closeMenu}>Categories</Link></li>
            <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
            <li><Link to="/wholesale" onClick={closeMenu}>Wholesale</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;