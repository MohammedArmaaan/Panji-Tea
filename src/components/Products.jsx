import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Products.css';

const Products = ({ isPage = false }) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  const products = [
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
      brewingTemp: '70-80°C',
      price: '$15.99',
      originalPrice: '$19.99',
      rating: 4.8,
      badge: 'Best Seller'
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
      brewingTemp: '95-100°C',
      price: '$12.99',
      originalPrice: '$15.99',
      rating: 4.6,
      badge: 'Popular'
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
      brewingTemp: '85-95°C',
      price: '$18.99',
      originalPrice: '$22.99',
      rating: 4.9,
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Herbal Sanctuary',
      tag: 'Wellness & Relaxation',
      description: 'Caffeine-free botanical blends for holistic wellbeing',
      longDescription: 'Our Herbal Sanctuary collection combines ancient wisdom with modern science. Each blend is formulated by herbalists to deliver targeted benefits.',
      packetTypes: ['Wellness Ritual', 'Sleep Sanctuary', 'Detox Renewal'],
      varieties: ['Chamomile Lavender Dream', 'Turmeric Ginger Vitality', 'Rooibos African Sunset', 'Peppermint Digestive'],
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      benefits: ['Caffeine-free relaxation', 'Digestive harmony', 'Immune support', 'Natural sleep aid'],
      origin: 'Global Organic Sources',
      caffeine: 'None',
      brewingTemp: '100°C',
      price: '$14.99',
      originalPrice: '$17.99',
      rating: 4.7,
      badge: 'Organic'
    },
    {
      id: 5,
      name: 'Signature Masala Chai',
      tag: 'Master Blender\'s Collection',
      description: 'Exclusive creations by our world-renowned tea sommelier',
      longDescription: 'These limited-edition blends represent the pinnacle of our blender\'s art. Combining rare tea leaves with exotic botanicals.',
      packetTypes: ['Limited Edition', 'Sommelier Selection', 'Seasonal Harvest'],
      varieties: ['Masala Chai Royale', 'White Peach Oolong', 'Dark Chocolate Mint', 'Saffron Rose Delight'],
      image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      benefits: ['Unique flavor profiles', 'Antioxidant rich', 'Mood enhancement', 'Conversation piece'],
      origin: 'Proprietary Blends',
      caffeine: 'Varies',
      brewingTemp: '85-95°C',
      price: '$16.99',
      originalPrice: '$20.99',
      rating: 4.8,
      badge: 'Signature Blend'
    },
    {
      id: 6,
      name: 'Global Iced Tea',
      tag: 'Refreshment Redefined',
      description: 'Crafted specifically for perfect cold brewing',
      longDescription: 'Our Global Iced Tea collection revolutionizes cold infusion. Specially processed leaves maintain clarity and flavor when brewed cold.',
      packetTypes: ['Cold Brew Pyramid', 'Iced Tea Concentrate', 'Party Dispenser Pack'],
      varieties: ['Japanese Sencha Cold Brew', 'Thai Iced Tea Blend', 'Berry Hibiscus Fusion', 'Mint Lime Detox'],
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      benefits: ['Instant refreshment', 'Low calorie', 'Hydration boost', 'Entertaining essential'],
      origin: 'Multiple Origins',
      caffeine: 'Low-Medium',
      brewingTemp: 'Cold Brew',
      price: '$13.99',
      originalPrice: '$16.99',
      rating: 4.5,
      badge: 'Summer Special'
    }
  ];

  const renderCard = (product) => (
    <div className="product-card">
      <div className="product-card-content">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} loading="lazy" />
          <div className="product-badge">{product.badge}</div>
          <div className="product-overlay">
            <button
              className="btn-quick-view"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProduct(product);
              }}
            >
              Quick View
            </button>
          </div>
        </div>
        <div className="product-details-section">
          <div className="product-header">
            <h3>{product.name}</h3>
            <div className="product-rating">
              <span style={{color: '#FFD700'}}>★</span> {product.rating}
            </div>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-meta-info">
            <div className="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {product.caffeine}
            </div>
            <div className="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {product.origin.split('|')[0].trim()}
            </div>
          </div>

          <div className="product-price">
            <span className="current-price">{product.price}</span>
            <span className="original-price">{product.originalPrice}</span>
          </div>

          <div className="product-actions">
            <button
              className="btn btn-primary"
              onClick={() => setSelectedProduct(product)}
            >
              View Details
            </button>
            <button className="btn-favorite">♥</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="products"
      className={`products ${isPage ? 'page-view' : 'home-view'}`}
      aria-label="Premium Tea Products"
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
            {!isPage && <span className="section-tag">Premium Collection</span>}
            <h2>
              {isPage ? (
                <>Our Tea<span className="accent-text"> Products</span></>
              ) : (
                <>Featured <span className="accent-text">Products</span></>
              )}
            </h2>
          </div>
        </div>

        {/* Main Content Area */}
        {/* Main Content Area */}
        <div className="products-content">
          {/* CHANGE: Added isMobile check here */}
          {(isPage || isMobile) ? (
            // === GRID VIEW ===
            <div className="all-products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card-wrapper">
                  {renderCard(product)}
                </div>
              ))}
            </div>
          ) : (
            // === SLIDER VIEW (Desktop Home Only) ===
            <div className="products-slider-wrapper">
               {/* ... Keep existing slider code ... */}
               {/* Previous Button */}
               <button className="nav-arrow prev-arrow" onClick={handlePrev} aria-label="Previous">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M15 18l-6-6 6-6"></path>
                    </svg>
                </button>

                <Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    breakpoints={{
                        768: { slidesPerView: 1, spaceBetween: 40 }
                    }}
                    loop={true}
                    speed={800}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    onSwiper={setSwiperInstance}
                    className="products-swiper"
                >
                    {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="slide-inner">
                        {renderCard(product)}
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                {/* Next Button */}
                <button className="nav-arrow next-arrow" onClick={handleNext} aria-label="Next">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6"></path>
                    </svg>
                </button>
            </div>
          )}
        </div>

        {/* Footer Button */}
        {!isPage && (
          <div className="section-footer">
            <button
              className="btn-view-all-footer"
              onClick={() => {
                navigate('/Products');
                window.scrollTo(0, 0);
              }}
            >
              View All Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Premium Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18"></path><path d="M6 6l12 12"></path>
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-tags">
                <span className="modal-tag">{selectedProduct.tag}</span>
                <span className="modal-origin">{selectedProduct.origin}</span>
              </div>
              <h2>{selectedProduct.name}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-image-section">
                <div className="modal-image-wrapper">
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
              </div>

              <div className="modal-details">
                <div className="detail-section">
                  <h3>Product Details</h3>
                  <p className="modal-description">{selectedProduct.longDescription}</p>
                </div>

                <div className="detail-grid">
                  <div className="detail-column">
                    <h4>Product Information</h4>
                    <div className="product-info-grid">
                      <div className="info-item">
                        <span className="info-label">Caffeine Level</span>
                        <span className="info-value">{selectedProduct.caffeine}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Brewing Temperature</span>
                        <span className="info-value">{selectedProduct.brewingTemp}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Origin</span>
                        <span className="info-value">{selectedProduct.origin.split('|')[0].trim()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="detail-column">
                    <h4>Available Options</h4>
                    <div className="varieties-grid">
                      {selectedProduct.packetTypes.map((type, i) => (
                        <div key={i} className="variety-card">
                          <span>{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="product-modal-pricing">
                  <div className="price-display">
                    <span className="current-price">{selectedProduct.price}</span>
                    <span className="original-price">{selectedProduct.originalPrice}</span>
                    <div className="rating-display">
                      <span style={{color: '#FFD700'}}>★</span> {selectedProduct.rating}
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <button className="btn btn-primary" onClick={() => navigate(`/product/${selectedProduct.id}`)}>
                    View Details
                  </button>
                  <button className="btn btn-outline" onClick={() => navigate('/products')}>
                    View All Products
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

export default Products;