import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 7 High-Quality Images (Fixed broken links)
  const heroData = [
    {
      id: 1,
      // Tea Gardens
      image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Nature's Finest Brew",
      subtitle: "Hand-picked from the misty hills of Darjeeling, bringing nature's purity straight to your cup."
    },
    {
      id: 2,
      // Tea Processing / Drying (Fixed Image)
      image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Art of Processing",
      subtitle: "Leaves dried and processed with traditional mastery to preserve the authentic aroma."
    },
    {
      id: 3,
      // Pouring Tea
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "The Golden Pour",
      subtitle: "Experience the rich color and robust flavor that defines a perfect morning tea."
    },
    // {
    //   id: 4,
    //   // Factory / Tea Sacks (Fixed Image)
    //   image: "https://images.unsplash.com/photo-1582791694766-38290e29b462?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    //   title: "Factory Freshness",
    //   subtitle: "State-of-the-art manufacturing ensuring every grain meets global quality standards."
    // },
    {
      id: 5,
      // Green Tea
      image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Organic Green Tea",
      subtitle: "Whole leaf green tea rich in antioxidants for a healthier lifestyle."
    },
    {
      id: 6,
      // Tea Cups
      image: "https://images.unsplash.com/photo-1556742526-795a8eac090e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Aromatic Blends",
      subtitle: "Expertly curated blends that awaken your senses with every sip."
    },
    {
      id: 7,
      // Packets / Store
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Premium Packaging",
      subtitle: "Sealed to perfection to lock in the freshness and flavor until you brew it."
    }
  ];

  useEffect(() => {
    // Total cycle time: 6 seconds
    const interval = setInterval(() => {
      // Step 1: Start EXIT Animation (Fade out old content)
      setIsAnimating(true);
      
      // Step 2: Wait 0.8s for exit to finish, then Change Content
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === heroData.length - 1 ? 0 : prevIndex + 1));
        
        // Step 3: Trigger ENTER Animation (Fade in new content)
        setIsAnimating(false);
      }, 800); // Wait time matches the CSS 'fade-out' duration
      
    }, 6000); 

    return () => clearInterval(interval);
  }, [heroData.length]);

  return (
    <section id="home" className="hero">
      
      {/* 1. BACKGROUND SLIDESHOW */}
      <div className="hero-bg-wrapper">
        {heroData.map((slide, index) => (
          <div 
            key={slide.id}
            className={`hero-bg-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        {/* 2. TEXT SECTION (Synced with isAnimating state) */}
        <div className={`hero-text ${isAnimating ? 'slide-out' : 'slide-in'}`}>
          <div className="text-wrapper">
            <h1>{heroData[currentIndex].title}</h1>
            <p className="hero-subtitle">{heroData[currentIndex].subtitle}</p>
            {/* <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">Explore Collection</a>
              <a href="#services" className="btn btn-secondary">Our Services</a>
            </div> */}
          </div>
        </div>

        {/* 3. CIRCLE IMAGE (Synced with isAnimating state) */}
        <div className="hero-image">
          <div className="floating-tea-container">
            <div className="floating-tea">
              <img 
                src={heroData[currentIndex].image} 
                alt={heroData[currentIndex].title}
                // Key ensures React redraws image when index changes
                key={currentIndex} 
                className={isAnimating ? 'circle-exit' : 'circle-enter'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;