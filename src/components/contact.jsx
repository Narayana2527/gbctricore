import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaClock, FaGoogle } from "react-icons/fa6";

const Contact = () => {
  // Theme Colors
  const ACCENT_COLOR = "#ffc400";
  const TEXT_DARK = "#212529";

  return (
    <div className="py-5 bg-light" id="contact">
      <Container>
        {/* --- Header Section --- */}
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Get In Touch</h1>
          <hr 
            className="mx-auto border-4 opacity-100 mb-4" 
            style={{ width: "80px", borderColor: ACCENT_COLOR }} 
          />
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Ready to start your tech career journey? Our team is here to support you every step of the way.
          </p>
        </header>

        <Row className="g-4">
          {/* --- Info Column --- */}
          <Col lg={6}>
            <div className="d-flex flex-column gap-4 h-100">
              
              {/* Phone Card */}
              <Card className="border-0 shadow-sm p-3 h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="p-2 rounded-circle bg-light me-3">
                        <IoIosCall className="fs-3" style={{ color: ACCENT_COLOR }} />
                    </div>
                    <Card.Title className="h4 mb-0 fw-bold">Phone Numbers</Card.Title>
                  </div>
                  <div className="ps-5">
                    <p className="mb-1 fw-semibold text-muted">Primary: <span className="text-dark">+91 9010007319</span></p>
                    <p className="mb-0 fw-semibold text-muted">Secondary: <span className="text-dark">+91 9010007329</span></p>
                  </div>
                </Card.Body>
              </Card>

              {/* Email Card */}
              <Card className="border-0 shadow-sm p-3 h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="p-2 rounded-circle bg-light me-3">
                        <CiMail className="fs-3" style={{ color: ACCENT_COLOR }} />
                    </div>
                    <Card.Title className="h4 mb-0 fw-bold">Email Address</Card.Title>
                  </div>
                  <div className="ps-5">
                    <h5 className="fw-bold mb-2" style={{ color: "#5043e7" }}>info@gbctricore.com</h5>
                    <p className="small text-muted mb-0">Get a response within 24 hours.</p>
                  </div>
                </Card.Body>
              </Card>

              {/* Hours Card */}
              <Card className="border-0 shadow-sm p-3 h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="p-2 rounded-circle bg-light me-3">
                        <FaClock className="fs-3" style={{ color: ACCENT_COLOR }} />
                    </div>
                    <Card.Title className="h4 mb-0 fw-bold">Business Hours</Card.Title>
                  </div>
                  <div className="ps-5 small">
                    <div className="d-flex justify-content-between border-bottom py-2">
                        <span>Mon - Fri</span>
                        <span className="fw-bold">9:00 AM - 8:30 PM</span>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                        <span>Saturday</span>
                        <span className="fw-bold">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between py-2 text-danger">
                        <span>Sunday</span>
                        <span className="fw-bold">Closed</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>

            </div>
          </Col>

          {/* --- CTA Column --- */}
          <Col lg={6}>
            <Card 
                className="h-100 border-0 shadow text-center p-4 p-md-5 d-flex flex-column justify-content-center" 
                style={{ background: ACCENT_COLOR, borderRadius: "20px" }}
            >
              <Card.Body>
                <h2 className="display-6 fw-bold mb-4" style={{ color: "#1a1a1a" }}>
                  Ready to Transform Your Career?
                </h2>
                <Card.Text className="mb-5 lead fw-medium" style={{ color: "#444" }}>
                  Join a growing community of learners who have transformed their careers through our industry-focused programs.
                </Card.Text>

                <div className="d-grid gap-3">
                  <Button 
                    href="https://forms.gle/DnmVqCU3FsKu4vVMA"
                    target="_blank"
                    className="py-3 border-0 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                    style={{ background: "#5043e7", borderRadius: "12px", color: "white" }}
                  >
                    Register for Free Demo
                  </Button>
                  
                  <Button 
                    variant="outline-dark"
                    href="https://g.page/r/CWLD-WYtHKQPEAE/review"
                    target="_blank"
                    className="py-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                    style={{ borderRadius: "12px", borderWidth: "2px" }}
                  >
                    <FaGoogle /> Read Our Reviews
                  </Button>
                </div>

                {/* <div className="mt-5 pt-3 border-top border-dark border-opacity-10">
                   <p className="mb-0 small fw-bold text-dark opacity-75">
                     ✔ Free Consultation • ✔ Flexible Timing • ✔ Expert Mentors
                   </p>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;