import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Component now accepts a 'course' object as a prop
const CourseCard = ({course}) => {
  
  return (
    <div className="container p-3">
      <Card className="py-3 shadow-lg h-100 border border-red-500 outline-4 outline-red-500" style={{}}>
        
        <Card.Body className="mb-0">
          <Card.Title className="" style={{color:"#ffc400",fontSize:"24px"}}>{course.title}</Card.Title>
          <Card.Title className="" style={{fontSize:"16px", color:"#a3a3a3"}} >{course.summary}</Card.Title>
          <Card.Text className="course-features">
            
            <h6 className="mt-3">Key Features:</h6>
            <ul>
                {course.features.map((feature, index) => (
                    <li key={index} className="small ">{feature}</li>
                ))}
            </ul>
          </Card.Text>
          <div className="d-flex">
            <div className="flex-grow-1">{course.duration}</div>
            <div className="">{course.stages}</div>
          </div>
        </Card.Body>
        <Card.Footer className="text-center border-0 " style={{ backgroundColor: "white" }}>
          
          <Button 
             variant="none"
            className="w-100 outline-2 border rounded-xl" 
            
          >
            Learn More
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseCard;