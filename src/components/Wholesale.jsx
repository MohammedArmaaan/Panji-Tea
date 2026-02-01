import React, { useState } from 'react';
import './Wholesale.css';

const Wholesale = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    businessTypeOther: '',
    monthlyVolume: '',
    monthlyVolumeCustom: '',
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
      subject: 'Wholesale Inquiry from Panji Tea Website',
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
        setSubmitMessage('Thank you for your interest! We will contact you within 24 hours.');
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          businessType: '',
          businessTypeOther: '',
          monthlyVolume: '',
          monthlyVolumeCustom: '',
          message: ''
        });
      } else {
        setSubmitMessage('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Bulk discounts starting from 25% off retail prices for qualified buyers.'
    },
    {
      icon: '🚚',
      title: 'Flexible Shipping',
      description: 'Customized delivery schedules and shipping options to fit your business needs.'
    },
    {
      icon: '📦',
      title: 'Custom Packaging',
      description: 'Branded packaging solutions with your logo and custom messaging.'
    },
    {
      icon: '🎯',
      title: 'Dedicated Support',
      description: 'Personal account manager and priority customer service for all wholesale clients.'
    },
    {
      icon: '📊',
      title: 'Volume Discounts',
      description: 'Tiered pricing structure that rewards larger orders with better rates.'
    },
    {
      icon: '🌱',
      title: 'Quality Guarantee',
      description: 'Rigorous quality control ensures consistent premium products every time.'
    }
  ];

  const pricing = [
    {
      tier: 'Starter',
      volume: '100-500 packets/month',
      discount: '15% off',
      features: ['Basic support', 'Standard shipping', 'Quarterly reviews']
    },
    {
      tier: 'Professional',
      volume: '501-2000 packets/month',
      discount: '25% off',
      features: ['Priority support', 'Free shipping', 'Monthly reviews', 'Custom blends']
    },
    {
      tier: 'Enterprise',
      volume: '2000+ packets/month',
      discount: '35% off',
      features: ['Dedicated manager', 'Express shipping', 'Weekly reviews', 'Private labeling', 'Marketing materials']
    }
  ];

  return (
    <section id="wholesale" className="wholesale section-padding">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 style={{color: '#016232'}} >Wholesale Partnership Program</h2>
          {/* <p className="section-subtitle">
            Join hundreds of businesses worldwide who trust Panji Tea for their bulk tea needs
          </p> */}
        </div>

        <div className="wholesale-overview">
          <div className="overview-content">
            <h3>Why Choose Panji Tea Wholesale?</h3>
            <p>
              Whether you're a café, restaurant, hotel, office, or retail store, our wholesale program
              provides everything you need to offer premium tea to your customers. With over 50 tea
              varieties available in convenient packet formats, we make it easy to stock and serve
              exceptional tea products.
            </p>
            <div className="overview-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-text">Tea Varieties</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-text">Countries Served</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.5%</span>
                <span className="stat-text">On-Time Delivery</span>
              </div>
            </div>
          </div>
          <div className="overview-image">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Bulk tea packaging" />
          </div>
        </div>

        <div className="benefits-section">
          <h3>Wholesale Benefits</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-section">
          <h3>Pricing Tiers</h3>
          <div className="pricing-grid">
            {pricing.map((tier, index) => (
              <div key={index} className="pricing-card">
                <div className="pricing-header">
                  <h4>{tier.tier}</h4>
                  <div className="discount">{tier.discount}</div>
                </div>
                <div className="volume">{tier.volume}</div>
                <ul className="pricing-features">
                  {tier.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary">Get Started</button>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="contact-form-section"> */}
          <div className="form-content">
            <h3>Start Your Wholesale Partnership</h3>
            <p>Fill out the form below and our wholesale team will contact you within 24 hours to discuss your specific needs.</p>

            <form onSubmit={handleSubmit} className="wholesale-form">
              {submitMessage && (
                <div className="submit-message" style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb', borderRadius: '4px' }}>
                  {submitMessage}
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactName">Contact Name *</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="businessType">Business Type *</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Business Type</option>
                    <option value="cafe">Café/Restaurant</option>
                    <option value="hotel">Hotel/Resort</option>
                    <option value="office">Office/Company</option>
                    <option value="retail">Retail Store</option>
                    <option value="distributor">Distributor</option>
                    <option value="other">Other</option>
                  </select>
                  {formData.businessType === 'other' && (
                    <input
                      type="text"
                      id="businessTypeOther"
                      name="businessTypeOther"
                      value={formData.businessTypeOther}
                      onChange={handleChange}
                      placeholder="Please specify your business type"
                      className="conditional-input"
                      required
                    />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="monthlyVolume">Estimated Monthly Volume</label>
                  <select
                    id="monthlyVolume"
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleChange}
                  >
                    <option value="">Select Volume</option>
                    <option value="5-10">5-10 packets</option>
                    <option value="10-20">10-20 packets</option>
                    <option value="20-40">20-40 packets</option>
                    <option value="50-100">50-100 packets</option>
                    <option value="more">More than 100 packets</option>
                  </select>
                  {formData.monthlyVolume === 'more' && (
                    <input
                      type="number"
                      id="monthlyVolumeCustom"
                      name="monthlyVolumeCustom"
                      value={formData.monthlyVolumeCustom}
                      onChange={handleChange}
                      placeholder="Enter number of packets"
                      className="conditional-input"
                      min="101"
                      required
                    />
                  )}
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your specific needs, preferred tea types, or any questions you have..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Wholesale;