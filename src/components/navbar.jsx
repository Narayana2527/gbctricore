import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbars() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  const handleHomeClick = (e) => {
    handleLinkClick();
    if (location.pathname === '/') {
      e.preventDefault();
      scroller.scrollTo('home', {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  const scrollOrRoute = (section) => {
    handleLinkClick();
    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70
      });
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={handleToggle}
      style={{ background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
      className="px-2"
    >
      <Container fluid>

        {/* Left-aligned hamburger (mobile) */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          {expanded ? <FaXmark size={22} /> : <FaBars size={22} />}
        </Navbar.Toggle>

        {/* Center logo */}
        <Navbar.Brand className="mx-auto px-0 px-lg-5 px-md-3 d-flex flex-column align-items-center">
          <a href="/">
            <img
              src="/assets/images/GBC-logo.jpg"
              width={80}
              height={80}
              alt="logo"
            />
          </a>
          <p className="mt-1 mb-0" style={{ fontSize: "10px" }}>
            Leading IT Training Institute
          </p>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">

            {/* HOME */}
            <Nav.Item>
              <RouterLink
                to="/"
                className="nav-link fw-semibold"
                onClick={handleHomeClick}
              >
                Home
              </RouterLink>
            </Nav.Item>

            <NavDropdown title="Courses" id="courses-dropdown" className="fw-semibold">

              {/* All Courses Scroll or Navigate */}
              {/* {location.pathname === "/" ? (
                <ScrollLink
                  to="courses"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="dropdown-item"
                  onClick={handleLinkClick}
                >
                  Courses
                </ScrollLink>
              ) : (
                <RouterLink
                  to="/#courses"
                  className="dropdown-item"
                  onClick={handleLinkClick}
                >
                  Courses
                </RouterLink>
              )} */}

              {/* Custom course categories */}
              <RouterLink
                to="#development"
                className="dropdown-item"
                onClick={() => scrollOrRoute("courses")}
              >
                Development Courses
              </RouterLink>

              <RouterLink
                to="#testing"
                className="dropdown-item"
                onClick={() => scrollOrRoute("courses")}
              >
                Testing Courses
              </RouterLink>

              <RouterLink
                to="#analytics"
                className="dropdown-item"
                onClick={() => scrollOrRoute("courses")}
              >
                Data Analytics Courses
              </RouterLink>

            </NavDropdown>

            {/* ABOUT */}
            <Nav.Item>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link fw-semibold"
                onClick={handleLinkClick}
              >
                About
              </ScrollLink>
            </Nav.Item>

            {/* CONTACT */}
            <Nav.Item>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link fw-semibold"
                onClick={handleLinkClick}
              >
                Contact
              </ScrollLink>
            </Nav.Item>

          </Nav>

          {/* REGISTER BUTTON */}
          <Nav>
            <Nav.Item className="mt-2 mt-lg-0">
              <a
                href="https://forms.gle/DnmVqCU3FsKu4vVMA"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link border rounded-3 text-white px-3"
                style={{ background: "#5043e7" }}
                onClick={handleLinkClick}
              >
                Register Now
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navbars;
