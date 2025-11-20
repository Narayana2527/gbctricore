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
        <h1 className="fw-bold display-4 display-md-3 display-lg-2 text-warning mb-4">
          TECHNOLOGIES
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-4" style={{ maxWidth: "760px", fontSize: "1.25rem" }}>
          Transform your career with industry-leading IT training programs. 
          Master cutting-edge technologies and unlock your potential.
        </p>

        {/* Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
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
        <Row className="text-center text-white">
          <Col sm={4} className="mb-sm-0 mb-3">
            <h2 className="fw-bold display-5">6+</h2>
            <p className="m-0">Training Programs</p>
          </Col>
          <Col sm={4} className="mb-sm-0 mb-3">
            <h2 className="fw-bold display-5">500+</h2>
            <p className="m-0">Students Trained</p>
          </Col>
          <Col sm={4}>
            <h2 className="fw-bold display-5">95%</h2>
            <p className="m-0">Success Rate</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GBCCarousel;
