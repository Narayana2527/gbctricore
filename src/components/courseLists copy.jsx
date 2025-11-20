import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from './courseCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const courseData = [
  {
    id: "Tosca",
    title: "TOSCA Automation Testing(Zero Coding)",
    summary:"Become proficient in Tricentis TOSCA for model-based test automation and continuous testing.",
    price: 13500, 
    duration:"2-3 months", 
    stages:"Intermediate",   
    features: [
      "Model-Based Testing",
      "Risk-Based Testing",
      "API Testing",
      "Mobile Testing"
    ]
  },
  {
    id: "Manual-Automation-Testing",
    title: "Manual + Automation Testing",
    summary:"Master both manual and automated testing methodologies with hands-on experience in industry-standard tools.",
    price: 15999,   
    duration:"3-4 months", 
    stages:"Beginner - Advanved",
    features: [
      "Selenium WebDriver",
      "TestNG Framework",
      "Manual Testing Concepts",
      "Test Automation Strategies"
    ]
  },
  {
    id: "IBM-Mainframes",
    title: "IBM Mainframes",
    summary:"Master mainframe technologies including COBOL, JCL, and DB2 for enterprise system development.",
    price: 8499,
    duration:"4-6 months", 
    stages:"Intermediate - Advanved",    
    features: [
      "COBOL Programming",
      "JCL Scripting",
      "DB2 Database",
      "CICS Transaction Processing"
    ]
  },
  
  {
    id: ".Net-Development",
    title: ".NET Development",
    summary:"Build enterprise applications using .NET framework with C# programming and modern development practices.",
    price: 18999, 
    duration:"4-5 months", 
    stages:"Beginner - Advanved",   
    features: [
      "C# Programming",
      "ASP.NET Core",
      "Entity Framework",
      "RESTful APIs"
    ]
  },
  
  {
    id: "Data-Analyst",
    title: "Data Analyst",
    summary:"Transform data into insights using modern analytics tools and statistical methods for business decisions.",
    price: 9999,
    duration:"3-4 months", 
    stages:"Beginner - Intermediate",    
    features: [
      "Python/R Programming",
      "SQL Databases",
      "Data Visualization",
      "Statistical Analysis"
    ]
  },
  {
    id: "Full-Stack-Web-Technologies",
    title: "Full Stack Web Technologies (MERN)", // Added MERN for clarity
    summary:"Learn the complete **MERN (MongoDB, Express, React, Node.js)** stack to build modern, end-to-end web applications.", // Corrected summary
    price: 12499, 
    duration:"4-6 months", // Adjusted duration to be more realistic for full-stack
    stages:"Beginner - Advanced",   
    features: [
      "React for Front-end",
      "Node.js & Express APIs",
      "MongoDB Database",
      "Authentication (JWT) & Deployment"
    ]
  }
  
];

const CourseList = () => {  
  
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  useEffect(() => {
    // mark mounted
    setMounted(true);

    const check = () => setIsMobile(window.innerWidth <= 768);
    // set initial value (only runs in browser)
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  
  if (!mounted) return null;
  return (
    <Container className="my-5" id='courses'>
      <h2 className="text-center mb-4" style={{fontSize:"50px",fontWeight:700}}>Our Training Programs</h2>
      <Row>
        <Col lg={10} md={11} className='mx-auto'>
            <p className='text-center pb-3 fs-4'>Industry-relevant courses designed to make you job-ready with practical, hands-on experience</p>
        </Col>
      </Row>

      {isMobile ? (
        <Slider {...mobileSettings}>
          {courseData.map(course => (
            <div key={course.id} className="p-2">
              <CourseCard course={course} />
            </div>
          ))}
        </Slider>
      ) : (
        /* DESKTOP VIEW - 3 Cards Per Row */
        <Row xs={1} md={2} lg={3} className="g-4">     

        {courseData.map(course => (
          <Col key={course.id} className="d-flex">            
            <CourseCard 
                course={course}                  
            />
          </Col>
        ))}
        </Row>
      )}

      
    </Container>
  );
};

export default CourseList;