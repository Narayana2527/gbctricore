import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from './courseCard'


const courseData = [
  {
    id: 1,
    title: "Manual + Automation Testing",
    summary:"Master both manual and automated testing methodologies with hands-on experience in industry-standard tools.",
    price: 15999,   
    duration:"3-4 months", 
    stages:"Beginner - Advanved",
    features: [
      "MERN/MEAN Stack Mastery",
      "Live Project Building",
      "Portfolio Review",
      "24/7 Mentor Support"
    ]
  },
  {
    id: 2,
    title: "Azure DevOps",
    summary:"Learn end-to-end DevOps practices using Microsoft Azure cloud platform and modern CI/CD pipelines.",
    price: 12499, 
    duration:"3-4 months", 
    stages:"Beginner - Advanved",   
    features: [
      "Pandas, NumPy, Scikit-learn",
      "Machine Learning Algorithms",
      "Data Visualization (Matplotlib)",
      "Capstone Project"
    ]
  },
  {
    id: 3,
    title: ".NET Development",
    summary:"Build enterprise applications using .NET framework with C# programming and modern development practices.",
    price: 18999, 
    duration:"3-4 months", 
    stages:"Beginner - Advanved",   
    features: [
      "Cert Prep: AWS Solutions Architect",
      "Serverless Computing",
      "Hands-on Lab Practice",
      "DevOps Integration"
    ]
  },
  {
    id: 4,
    title: "TOSCA Testing",
    summary:"Become proficient in Tricentis TOSCA for model-based test automation and continuous testing.",
    price: 13500, 
    duration:"3-4 months", 
    stages:"Beginner - Advanved",   
    features: [
      "Penetration Testing Basics",
      "Network Security Protocols",
      "Threat Analysis",
      "Forensics and Incident Response"
    ]
  },
  {
    id: 5,
    title: "Data Analyst",
    summary:"Transform data into insights using modern analytics tools and statistical methods for business decisions.",
    price: 9999,
    duration:"3-4 months", 
    stages:"Beginner - Advanved",    
    features: [
      "State Management with Redux Toolkit",
      "Hooks and Functional Components",
      "Advanced Component Patterns",
      "Performance Optimization"
    ]
  },
  {
    id: 6,
    title: "IBM Mainframes",
    summary:"Master mainframe technologies including COBOL, JCL, and DB2 for enterprise system development.",
    price: 8499,
    duration:"3-4 months", 
    stages:"Beginner - Advanved",    
    features: [
      "Figma and Sketch Tools",
      "Design Thinking Principles",
      "Wireframing and Prototyping",
      "Usability Testing"
    ]
  }
];

const CourseList = () => {  
  return (
    <Container className="my-5" id='courses'>
      <h2 className="text-center mb-4" style={{fontSize:"50px",fontWeight:700}}>Our Training Programs</h2>
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