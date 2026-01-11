import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const benefits = [
    'Exclusive wholesale discounts and promotions',
    'Early access to new tea varieties and limited editions',
    'Monthly tea industry insights and trends',
    'Seasonal recipe ideas and pairing suggestions',
    'Business tips for tea retailers and cafés'
  ];

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Stay Connected with Panji Tea</h2>
            <p>
              Join our newsletter community and be the first to know about new arrivals,
              exclusive wholesale offers, and expert tea insights.
            </p>

            <div className="newsletter-benefits">
              <h3>What You'll Get:</h3>
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className="benefit-icon">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="newsletter-form">
            {!isSubscribed ? (
              <>
                <h3>Subscribe Now</h3>
                <p>Get exclusive access to wholesale deals and tea expertise.</p>

                <form onSubmit={handleSubmit} className="subscribe-form">
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your business email"
                      required
                    />
                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </div>
                </form>

                <p className="privacy-note">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">🎉</div>
                <h3>Welcome to the Panji Tea Family!</h3>
                <p>Thank you for subscribing. Check your email for a special welcome offer.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;