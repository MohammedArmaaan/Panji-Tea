import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Categories.css';

const Categories = ({ isPage = false }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Slider Navigation Functions
  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  // Premium Tea Categories Data
  const categories = [
    {
      id: 1,
      name: 'Artisan Green Tea',
      tag: 'Fresh & Vibrant',
      description: 'Handpicked young leaves, gently steamed to preserve natural antioxidants',
      longDescription: 'Our Artisan Green Tea Collection represents the pinnacle of tea craftsmanship. Each leaf is harvested during the first flush and carefully processed to retain maximum polyphenols and delicate flavor notes.',
      packetTypes: ['Single Origin', 'Ceremonial Grade', 'Family Reserve'],
      varieties: ['Jasmine Pearl', 'Sencha Supreme', 'Matcha Ceremonial', 'Dragon Well Imperial'],
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      benefits: ['High in EGCG antioxidants', 'Natural mental clarity', 'Metabolic support', 'Radiant skin'],
      origin: 'Uji, Japan | Darjeeling, India',
      caffeine: 'Medium',
      brewingTemp: '70-80°C'
    },
    {
      id: 2,
      name: 'Royal Black Tea',
      tag: 'Bold & Full-Bodied',
      description: 'Fully-oxidized premium leaves with rich, malty undertones',
      longDescription: 'Sourced from centuries-old estates, our Royal Black Tea undergoes meticulous oxidation to develop complex flavor profiles.',
      packetTypes: ['Estate Selection', 'Breakfast Blend', 'Afternoon Reserve'],
      varieties: ['Assam Gold', 'Darjeeling Second Flush', 'Ceylon OP1', 'Keemun Mao Feng'],
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      benefits: ['Sustained energy', 'Heart health support', 'Rich in theaflavins', 'Digestive aid'],
      origin: 'Assam, India | Yunnan, China',
      caffeine: 'High',
      brewingTemp: '95-100°C'
    },
    {
      id: 3,
      name: 'Imperial Oolong',
      tag: 'Complex & Floral',
      description: 'Semi-oxidized masterpieces with evolving flavor profiles',
      longDescription: 'Imperial Oolong represents the art of partial oxidation. Each leaf is hand-rolled and roasted to precise specifications.',
      packetTypes: ['Single Mountain', 'Charcoal Roasted', 'Aged Vintage'],
      varieties: ['Tie Guan Yin Iron Goddess', 'Da Hong Pao Big Red Robe', 'Oriental Beauty', 'Alishan High Mountain'],
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      benefits: ['Weight management', 'Mental focus', 'Skin rejuvenation', 'Stress relief'],
      origin: 'Fujian, China | Taiwan',
      caffeine: 'Medium-Low',
      brewingTemp: '85-95°C'
    },
    {
      id: 4,
      name: 'Herbal Sanctuary',
      tag: 'Wellness & Relaxation',
      description: 'Caffeine-free botanical blends for holistic wellbeing',
      longDescription: 'Our Herbal Sanctuary collection combines ancient wisdom with modern science. Each blend is formulated by herbalists to deliver targeted benefits.',
      packetTypes: ['Wellness Ritual', 'Sleep Sanctuary', 'Detox Renewal'],
      varieties: ['Chamomile Lavender Dream', 'Turmeric Ginger Vitality', 'Rooibos African Sunset', 'Peppermint Digestive'],
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      benefits: ['Caffeine-free relaxation', 'Digestive harmony', 'Immune support', 'Natural sleep aid'],
      origin: 'Global Organic Sources',
      caffeine: 'None',
      brewingTemp: '100°C'
    },
    {
        id: 5,
        name: 'Signature Blends',
        tag: 'Master Blender\'s Collection',
        description: 'Exclusive creations by our world-renowned tea sommelier',
        longDescription: 'These limited-edition blends represent the pinnacle of our blender\'s art. Combining rare tea leaves with exotic botanicals.',
        packetTypes: ['Limited Edition', 'Sommelier Selection', 'Seasonal Harvest'],
        varieties: ['Masala Chai Royale', 'White Peach Oolong', 'Dark Chocolate Mint', 'Saffron Rose Delight'],
        image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        benefits: ['Unique flavor profiles', 'Antioxidant rich', 'Mood enhancement', 'Conversation piece'],
        origin: 'Proprietary Blends',
        caffeine: 'Varies',
        brewingTemp: '85-95°C'
      },
      {
        id: 6,
        name: 'Global Iced Tea',
        tag: 'Refreshment Redefined',
        description: 'Crafted specifically for perfect cold brewing',
        longDescription: 'Our Global Iced Tea collection revolutionizes cold infusion. Specially processed leaves maintain clarity and flavor when brewed cold.',
        packetTypes: ['Cold Brew Pyramid', 'Iced Tea Concentrate', 'Party Dispenser Pack'],
        varieties: ['Japanese Sencha Cold Brew', 'Thai Iced Tea Blend', 'Berry Hibiscus Fusion', 'Mint Lime Detox'],
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        benefits: ['Instant refreshment', 'Low calorie', 'Hydration boost', 'Entertaining essential'],
        origin: 'Multiple Origins',
        caffeine: 'Low-Medium',
        brewingTemp: 'Cold Brew'
      }
  ];

  // Render a single card
  const renderCard = (category) => (
    <div className="category-card">
      <div className="category-badge">{category.tag}</div>
      <div className="category-image">
        <img src={category.image} alt={category.name} loading="lazy" />
        <div className="category-overlay">
          <div className="overlay-content">
            <span className="overlay-origin">{category.origin}</span>
            <button
              className="btn btn-explore"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCategory(category);
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Explore Collection
            </button>
          </div>
        </div>
      </div>
      <div className="category-content">
        <div className="category-header">
          <h3>{category.name}</h3>
          <div className="category-meta">
            <span className="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {category.caffeine}
            </span>
            <span className="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {category.origin.split('|')[0].trim()}
            </span>
          </div>
        </div>

        <p className="category-description">{category.description}</p>

        <div className="packet-types">
          {category.packetTypes.slice(0, 2).map((type, i) => (
            <span key={i} className="packet-type">{type}</span>
          ))}
          {category.packetTypes.length > 2 && (
            <span className="packet-type">+{category.packetTypes.length - 2} more</span>
          )}
        </div>

        <div className="category-actions">
          <button
            className="btn btn-primary"
            onClick={() => setSelectedCategory(category)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="categories"
      className={`categories ${isPage ? 'page-view' : 'home-view'}`}
      aria-label="Premium Tea Collections"
    >
      {!isPage && (
        <>
          <div className="bg-decoration leaf-1"></div>
          <div className="bg-decoration leaf-2"></div>
        </>
      )}

      <div className="container">
        <div className="section-header">
          <div className="header-content">
            {!isPage && <span className="section-tag">World-Class Selection</span>}
            <h2>
              {isPage ? (
                <>Global Tea<span className="accent-text"> Collections</span></>
              ) : (
                <>Curated <span className="accent-text">Tea Experiences</span></>
              )}
            </h2>
            {/* <p className="section-subtitle">
              {isPage
                ? "Discover our globally sourced, premium tea collections. Each curated by master blenders for exceptional quality and flavor."
                : "Journey through our exclusive tea collections, each telling a story of terroir, craftsmanship, and exceptional taste."
              }
            </p> */}
          </div>
          {/* REMOVED: Header View All Button */}
        </div>

        {/* Main Content Area */}
        <div className="categories-content">
          {isPage ? (
            // === GRID VIEW ===
            <div className="all-categories-grid">
              {categories.map((category) => (
                <div key={category.id} className="category-card-wrapper">
                  {renderCard(category)}
                </div>
              ))}
            </div>
          ) : (
            // === SLIDER VIEW ===
            <div className="categories-slider-wrapper">
                
                {/* Previous Button (Left) */}
                <button className="nav-arrow prev-arrow" onClick={handlePrev} aria-label="Previous">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M15 18l-6-6 6-6"></path>
                    </svg>
                </button>

                <Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 40 }
                    }}
                    loop={true}
                    speed={800}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    onSwiper={setSwiperInstance}
                    className="categories-swiper"
                >
                    {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <div className="slide-inner">
                        {renderCard(category)}
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                {/* Next Button (Right) */}
                <button className="nav-arrow next-arrow" onClick={handleNext} aria-label="Next">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6"></path>
                    </svg>
                </button>
            </div>
          )}
        </div>

        {/* --- ADDED: Bottom View All Button --- */}
        {!isPage && (
          <div className="section-footer">
            <button 
              className="btn-view-all-footer"
              onClick={() => {
                navigate('/Categories');
                window.scrollTo(0, 0);
              }}
            >
              View All Collections
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Premium Modal */}
      {selectedCategory && (
        <div className="modal-overlay" onClick={() => setSelectedCategory(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCategory(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18"></path><path d="M6 6l12 12"></path>
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-tags">
                <span className="modal-tag">{selectedCategory.tag}</span>
                <span className="modal-origin">{selectedCategory.origin}</span>
              </div>
              <h2>{selectedCategory.name}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-image-section">
                <div className="modal-image-wrapper">
                  <img src={selectedCategory.image} alt={selectedCategory.name} />
                </div>
              </div>

              <div className="modal-details">
                <div className="detail-section">
                  <h3>Collection Story</h3>
                  <p className="modal-description">{selectedCategory.longDescription}</p>
                </div>

                <div className="detail-grid">
                  <div className="detail-column">
                    <h4>Available Varieties</h4>
                    <div className="varieties-grid">
                      {selectedCategory.varieties.map((variety, i) => (
                        <div key={i} className="variety-card">
                          <span>{variety}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <button className="btn btn-primary" onClick={() => navigate(`/collection/${selectedCategory.id}`)}>
                    Shop This Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Categories;