import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../components/courseCard';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const OnlineCourseData = [
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
    id: "Selenium + Java Automation",
    title: "Selenium + Java Automation",
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
    id: "OKTA (IAM)",
    title: "OKTA (IAM)",
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
  
  
  
];

const OnlineCourseList = () => {  
  return (
    <>
    <Breadcrumb className='pt-2 mx-3'>
        <Breadcrumb.Item href="/" className='decoration-none'>Home</Breadcrumb.Item>
        
        <Breadcrumb.Item active>Online Classes</Breadcrumb.Item>
    </Breadcrumb> 
    <div className='position-relative d-flex justify-content-center align-items-center w-100'>
        <img 
            src='/assets/images/online-class-banner.jpg'
            className='w-full container-fluid online-bannerImg'
            
        />
        <h2 className="classesHeading text-center mb-4 text-white" style={{fontWeight:700,position:"absolute"}}>Online Classes</h2>
    </div>
    <Container className="my-2 my-lg-5 my-md-3" id='courses'>
        
      {/* <h2 className="text-center mb-4" style={{fontSize:"20px",fontWeight:700}}>Online Classes</h2> */}
      <Row>
        <Col lg={10} md={11} className='mx-auto'>
            <p className='text-center pb-3 fs-4'>Industry-relevant courses designed to make you job-ready with practical, hands-on experience</p>
        </Col>
      </Row>
            
      <Row xs={1} md={2} lg={3} className="g-4">     

        {OnlineCourseData.map(course => (
          <Col key={course.id} className="d-flex">            
            <CourseCard 
                course={course}                  
            />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default OnlineCourseList;