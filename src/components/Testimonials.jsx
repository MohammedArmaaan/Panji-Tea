import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Café Owner',
      company: 'Brew & Co.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'Panji Tea has transformed our café experience. Their wholesale program provides consistent quality and their customer service is exceptional.',
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Hotel Manager',
      company: 'Grand Plaza Hotel',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'As a hotel, we need reliable suppliers. Panji Tea delivers on time, every time. Their bulk packaging and custom blends have elevated our in-room tea service.',
      location: 'San Francisco, CA'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Retail Buyer',
      company: 'Tea & Spice Market',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'The quality of Panji Tea products is outstanding. Our customers keep coming back for their favorite blends. The wholesale pricing makes it profitable.',
      location: 'Austin, TX'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Office Manager',
      company: 'TechCorp Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'Our office switched to Panji Tea for our break room, and the difference is remarkable. The tea is fresh, flavorful, and our team loves having such great options.',
      location: 'Seattle, WA'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Restaurant Owner',
      company: 'Green Leaf Bistro',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'Panji Tea\'s herbal infusions have become our most popular menu items. The quality is consistent, the packaging is professional.',
      location: 'Portland, OR'
    },
    {
      id: 6,
      name: 'Robert Kim',
      role: 'Distributor',
      company: 'Kim Trading Co.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'As a distributor, I work with many tea suppliers, but Panji Tea stands out for their reliability and quality. Their support team is always helpful.',
      location: 'Los Angeles, CA'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials section-padding">
      <style>{`
        /* --- GLOBAL & STRUCTURE --- */
        .testimonials {
          background-color: whitesmoke; /* Original Background */
          position: relative;
        }
        .section-padding {
          padding: 35px 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #016232;
        }
        .section-subtitle {
          color: #666;
          font-size: 1.1rem;
        }

        /* --- SLIDER AREA --- */
        .testimonials-slider-wrapper {
          padding: 10px;
          /* Masking effect for smooth edges (optional) */
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        
        .swiper-slide {
          height: 100%;
          display: flex;
        }

        /* --- CARD DESIGN (Your Original Colors) --- */
        .testimonial-card {
          background: #fff;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid #eee;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: grab; /* Shows user they can drag */
        }
        
        .testimonial-card:active {
          cursor: grabbing;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          border-color: #e0e0e0;
        }

        .testimonial-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .testimonial-quote {
          font-size: 4rem;
          line-height: 0.5;
          color: #e0e0e0;
          font-family: serif;
          margin-top: 10px;
        }
        
        /* Stars */
        .star {
          color: #ddd;
          font-size: 1.2rem;
        }
        .star.filled {
          color: #ffc107; /* Original Yellow */
        }

        .testimonial-content {
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .testimonial-text {
          color: #555;
          font-style: italic;
          line-height: 1.6;
          font-size: 1rem;
        }

        /* Author Section */
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
          border-top: 1px solid #f0f0f0;
          padding-top: 15px;
        }
        .author-image {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .author-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .author-info h4 {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 700;
          color: #016232;
        }
        .author-role {
          font-size: 0.85rem;
          color: #777;
          margin: 0;
        }
        .author-company {
          font-size: 0.8rem;
          color: #999;
          margin: 0;
        }

        /* --- CUSTOM NAVIGATION BUTTONS (Below the slider) --- */
        .slider-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 40px; /* Space between cards and buttons */
        }

        .nav-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background: #fff;
          color: #333;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: #333; /* Dark background on hover */
          color: #fff;       /* White arrow on hover */
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }

        .nav-btn:active {
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-btn {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <h2>What Our Partners Say</h2>
          {/* <p className="section-subtitle">
            Hear from businesses worldwide who trust Panji Tea
          </p> */}
        </div>

        {/* 1. Slider Wrapper */}
        <div className="testimonials-slider-wrapper">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            loop={true}
            speed={800} // Smooth scroll speed
            grabCursor={true} // Mouse hand icon show karega
            autoplay={{
              delay: 3000,
              disableOnInteraction: false, // User ke touch ke baad bhi auto scroll chalega
              pauseOnMouseEnter: true,     // Hover karne par ruk jayega (User friendly)
            }}
            // Custom Navigation Links
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="testimonial-quote">"</div>
                  </div>

                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.testimonial}</p>
                  </div>

                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 2. Custom Buttons (Thik niche) */}
        <div className="slider-controls">
          <button className="nav-btn custom-prev" aria-label="Previous Slide">
            &#8592; {/* Left Arrow Symbol */}
          </button>
          <button className="nav-btn custom-next" aria-label="Next Slide">
            &#8594; {/* Right Arrow Symbol */}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;