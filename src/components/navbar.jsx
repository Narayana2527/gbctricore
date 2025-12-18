import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { scroller } from 'react-scroll'; // Ensure react-scroll is installed
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbars() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  
  const navigateAndScroll = (section) => {
  handleLinkClick();
  
  if (location.pathname !== '/') {
    navigate('/');
    setTimeout(() => {
      if (section === 'home') {
        window.scrollTo(0, 0); // Force jump to top
      } else {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }
    }, 150);
  } else {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  }
};

  return (
    <Navbar
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      className="bg-white px-2 shadow-sm"
      style={{ zIndex: 1050 }}
    >
      <Container fluid>
        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 shadow-none">
          {expanded ? <FaXmark size={24} color="#5043e7" /> : <FaBars size={24} color="#5043e7" />}
        </Navbar.Toggle>

        {/* Logo Section */}
        <Navbar.Brand 
          as={RouterLink} 
          to="/" 
          onClick={() => navigateAndScroll('home')}
          className="mx-auto mx-lg-0 px-lg-3 d-flex flex-column align-items-center"
        >
          <img
            src="/assets/images/GBC-logo.jpg"
            width={85}
            height={75}
            alt="GBC Logo"
            className="img-fluid"
          />
          <span className="d-none d-md-block text-muted" style={{ fontSize: "12px", fontWeight: "600" }}>
            Your Trusted Partner for IT Skill Development & Placement Assistance	
          </span>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {/* HOME */}
            <Nav.Link 
              as={RouterLink} 
              to="/" 
              className="px-3 fw-bold text-dark"
              onClick={() => navigateAndScroll('home')}
            >
              Home
            </Nav.Link>

            {/* COURSES DROPDOWN */}
            <NavDropdown 
              title="Courses" 
              id="courses-dropdown" 
              className="px-3 fw-bold"
            >
              <NavDropdown.Item as={RouterLink} to="/course/Tosca" onClick={handleLinkClick}>
                TOSCA Automation
              </NavDropdown.Item>
              <NavDropdown.Item as={RouterLink} to="/course/selenium" onClick={handleLinkClick}>
                Selenium with Java
              </NavDropdown.Item>
              <NavDropdown.Item as={RouterLink} to="/course/IBM-Mainframes" onClick={handleLinkClick}>
                IBM Mainframes
              </NavDropdown.Item>
              <NavDropdown.Item as={RouterLink} to="/course/okta" onClick={handleLinkClick}>
                Okta IAM
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigateAndScroll('courses')}>
                View All Courses
              </NavDropdown.Item>
            </NavDropdown>

            {/* SCROLL LINKS */}
            <Nav.Link className="px-3 fw-bold text-dark" onClick={() => navigateAndScroll('about')}>
              About
            </Nav.Link>

            <Nav.Link className="px-3 fw-bold text-dark" onClick={() => navigateAndScroll('contact')}>
              Contact
            </Nav.Link>

            <Nav.Link className="px-3 fw-bold text-dark" onClick={() => navigateAndScroll('demo')}>
              Demo
            </Nav.Link>
          </Nav>

          {/* CTA REGISTER BUTTON */}
          <Nav className="ms-lg-2">
            <Nav.Item className="mt-3 mt-lg-0">
              <Button
                href="https://forms.gle/DnmVqCU3FsKu4vVMA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 px-4 py-2 fw-bold shadow-sm"
                style={{ 
                  background: "#5043e7", 
                  borderColor: "#5043e7",
                  borderRadius: "8px",
                  fontSize: '14px' 
                }}
              >
                Register Now
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;