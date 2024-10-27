import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './event.css';
import firstImage from './first.jpg';
import secondImage from './second.jpg';
import thirdImage from './third.jpg';
import fourthImage from './fourth.jpg';
import fiveImage from './five.jpg';
import sixImage from './six.jpg';
import sevenImage from './seven.jpg';
import eightImage from './eight.jpg';
import nineImage from './nine.jpg';
import tenImage from './ten.jpg';
import { ReactComponent as EventIcon } from './icon.svg';

const StickyLine = () => (
  <div className="sticky-line">
    <span className="sticky-text">GARIMA ROY</span>
  </div>
);

const CustomEventIcon = () => {
  return (
    <div className="event-icon">
      <EventIcon className="icon" />
    </div>
  );
};




const Header = ({ searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <StickyLine />
      <header className="header-container">
        <nav className="nav-bar">
          <CustomEventIcon />
        
          <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
            <a href="#" className="nav-link">Events</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
            <a href="#" className="nav-link">Link5</a>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>
    </>
  );
};


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (action) => {
    alert(`You clicked on ${action}!`);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="hero-section">
      <div className="container mx-auto text-center">
        <h1 className="thq-heading mb-6 animate-fadeInUp">
          Welcome to EventSpot!
        </h1>
        <p className="hero-description mb-8 animate-fadeInUp">
          Discover and plan amazing events in your area with ease and elegance.
        </p>
        <div className="action-buttons mt-6">
          <button 
            className="action-button" 
            onClick={() => handleButtonClick("Action 1")}
          >
            Action 1
          </button>
          <button 
            className="action-button" 
            onClick={() => handleButtonClick("Action 2")}
          >
            Action 2
          </button>
          <div className="envelope-icon" onClick={togglePopup}>
            <p className="envelope-text">📩</p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={togglePopup}>
          <div className="message-box" onClick={(e) => e.stopPropagation()}>
            <h2>Your Message</h2>
            <p>This is where you can add your detailed message or information.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

const Slider = ({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  if (totalImages === 0) {
    return <div>No images found.</div>;
  }

  return (
    <div className="slider">
      <div className="slider-container" style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${(currentIndex * 100)}%)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index} onClick={() => onImageClick(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="slider-button prev-button">❮</button>
      <button onClick={nextSlide} className="slider-button next-button">❯</button>
    </div>
  );
};

const ImagePopup = ({ image, eventDetails, onClose }) => {
  if (!image) return null; // Return null if no image is passed

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="popup-image" />
        <h2>{eventDetails.name}</h2>
        <p>Date: {eventDetails.date}</p>
        <p>Location: {eventDetails.location}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};





const ServiceCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`service-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <button className="service-button">Learn More</button>
    </div>
  );
};

const FeaturedServices = () => {
  const services = [
    {
      icon: "🎉",
      title: "Wedding Planning",
      description: "Create your dream wedding with our expert planning services."
    },
    {
      icon: "🎭",
      title: "Corporate Events",
      description: "Professional event management for your business needs."
    },
    {
      icon: "🎂",
      title: "Birthday Parties",
      description: "Make your celebration truly special and memorable."
    },
    {
      icon: "🎪",
      title: "Social Gatherings",
      description: "Turn your social events into extraordinary experiences."
    }
  ];

  return (
    <section className="featured-services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ author, role, content, image }) => (
  <div className="testimonial-card">
    <div className="testimonial-content">{content}</div>
    <div className="testimonial-author">
      <img src={image} alt={author} className="author-image" />
      <div className="author-info">
        <h4>{author}</h4>
        <p>{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      author: "Sarah Johnson",
      role: "Bride",
      content: "The team made our wedding day absolutely perfect! Every detail was handled with such care and professionalism.",
      image: firstImage
    },
    {
      author: "Michael Chen",
      role: "Corporate Client",
      content: "Outstanding service for our annual conference. The attention to detail and execution was impeccable.",
      image: secondImage
    },
    {
      author: "Emily Williams",
      role: "Birthday Celebrant",
      content: "They transformed my vision into reality. My 30th birthday party was beyond my wildest dreams!",
      image: thirdImage
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-wrapper ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
        <div className="testimonial-navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};



const App = () => {
  const featuredImages = [
    { 
      src: firstImage, 
      alt: 'sun', 
      eventDetails: { 
        name: "Sunset Gala", 
        date: "2024-01-01", 
        location: "Beachside" 
      } 
    },
    { 
      src: secondImage, 
      alt: 'bird', 
      eventDetails: { 
        name: "Bird Watching", 
        date: "2024-02-10", 
        location: "Forest" 
      } 
    },
    { 
      src: thirdImage, 
      alt: 'forest', 
      eventDetails: { 
        name: "Forest Retreat", 
        date: "2024-03-15", 
        location: "National Park" 
      } 
    },
    { 
      src: fourthImage, 
      alt: 'mountains', 
      eventDetails: { 
        name: "Mountain Adventure", 
        date: "2024-04-20", 
        location: "Mountain Range" 
      } 
    },
    { 
      src: fiveImage, 
      alt: 'Five Image', 
      eventDetails: { 
        name: "Five Stars Dinner", 
        date: "2024-05-25", 
        location: "City Center" 
      } 
    },
  ];
  
  const recentImages = [
    { 
      src: sixImage, 
      alt: 'Home', 
      eventDetails: { 
        name: "Home Expo", 
        date: "2024-06-30", 
        location: "Convention Center" 
      } 
    },
    { 
      src: sevenImage, 
      alt: 'Peace', 
      eventDetails: { 
        name: "Peace Festival", 
        date: "2024-07-15", 
        location: "City Park" 
      } 
    },
    { 
      src: eightImage, 
      alt: 'Yoga', 
      eventDetails: { 
        name: "Yoga Retreat", 
        date: "2024-08-10", 
        location: "Wellness Center" 
      } 
    },
    { 
      src: nineImage, 
      alt: 'Lotus', 
      eventDetails: { 
        name: "Lotus Flower Exhibition", 
        date: "2024-09-05", 
        location: "Botanical Garden" 
      } 
    },
    { 
      src: tenImage, 
      alt: 'Ten Image', 
      eventDetails: { 
        name: "Ten-Year Anniversary", 
        date: "2024-10-20", 
        location: "Event Hall" 
      } 
    },
  ];
  

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedEventDetails, setSelectedEventDetails] = useState(null);

  const filteredFeaturedImages = featuredImages.filter(image =>
    image.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRecentImages = recentImages.filter(image =>
    image.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setSelectedEventDetails(image.eventDetails);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
    setSelectedEventDetails(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero />
      <div className="sliders-container">
        <h2 className="section-title">Featured Events</h2>
        <Slider images={filteredFeaturedImages} onImageClick={handleImageClick} />
        <h2 className="section-title">Recent Events</h2>
        <Slider images={filteredRecentImages} onImageClick={handleImageClick} />
      </div>
      {selectedImage && (
        <ImagePopup 
          image={selectedImage} 
          eventDetails={selectedEventDetails} 
          onClose={handleClosePopup} 
        />
      )}
      <FeaturedServices />
      <Testimonials />
    </div>
  );
};

export default App;