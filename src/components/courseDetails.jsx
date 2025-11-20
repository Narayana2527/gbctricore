import React from 'react'; 
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";


const CourseDetailsData ={
    "Tosca":{
        "banner":"/assets/images/Tosca.png",
        "overview":"Tricentis Tosca is a model-based, AI-powered automation tool revolutionizing continuous testing. This course teaches zero-coding test design, execution, and risk analysis for enterprise applications.",
        "description":"Go hands-on with Tosca Commander, learn module creation, test case design, test data management, and integration with CI/CD pipelines. This is an advanced course focused on achieving high test coverage with minimal scripting.",
        "prerequisites":"Basic understanding of software testing concepts and business processes is recommended.",
        "objectives":[
            "Master model-based test automation (MBTA).",
            "Design and execute efficient test cases using Tosca Commander.",
            "Implement risk-based testing methodologies.",
            "Automate testing for web, desktop, and API applications.",
            "Utilize Test Data Management (TDM) and recovery scenarios.",
            "Prepare for Tricentis Tosca Certification."
        ],
        "reviews":"This course provided the practical skills needed to deploy Tosca in a real-world project. Highly valuable for quality assurance professionals!"
    },
    "Manual-Automation-Testing":{
        "banner":"/assets/images/Tosca.png",
        "overview":"A comprehensive program covering the fundamentals of manual QA and modern automated testing using industry-leading open-source tools.",
        "description":"The manual section covers test design techniques, SDLC/STLC, and defect management. The automation track focuses on Java and Selenium WebDriver with TestNG for building scalable test frameworks.",
        "prerequisites":"No prior coding experience is necessary. A willingness to learn programming basics (Java) is key.",
        "objectives":[
            "Develop robust manual test plans and test cases.",
            "Master defect tracking and test reporting.",
            "Write and execute automated scripts using Java and Selenium WebDriver.",
            "Implement advanced frameworks like TestNG and Cucumber.",
            "Understand Git and CI/CD integration (Jenkins).",
            "Gain proficiency in both functional and non-functional testing."
        ],
        "reviews":"The dual focus on manual and automation made me job-ready immediately. The instructors were excellent!"
    },
    "IBM-Mainframes":{
        "banner":"/assets/images/Tosca.png",
        "overview":"Learn to develop and maintain mission-critical applications running on IBM Z mainframes, which form the backbone of global finance and commerce.",
        "description":"This intensive course covers core Mainframe technologies including COBOL, JCL (Job Control Language), DB2 database, and CICS for transaction processing. Gain proficiency in TSO/ISPF for system interaction.",
        "prerequisites":"Basic understanding of programming logic and data processing concepts.",
        "objectives":[
            "Master COBOL programming fundamentals and advanced topics.",
            "Write and execute JCL scripts for batch processing.",
            "Design and query data using DB2 on the Mainframe.",
            "Understand the CICS environment for online transaction management.",
            "Utilize utilities like VSAM and acquire TSO/ISPF operational skills."
        ],
        "reviews":"An essential course for anyone seeking a stable career in legacy system maintenance and development. In-depth and highly technical."
    },
    ".Net-Development":{
        "banner":"/assets/images/Tosca.png",
        "overview":"Build robust, scalable enterprise applications using the Microsoft .NET framework, C#, and ASP.NET Core.",
        "description":"This program takes you from C# basics to building full-stack applications. It covers front-end integration (like React or Angular basics), RESTful API development using ASP.NET Core Web API, and database interaction via Entity Framework.",
        "prerequisites":"Familiarity with object-oriented programming (OOP) concepts is beneficial.",
        "objectives":[
            "Master C# syntax and Object-Oriented Programming (OOP) principles.",
            "Develop RESTful services using ASP.NET Core Web API.",
            "Implement database interactions with Entity Framework Core.",
            "Build secure, modern web applications with Razor Pages/MVC.",
            "Understand cloud deployment strategies using Azure/AWS."
        ],
        "reviews":"The focus on ASP.NET Core and modern practices makes this program highly relevant to the current job market."
    },
    "Data-Analyst":{
        "banner":"/assets/images/Tosca.png",
        "overview":"Transform raw data into actionable business insights using Python, SQL, and powerful visualization tools.",
        "description":"This course teaches you the full data analysis pipeline: data extraction (SQL), cleaning and manipulation (Python/Pandas), statistical analysis, and compelling visualization (Tableau/Power BI). You will complete several real-world projects.",
        "prerequisites":"Comfort with numbers and basic spreadsheet software (Excel).",
        "objectives":[
            "Write complex queries using SQL for data extraction and aggregation.",
            "Perform data cleaning and transformation using Python (Pandas/NumPy).",
            "Apply statistical methods for data-driven decision making.",
            "Create interactive dashboards and visualizations with Tableau/Power BI.",
            "Build predictive models using introductory machine learning concepts."
        ],
        "reviews":"The best data analyst course! It balanced theory with practical tool usage perfectly."
    },
    "Full-Stack-Web-Technologies":{
        "banner":"/assets/images/Tosca.png",
        "overview":"Learn the complete MERN (MongoDB, Express, React, Node.js) stack to become a proficient full-stack developer capable of building modern web applications end-to-end.",
        "description":"Starting with JavaScript fundamentals, the course progresses to React for front-end development, Node.js and Express for the server-side API, and MongoDB for flexible data storage. Includes authentication and deployment practices.",
        "prerequisites":"Basic HTML and CSS knowledge is required.",
        "objectives":[
            "Build responsive user interfaces using React and modern hooks.",
            "Develop robust RESTful APIs with Node.js and Express.",
            "Manage non-relational data using MongoDB.",
            "Implement user authentication (JWT).",
            "Deploy full-stack applications to cloud platforms (e.g., Heroku or Vercel)."
        ],
        "reviews":"A fast-paced and comprehensive course that successfully takes you from zero to full-stack hero!"
    }
}



const CourseDetails =()=>{
    const {courseId} = useParams();
    const course = CourseDetailsData[courseId]
    
    if (!course) {
        return (
            <Container className="py-5">
                <h2>Course Not Found</h2>
                <p>The course ID **`{courseId}`** does not match any available course. Please navigate back to the home page or check the URL.</p>
            </Container>
        );
    }
    
    const formattedTitle = courseId.toUpperCase().replace(/-/g,' ');
    const bannerStyle = { height: "35vh", objectFit: "cover" };
    const ACCENT_COLOR = "#ffc400";
    const PRIMARY_COLOR = "#5043e7";
    const primaryTextStyle = { color: ACCENT_COLOR };
  
    return(
        <div className="my-0 my-md-2 my-lg-5">             
            <div className=''>
                 
                <div className='container-fluid'>
                    <img
                    src={course.banner}
                    className='w-100 img-fluid banner-course'
                    style={bannerStyle}
                    alt={`Banner for ${formattedTitle}`}
                    />
                </div> 
                <h1
                className='mt-4 text-center  display-5 mx-auto'
                style={{ ...primaryTextStyle, maxWidth: '900px' }}
                >
                {formattedTitle}
                </h1>
                <hr className='align-items-center mx-auto text-center border-4'
                style={{ ...primaryTextStyle, width: '150px', borderColor: PRIMARY_COLOR }}
                 />
                <div className='container my-0 my-md-3 my-lg-5'>  
                     <div className='row main-div py-0 py-lg-5 py-md-3'>
                        <div className='col-md-7 border-styling-1 card-1 my-0 my-lg-5 my-md-3'>
                            {/* Course Overview */}
                            <div className='card-11 my-0 my-md-2 my-lg-4 px-lg-5 px-md-2 px-0 fadeInLeft animated'>
                                <div className="course-overview my-5">
                                    <h2>Course Overview</h2>
                                    <p>{course.overview}</p>
                                </div>
                                
                                {/* Course Description */}
                                <div className="course-description my-5">
                                    <h2>Course Description</h2>
                                    <p>{course.description}</p>
                                </div>
                                
                                {/* Course Prerequisites */}
                                <div className="course-prerequisites my-5">
                                    <h2>Course Prerequisites</h2>
                                    <p>{course.prerequisites}</p>
                                </div>
                            </div>                           
                            <div className='card-12 px-0 px-md-2 px-lg-5'>
                                {/* Course Objectives */}
                                <div className="course-objectives my-5">
                                    <h2>Course Objectives</h2>
                                    <ul>
                                        
                                        {course.objectives
                                            .filter(obj => obj.trim() !== "") 
                                            .map((obj, index) => (
                                                <li key={index}>{obj}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                
                                {/* Course Reviews */}
                                <div className="course-reviews my-0 my-md-3 my-lg-5">
                                    <h2>Reviews</h2>
                                    <p>{course.reviews}</p>
                                </div>
                            </div>                            
                        </div>
                        <div className='col-md-5 card-2 rotateIn animated'>
                            <img
                            src='/assets/images/course-inner-img.png'
                            className='w-100 img-look '
                            style={{height:"100vh"}}
                            alt='image inner banner'
                            />
                        </div> 
                    </div>                
                
                    
                </div>           
                
            </div>
        </div>
    )
}

export default CourseDetails;