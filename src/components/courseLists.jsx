import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from './courseCard'


const courseData = [
  {
    id: "Tosca",
    title: "TOSCA Automation Testing(Zero Coding)",
    summary:"Become proficient in Tricentis TOSCA for model-based test automation and continuous testing.",
    price: 13500, 
    duration:"45 days", 
    // stages:"Intermediate",   
    features: [
      "No Coding Required",
      "High Demand Tool",
      "Working Professionals Friendly",
      "Job-Oriented Training",
      "High Salary Testing Tool"
    ]
  },
  {
    id: "selenium",
    title: "Selenium With Java Automation",
    summary:"Master both manual and automated testing methodologies with hands-on experience in industry-standard tools.",
    price: 15999,   
    duration:"2 months", 
    // stages:"Beginner - Advanved",
    features: [
      "No Coding Fear – Step by step guidance",
      "High demand skill in IT industry",
      "Increase chances of automation testing jobs",
      "Work confidently on Selenium + Java projects",
      "Transition to high-paying QA Automation roles"
    ]
  },
  {
    id: "IBM-Mainframes",
    title: "IBM Mainframes",
    summary:"Master mainframe technologies including COBOL, JCL, and DB2 for enterprise system development.",
    price: 8499,
    duration:"2 months", 
    // stages:"Intermediate - Advanved",    
    features: [
      "Step into a High-Paying Career",
      "High-Demand Skill ",
      "Mainframe experts are always needed in IT",
      "Learn Legacy Systems"
    ]
  },
  
  {
    id: "okta",
    title: "OKTA IAM (Low Coding)",
    summary:"Build enterprise applications using .NET framework with C# programming and modern development practices.",
    price: 18999, 
    duration:"2 months", 
    // stages:"Beginner - Advanved",   
    features: [
      "Low Coding",
      "High - Demand Skill",
      "Seamless SSO & MFA Integration",
      "Automated User Lifecycle Management",
      "Enterprise-Grade Security"
    ]
  }     
];

const CourseList = () => {  
  return (
    <Container className="my-5" id='courses'>
      <h2 className="text-center mb-4 display-4 display-md-3 display-lg-2" style={{fontWeight:700}}>Our Training Programs</h2>
      <Row>
        <Col lg={10} md={11} className='mx-auto'>
            <p className='text-center pb-3 fs-4'>Industry-relevant courses designed to make you job-ready with practical, hands-on experience</p>
        </Col>
      </Row>
            
      <Row xs={1} md={2} lg={3} className="g-4">     

        {courseData.map(course => (
          <Col key={course.id} className="d-flex">            
            <CourseCard 
                course={course}                  
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseList;