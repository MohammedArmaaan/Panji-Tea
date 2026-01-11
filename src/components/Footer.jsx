import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🍵</span>
              <h3>Panji Tea</h3>
            </div>
            <p>Your premier destination for premium teas and exceptional experiences. We source the finest teas from around the world to bring you unparalleled quality and taste.</p>
            {/* <div className="newsletter">
              <h4>Stay Updated</h4>
              <div className="newsletter-input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div> */}
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Our Teas</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Tea Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul className="footer-links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              {/* <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
                Facebook
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
                Instagram
              </a> */}
              {/* <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
                Twitter
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                <span className="social-icon">📌</span>
                Pinterest
              </a> */}
            </div>
            <div className="contact-info">
              <p><strong>📞</strong> (555) 123-4567</p>
              <p><strong>✉️</strong> info@panjitea.com</p>
              <p><strong>📍</strong> 123 Tea Street<br />Tea City, TC 12345</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Panji Tea. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;