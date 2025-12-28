import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-scroll';
import { ChevronLeft, ChevronRight, BookOpen, Users, Award } from 'lucide-react';

const SLIDES = [
  {
    title: "GBC TRICORE",
    highlight: "TECHNOLOGIES",
    subtitle: "EMPOWERING FUTURE INNOVATORS",
    description: "Unlock new opportunities with high-impact, skill-focused IT programs designed for career transformation and technical mastery.",
    primaryCTA: { label: "Explore Courses", to: "courses" },
    secondaryCTA: { label: "Contact Us", to: "contact" },
    stats: [
      { icon: <BookOpen size={24} />, count: "6+", label: "Programs" },
      { icon: <Users size={24} />, count: "500+", label: "Students" },
      { icon: <Award size={24} />, count: "95%", label: "Success" },
    ],
    image: "/assets/images/carousel-img.jpg",
  },
  // {
  //   title: "INDUSTRY",
  //   highlight: "EXPERT LED",
  //   subtitle: "LEARN FROM THE BEST",
  //   description: "Gain hands-on experience with real-world projects and mentorship from professionals currently working in the IT sector.",
  //   primaryCTA: { label: "Our Story", to: "about" },
  //   secondaryCTA: { label: "Get Started", to: "contact" },
  //   stats: [
  //     { icon: <BookOpen size={24} />, count: "Live", label: "Projects" },
  //     { icon: <Users size={24} />, count: "24/7", label: "Support" },
  //     { icon: <Award size={24} />, count: "100%", label: "Dedication" },
  //   ],
  //   image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
  // }
];

function GBCCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = (index) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange(current === SLIDES.length - 1 ? 0 : current + 1);
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section className="gbc-carousel-container" style={styles.wrapper}>
      {/* Background Image Layers */}
      {SLIDES.map((s, idx) => (
        <div 
          key={idx}
          className={`bg-image-layer ${idx === current ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(8, 28, 73, 0.8), rgba(8, 28, 73, 0.85)), url(${s.image})`,
          }}
        />
      ))}

      {/* Main Content Area */}
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <div className={`text-center text-white carousel-content-node ${isAnimating ? 'exit' : 'enter'}`}>
          
          <p className="text-warning fw-bold mb-2 tracking-widest d-block" style={styles.subtitle}>
            {slide.subtitle}
          </p>
          
          <h1 className="fw-bold display-4 display-md-2 mb-0">
            {slide.title}
          </h1>
          <h1 className="fw-bold display-5 display-md-3 text-warning mb-4">
            {slide.highlight}
          </h1>

          <p className="mx-auto mb-4 px-2 opacity-75 description-text">
            {slide.description}
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-5">
            <Button 
              as={Link} to={slide.primaryCTA.to} smooth={true}
              variant="warning" size="lg" className="rounded-pill px-5 py-3 fw-bold w-xs-100 shadow"
            >
              {slide.primaryCTA.label}
            </Button>
            <Button 
              as={Link} to={slide.secondaryCTA.to} smooth={true}
              variant="outline-light" size="lg" className="rounded-pill px-5 py-3 fw-bold w-xs-100"
            >
              {slide.secondaryCTA.label}
            </Button>
          </div>

          {/* Stats Bar (Hidden on very small screens or condensed) */}
          <Row className="pt-4 border-top border-light border-opacity-25 justify-content-center">
            {slide.stats.map((item, i) => (
              <Col key={i} xs={4} md={3} className="text-center px-1 px-md-3">
                <div className="text-warning mb-1 mb-md-2">{item.icon}</div>
                <h3 className="fw-bold mb-0 stat-number">{item.count}</h3>
                <p className="text-uppercase mb-0 stat-label">{item.label}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      {/* Nav Controls (Desktop Only for better UX) */}
      <button onClick={() => handleSlideChange(current === 0 ? SLIDES.length - 1 : current - 1)} className="nav-arrow left d-none d-lg-flex">
        <ChevronLeft size={32} />
      </button>
      <button onClick={() => handleSlideChange(current === SLIDES.length - 1 ? 0 : current + 1)} className="nav-arrow right d-none d-lg-flex">
        <ChevronRight size={32} />
      </button>

      {/* Progress indicators */}
      <div className="indicator-container">
        {SLIDES.map((_, i) => (
          <div 
            key={i} 
            onClick={() => handleSlideChange(i)}
            className={`indicator-bar ${i === current ? 'active' : ''}`}
          />
        ))}
      </div>

      <style>{`
        .gbc-carousel-container { position: relative; height: 100vh; width: 100%; overflow: hidden; background: #081c49; }
        
        .bg-image-layer {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0; transition: opacity 1.2s ease-in-out, transform 10s ease-out;
          z-index: 1;
        }
        .bg-image-layer.active { opacity: 1; transform: scale(1.1); z-index: 2; }

        .carousel-content-node { z-index: 10; position: relative; max-width: 900px; }
        .carousel-content-node.enter { opacity: 1; transform: translateY(0); transition: all 0.8s ease-out; }
        .carousel-content-node.exit { opacity: 0; transform: translateY(30px); transition: all 0.4s ease-in; }

        .description-text { font-size: 1.1rem; max-width: 650px; }
        @media (max-width: 768px) { .description-text { font-size: 1rem; } }

        .stat-number { font-size: 1.75rem; }
        .stat-label { font-size: 0.65rem; letter-spacing: 1px; opacity: 0.7; }
        @media (min-width: 768px) { .stat-number { font-size: 2.5rem; } .stat-label { font-size: 0.8rem; } }

        .nav-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(255,255,255,0.05); color: white; border: 1px solid rgba(255,255,255,0.2);
          width: 60px; height: 60px; border-radius: 50%; align-items: center; justify-content: center;
          transition: 0.3s; z-index: 20; cursor: pointer;
        }
        .nav-arrow:hover { background: #ffc107; border-color: #ffc107; color: #081c49; }
        .nav-arrow.left { left: 30px; }
        .nav-arrow.right { right: 30px; }

        .indicator-container { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; z-index: 20; }
        .indicator-bar { height: 4px; width: 30px; background: rgba(255,255,255,0.3); cursor: pointer; transition: 0.4s; border-radius: 2px; }
        .indicator-bar.active { width: 60px; background: #ffc107; }

        @media (max-width: 576px) { .w-xs-100 { width: 100%; } }
      `}</style>
    </section>
  );
}

const styles = {
  wrapper: {
    height: '100vh', // Forces full height on all devices
    display: 'flex',
    alignItems: 'center',
  },
  subtitle: {
    letterSpacing: '0.25em',
    fontSize: '0.85rem',
    textTransform: 'uppercase'
  }
};

export default GBCCarousel;