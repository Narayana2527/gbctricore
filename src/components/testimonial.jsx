import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div
      className="py-5 text-white"
      style={{ background: "#fd8a27" }}
      id="about"
    >
      <Container>
        {/* Heading */}
        <h1 className="text-center mb-3 fw-bold" style={{ fontSize: "48px" }}>
          Inspiration for Your Journey
        </h1>

        {/* Sub Title */}
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <p className="text-center fs-4 mb-4">
              Words that motivate us to excel in technology education
            </p>
          </Col>
        </Row>

        {/* Testimonial Cards */}
        <Row xs={1} md={2} lg={2} className="gy-4">
          {testimonialData.map((item, index) => (
            <Col key={index}>
              <Card
                className="h-100 px-4 py-5 border-0 shadow-sm"
                style={{
                  background: "#fd9a41",
                  color: "#fff5ec",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
              >
                <Card.Body>
                  <Card.Title className="fw-semibold" style={{ fontSize: "18px" }}>
                    "{item.quote}"
                  </Card.Title>
                  <Card.Text className="mt-3 fw-bold" style={{ fontSize: "16px" }}>
                    — {item.author}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const testimonialData = [
  {
    quote: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
  },
  {
    quote: "Technology is nothing. What matters is that you have faith in people.",
    author: "Steve Jobs",
  },
  {
    quote: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    author: "Brian Herbert",
  },
  {
    quote: "In technology, those who succeed are the ones who stay ahead of the curve.",
    author: "Industry Insight",
  },
];

export default Testimonials;
