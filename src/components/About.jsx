import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '50+', label: 'Tea Varieties' },
    { number: '10+', label: 'Years Experience' },
    { number: '25+', label: 'Countries Served' }
  ];

  // const team = [
  //   {
  //     name: 'Sarah Chen',
  //     role: 'Master Tea Taster',
  //     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  //     description: 'With over 15 years of experience in tea sourcing and tasting.'
  //   },
  //   {
  //     name: 'Marcus Rodriguez',
  //     role: 'Quality Assurance Manager',
  //     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  //     description: 'Ensures every tea packet meets our premium quality standards.'
  //   },
  //   {
  //     name: 'Priya Patel',
  //     role: 'Wholesale Specialist',
  //     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  //     description: 'Helps businesses source the perfect tea blends for their needs.'
  //   }
  // ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2014, Panji Tea has been at the forefront of bringing premium tea experiences
              to tea lovers worldwide. What started as a small passion project has grown into a
              comprehensive tea destination offering both retail and wholesale solutions.
            </p>
            <p>
              Our journey began with a simple belief: that everyone deserves access to exceptional
              tea, whether they're sipping a single cup at home or serving thousands in their business.
              We work directly with farmers and estates across Asia to ensure the highest quality
              and fairest prices for our customers.
            </p>
            <p>
              Today, we proudly serve over 500 retail customers and 25+ countries through our
              wholesale program, offering more than 50 different tea varieties in convenient
              packet formats perfect for any occasion.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tea plantation" />
          </div>
        </div>

        {/* <div className="team-section">
          <h2>Meet Our Tea Experts</h2>
          <p className="section-subtitle">Our passionate team dedicated to bringing you the finest tea experience</p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We partner with eco-friendly farms and use biodegradable packaging to protect our planet.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality First</h3>
              <p>Every tea packet undergoes rigorous testing to ensure consistent premium quality.</p>
            </div>
            <div className="value-card">
              <div class="value-icon">🤝</div>
              <h3>Fair Trade</h3>
              <p>We work directly with farmers to ensure fair wages and sustainable farming practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚚</div>
              <h3>Reliability</h3>
              <p>From small orders to bulk wholesale, we deliver on time, every time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;