import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-scroll';
import { BookOpen, Users, Award } from 'lucide-react';

const HERO_DATA = {
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
};

function GBCCarousel() {
  return (
    <section className="gbc-hero-container" style={styles.wrapper}>
      {/* Background Image Layer */}
      <div 
        className="bg-image-layer"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 28, 73, 0.8), rgba(8, 28, 73, 0.85)), url(${HERO_DATA.image})`,
        }}
      />

      {/* Main Content Area */}
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <div className="text-center text-white hero-content-node">
          
          <p className="text-warning fw-bold mb-2 tracking-widest d-block" style={styles.subtitle}>
            {HERO_DATA.subtitle}
          </p>
          
          <h1 className="fw-bold display-4 display-md-2 mb-0">
            {HERO_DATA.title}
          </h1>
          <h1 className="fw-bold display-5 display-md-3 text-warning mb-4">
            {HERO_DATA.highlight}
          </h1>

          <p className="mx-auto mb-4 px-2 opacity-75 description-text">
            {HERO_DATA.description}
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-5">
            <Button 
              as={Link} to={HERO_DATA.primaryCTA.to} smooth={true} offset={-80}
              variant="warning" size="lg" className="rounded-pill px-5 py-3 fw-bold w-xs-100 shadow-lg"
            >
              {HERO_DATA.primaryCTA.label}
            </Button>
            <Button 
              as={Link} to={HERO_DATA.secondaryCTA.to} smooth={true} offset={-80}
              variant="outline-light" size="lg" className="rounded-pill px-5 py-3 fw-bold w-xs-100"
            >
              {HERO_DATA.secondaryCTA.label}
            </Button>
          </div>

          {/* Stats Bar */}
          <Row className="pt-4 border-top border-light border-opacity-25 justify-content-center">
            {HERO_DATA.stats.map((item, i) => (
              <Col key={i} xs={4} md={3} className="text-center px-1 px-md-3">
                <div className="text-warning mb-1 mb-md-2">{item.icon}</div>
                <h3 className="fw-bold mb-0 stat-number">{item.count}</h3>
                <p className="text-uppercase mb-0 stat-label">{item.label}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      <style>{`
        .gbc-hero-container { position: relative; height: 100vh; width: 100%; overflow: hidden; background: #081c49; }
        
        .bg-image-layer {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          z-index: 1;
          animation: slowZoom 20s infinite alternate;
        }

        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .hero-content-node { z-index: 10; position: relative; max-width: 900px; }

        .description-text { font-size: 1.1rem; max-width: 650px; line-height: 1.6; }
        @media (max-width: 768px) { .description-text { font-size: 1rem; } }

        .stat-number { font-size: 1.75rem; }
        .stat-label { font-size: 0.65rem; letter-spacing: 1px; opacity: 0.7; }
        @media (min-width: 768px) { .stat-number { font-size: 2.5rem; } .stat-label { font-size: 0.8rem; } }

        @media (max-width: 576px) { .w-xs-100 { width: 100%; } }
        
        /* Subtle entrance animation for the text */
        .hero-content-node {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
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