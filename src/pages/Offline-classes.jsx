import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../components/courseCard';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const OfflineCourseData = [
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
  }
  
  
  
];

const OfflineCourseList = () => {  
   return (
    <>
    <Breadcrumb className='pt-2 mx-3'>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        
        <Breadcrumb.Item active>Offline Classes</Breadcrumb.Item>
    </Breadcrumb>
    <div className='position-relative d-flex justify-content-center align-items-center w-100'>
        <img 
            src='/assets/images/offline-class.png'
            className='w-full container-fluid online-bannerImg'
            
        />
        <h2 className="classesHeading text-center mb-4 text-black" style={{fontWeight:700,position:"absolute"}}>Offline Classes</h2>
    </div>
    <Container className="my-2 my-lg-5 my-md-3" id='courses'>
         
      {/* <h2 className="text-center mb-4" style={{fontSize:"50px",fontWeight:700}}>Online Classes</h2> */}
      <Row>
        <Col lg={10} md={11} className='mx-auto'>
            <p className='text-center pb-3 fs-4'>Industry-relevant courses designed to make you job-ready with practical, hands-on experience</p>
        </Col>
      </Row>
            
      <Row xs={1} md={2} lg={3} className="g-4">     

        {OfflineCourseData.map(course => (
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

export default OfflineCourseList;