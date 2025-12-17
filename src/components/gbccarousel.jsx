import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-scroll';
const BACKGROUND_IMG_PATH = "/assets/images/carousel-img.jpg";

function GBCCarousel() {
  return (
    <div
      className="position-relative d-flex justify-content-center align-items-center w-100"
      style={{
        height: "100vh",
        backgroundImage: `url(${BACKGROUND_IMG_PATH})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        overflow: "hidden",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(8, 28, 73, 0.8)" }}
      ></div>

      <Container className="position-relative text-white text-center px-3">
        {/* Title */}
        <h1 className="fw-bold display-3 display-md-2 display-lg-1 mb-0">
          GBC TRICORE
        </h1>
        <h1 className="fw-bold display-4 display-md-3 display-lg-2 text-warning mb-3">
          TECHNOLOGIES
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-4" style={{ maxWidth: "760px", fontSize: "1.25rem" }}>
          Unlock new opportunities with high-impact, skill-focused IT programs designed for career transformation.
        </p>

        {/* Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-3">
          <Button 
            variant="warning" 
            as={Link}
            to="courses"
            smooth={true}
            duration={500}
            offset={-70}
            className="px-4 py-2 fw-semibold">
            Explore Us
          </Button>

          <Button
            variant="outline-warning"
            as={Link}
            to='contact'
            smooth={true}
            duration={500}
            offset={-70}
            className="px-4 py-2 fw-semibold"
          >
            Contact Us
          </Button>
        </div>

        {/* Stats */}
        <Row 
          className="text-center text-white pt-2 border-top border-light border-opacity-25 
                    flex-nowrap overflow-auto hide-scrollbar"
          style={{
            scrollbarWidth: 'none', // For Firefox
            msOverflowStyle: 'none', // For IE/Edge
          }}
        >
          {/* CSS to hide scrollbar for Chrome/Safari */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}</style>

          {[
            { label: "Training Programs", value: "6+" },
            { label: "Students Trained", value: "500+" },
            { label: "Success Rate", value: "95%" }
          ].map((stat, idx) => (
            <Col 
              key={idx} 
              xs={9}    // Mobile: shows 90% of one card so the next is "peeked"
              sm={4}    // Tablet/Desktop: returns to 3-column grid
              className="flex-shrink-0 mb-sm-0"
            >
              <div className="px-2">
                <h2 className="fw-bold display-5 mb-1 text-warning">{stat.value}</h2>
                <p className="small text-uppercase tracking-widest opacity-75 m-0">
                  {stat.label}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default GBCCarousel;
