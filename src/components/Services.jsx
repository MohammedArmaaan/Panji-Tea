import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Tea Tasting Sessions',
      description: 'Join our expert-led tea tasting sessions to explore different flavors and learn about tea origins. Experience the art of tea appreciation in an intimate setting.',
      icon: '🍵',
      features: ['Expert guidance', 'Premium samples', 'Cultural insights', 'Small groups']
    },
    {
      id: 2,
      name: 'Custom Blends',
      description: 'Create your own unique tea blend with our tea sommeliers. Perfect for gifts, special occasions, Late Night and Early Morning Functions or personal preferences tailored to your taste.',
      icon: '🎁',
      features: ['Personal consultation', 'Custom packaging', 'Quality guarantee', 'Unique recipes']
    },
    {
      id: 3,
      name: 'Tea Workshops',
      description: 'Learn the art of tea making, from brewing techniques to pairing suggestions. Master the tea making skills to become your own tea expert.',
      icon: '📚',
      features: ['Hands-on learning', 'Recipe cards', 'Take-home samples', 'Certificate included']
    },
    {
      id: 4,
      name: 'Premium Delivery',
      description: 'Fast and reliable delivery of your favorite teas right to your doorstep. We ensure freshness and quality with our specialized packaging.',
      icon: '🚚',
      features: ['Free shipping', 'Temperature controlled', 'Express delivery', 'Gift wrapping']
    }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>Exceptional Services</h2>
          {/* <p className="section-subtitle">
            Beyond great tea, we offer experiences that enrich your tea journey
          </p> */}
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3>{service.name}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-secondary service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;