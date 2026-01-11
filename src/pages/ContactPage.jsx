import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formPayload = {
      access_key: '1e6d8509-6b4d-4dc7-bf46-efa9b42714d3',
      subject: formData.subject || 'Contact Form Submission from Panji Tea Website',
      ...formData
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help with all your tea needs</p>
      </div> */}
      
      <div className="contact-container">
        {/* <div className="contact-info-section">
          <h2>Get In Touch</h2>
          <p>Have questions about our premium teas or wholesale services? We'd love to hear from you!</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p>123 Tea Street<br />Flavor City, TC 12345</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>(555) 123-4567<br />Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">✉️</div>
              <div>
                <h3>Email Us</h3>
                <p>info@panjitea.com<br />support@panjitea.com<br />wholesale@panjitea.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">🕒</div>
              <div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
                Facebook
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
                Instagram
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
                Twitter
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                <span className="social-icon">📌</span>
                Pinterest
              </a>
            </div>
          </div>
        </div> */}
        
        <div className="contact-form-section">
          <div className="form-content">
            <h2 style={{ marginLeft: '275px' }}>Send Us a Message</h2>
            <p>Have questions about our premium teas or wholesale services? We'd love to hear from you!</p>

            <form onSubmit={handleSubmit} className="contact-form">
              {submitMessage && (
                <div className="submit-message" style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb', borderRadius: '8px', textAlign: 'center', fontWeight: '500' }}>
                  {submitMessage}
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Tell us about your tea journey..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;