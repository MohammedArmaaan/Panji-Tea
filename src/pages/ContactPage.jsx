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
  const [submitStatus, setSubmitStatus] = useState('');

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
    setSubmitStatus('');

    const formPayload = {
      access_key: '1e6d8509-6b4d-4dc7-bf46-efa9b42714d3',
      subject: formData.subject || 'Contact Form Submission',
      ...formData
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formPayload)
      });
      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage('There was an error submitting your form. Please try again.');
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="panji-theme-page">
      <div className="panji-container">
        
        {/* Title Section (Matches 'Our Story' Heading) */}
        <section className="page-header">
          <h1 className="theme-heading">Contact Us</h1>
          <p className="theme-subtitle">
            We're here to help. Reach out to us for premium tea inquiries, wholesale partnerships, or just to say hello.
          </p>
          <hr className="theme-divider" />
        </section>

        <div className="content-grid">
          
          {/* Left Column: Contact Details */}
          <div className="contact-info-section">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-desc">
              Whether you are sipping a single cup at home or serving thousands in your business, we are ready to assist you.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <span className="icon">📍</span>
                <div>
                  <h3>Visit Us</h3>
                  <p>123 Tea Street<br/>Flavor City, TC 12345</p>
                </div>
              </div>

              <div className="info-card">
                <span className="icon">📞</span>
                <div>
                  <h3>Call Us</h3>
                  <p>(555) 123-4567<br/>Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>

              <div className="info-card">
                <span className="icon">✉️</span>
                <div>
                  <h3>Email Us</h3>
                  <p>info@panjitea.com<br/>wholesale@panjitea.com</p>
                </div>
              </div>
            </div>

            {/* Stats Row (Matching your bottom footer stats) */}
            <div className="mini-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Countries Served</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="form-section">
            <div className="form-card">
              <h3 className="form-title">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                {submitMessage && (
                  <div className={`status-message ${submitStatus}`}>
                    {submitMessage}
                  </div>
                )}
                
                <div className="input-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="input-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry Topic"
                  />
                </div>
                
                <div className="input-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button type="submit" className="theme-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;