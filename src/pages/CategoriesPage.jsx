import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: [
        "123 Tea Street",
        "Flavor City, TC 12345"
      ]
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: [
        "(555) 123-4567",
        "Mon-Fri: 9AM-6PM",
        "Sat: 10AM-4PM"
      ]
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: [
        "info@panjitea.com",
        "support@panjitea.com",
        "wholesale@panjitea.com"
      ]
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 8:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const teaCategories = [
    "Green Tea",
    "Black Tea", 
    "Oolong Tea",
    "White Tea",
    "Herbal Tea",
    "Pu-erh Tea",
    "Chai Tea",
    "Matcha Tea"
  ];

  return (
    <div className="panji-tea-page">
      {/* Simple Header */}
      <header className="panji-header">
        <div className="header-container">
          <h1 className="panji-title">Panji Tea</h1>
          <p className="panji-subtitle">We're here to help with all your tea needs</p>
        </div>
      </header>

      <main className="panji-main">
        <div className="panji-content">
          {/* Left Column - Contact */}
          <div className="panji-contact-section">
            <div className="contact-header">
              <h2>Get In Touch</h2>
              <p className="contact-description">
                Have questions about our premium teas or wholesale services? We'd love to hear from you!
              </p>
            </div>

            <div className="contact-info-list">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-details">
                    <h3 className="contact-title">{item.title}</h3>
                    <div className="contact-lines">
                      {item.details.map((line, i) => (
                        <p key={i} className="contact-line">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Form */}
            <div className="quick-contact-form">
              <h3>Send Us a Message</h3>
              <form>
                <div className="form-row">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                </div>
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Tea Categories */}
          <div className="panji-categories-section">
            <div className="categories-header">
              <h2>Our Tea Collection</h2>
              <p className="categories-description">
                Explore our premium selection of teas from around the world
              </p>
            </div>

            <div className="categories-grid">
              {teaCategories.map((category, index) => (
                <div key={index} className="category-item">
                  <div className="category-name">{category}</div>
                  <button className="learn-more-btn">
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="additional-info">
              <h3>Why Choose Panji Tea?</h3>
              <ul className="benefits-list">
                <li>Directly sourced from sustainable farms</li>
                <li>Freshness guaranteed with vacuum sealing</li>
                <li>Custom blending for wholesale customers</li>
                <li>Free shipping on orders over $50</li>
                <li>24/7 customer support for wholesale partners</li>
              </ul>
            </div>

            {/* Wholesale Section */}
            <div className="wholesale-section">
              <h3>Wholesale Inquiries</h3>
              <p>Interested in partnering with us for your business?</p>
              <div className="wholesale-options">
                <div className="wholesale-option">
                  <h4>Restaurants & Cafés</h4>
                  <p>Premium tea blends for your menu</p>
                </div>
                <div className="wholesale-option">
                  <h4>Hotels & Spas</h4>
                  <p>Custom branded tea service</p>
                </div>
                <div className="wholesale-option">
                  <h4>Corporate Gifting</h4>
                  <p>Bulk orders with custom packaging</p>
                </div>
              </div>
              <button className="wholesale-btn">
                Contact Wholesale Team
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;