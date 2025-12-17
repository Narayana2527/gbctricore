import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa"; // Requires react-icons

const Testimonials = () => {
  // Brand Colors
  const BG_MAIN = "#fd8a27";
  const CARD_BG = "#fd9a41";
  const TEXT_LIGHT = "#fff5ec";

  return (
    <div
      className="py-5 text-white"
      style={{ background: BG_MAIN, overflow: "hidden" }}
      id="about"
    >
      <Container className="py-md-4">
        {/* --- Section Header --- */}
        <header className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Inspiration for Your Journey</h2>
          <div 
            className="mx-auto border-top border-3" 
            style={{ width: "60px", borderColor: TEXT_LIGHT, opacity: 0.8 }}
          />
          <p className="fs-5 mt-3 opacity-90 mx-auto" style={{ maxWidth: "600px" }}>
            Words that motivate us to excel in technology education and personal growth.
          </p>
        </header>

        {/* --- Testimonial Grid --- */}
        <Row className="gy-4">
          {testimonialData.map((item, index) => (
            <Col xs={12} md={6} key={index}>
              <Card
                className="h-100 border-0 shadow-sm p-3 p-lg-4 testimonial-card"
                style={{
                  background: CARD_BG,
                  color: TEXT_LIGHT,
                  borderRadius: "20px",
                  transition: "all 0.3s ease-in-out",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                <Card.Body className="d-flex flex-column">
                  {/* Subtle Quote Icon */}
                  <FaQuoteLeft 
                    className="mb-3 opacity-50" 
                    style={{ fontSize: "1.5rem" }} 
                  />
                  
                  <Card.Text 
                    className="fst-italic mb-4 flex-grow-1" 
                    style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
                  >
                    {item.quote}
                  </Card.Text>

                  <div className="d-flex align-items-center mt-auto">
                    <div 
                      className="bg-white me-3" 
                      style={{ width: "30px", height: "2px", opacity: 0.6 }}
                    />
                    <Card.Title 
                      className="h6 mb-0 fw-bold text-uppercase tracking-wider" 
                      style={{ fontSize: "14px", letterSpacing: "1px" }}
                    >
                      {item.author}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Internal CSS for Hover State */}
      <style>{`
        .testimonial-card:hover {
          transform: translateY(-10px);
          background: #ffaa5a !important; /* Slightly lighter on hover */
          box-shadow: 0 15px 30px rgba(0,0,0,0.15) !important;
        }
      `}</style>
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