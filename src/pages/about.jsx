import React from 'react'
import { Container, Image } from 'react-bootstrap'
const About = () => {
  return (
    <div>
      <Image
        className='w-100' 
        style={{height:"40vh"}}
        src='/assets/images/Tosca.png'
       />
      <Container className='my-5'>
        <div className='course-overview'>
          <h1 className='fs-2'>Course Overview</h1>
          <p className='my-3'>A Tricentis TOSCA zero-coding automation testing course typically follows
             a path focused on the Model-Based Test Automation (MBTA) approach, which is the core of
              its no-code functionality. The curriculum is designed to transform manual testers and non-programmers
               into proficient automation specialists.</p>
        </div>
        <div className='course-overview py-3'>
          <h1 className='fs-2'>Course Description</h1>
          <p className='my-3 '>This comprehensive, hands-on course is designed to transition professionals from manual testing
             to proficient, zero-coding test automation specialists using Tricentis TOSCA. As the leading Model-Based
              Test Automation (MBTA) tool, TOSCA allows users to create, maintain, and execute end-to-end automated tests
               for web, API, and desktop applications without writing a single line of code.</p>
        </div>
        <div className='objectives py-3'>
          <h1 className='fs-2'>Course Objectives</h1>
          <ul>
            <li>Model the Application Under Test (AUT</li>
            <li>Design and Build Automated Test Cases</li>
            <li>Implement Data-Driven Testing</li>
            <li>Handle Complex Flows</li>
            <li>Execute and Manage Tests</li>
            <li>Perform End-to-End Automation</li>          
            
          </ul>
        </div>
        <div className='prerequisites py-3'>
          <h1 className='fs-2'>Prerequisites</h1>
              <p className='my-3'>This comprehensive, hands-on course is designed to transition professionals from manual testing
             to proficient, zero-coding test automation specialists using Tricentis TOSCA. As the leading Model-Based
              Test Automation (MBTA) tool, TOSCA allows users to create, maintain, and execute end-to-end automated tests
               for web, API, and desktop applications without writing a single line of code.</p>
        </div>
      </Container>
    </div>
  )
}

export default About
