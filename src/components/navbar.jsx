import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbars() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="p-3"
      style={{ background: "#fff" }}
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container>
        <Navbar.Brand className='mx-auto' style={{ cursor: "pointer" }}>
          <img src="/assets/images/GBC-logo.jpg" style={{ width: "100px", height: "100px" }} alt="gbc-logo" />
          <p className='mt-2' style={{ fontSize: "10px" }}>Leading IT Training Institute</p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          {expanded ? <FaXmark size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">

            <Nav.Item>
              <Link
                to="home"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link mx-3 fw-semibold"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="courses"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link mx-3 fw-semibold"
                onClick={handleLinkClick}
              >
                Courses
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="about"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link mx-3 fw-semibold"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                to="contact"
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link mx-3 fw-semibold"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </Nav.Item>

          </Nav>

          <Nav>
            <Nav.Item>
              <a
                href="https://forms.gle/DnmVqCU3FsKu4vVMA"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link border rounded-3 bg-danger text-white px-3 fs-10"
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
