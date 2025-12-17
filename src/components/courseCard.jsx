import React from "react";
import { Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRightShort, BsClock, BsLayers } from "react-icons/bs"; // Ensure react-icons is installed

const CourseCard = ({ course }) => {
  return (
    <div className="h-100 p-2">
      <Card 
        className="shadow-sm h-100 border-0 course-card transition-all" 
        style={{ 
          borderRadius: "15px", 
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease" 
        }}
      >
        {/* Optional: Add an Image or colored top border for hierarchy */}
        <div style={{ height: "8px", backgroundColor: "#5043e7" }}></div>

        <Card.Body className="d-flex flex-column p-4">
          {/* Title - Increased weight for better hierarchy */}
          <Card.Title 
            className="fw-bold mb-2" 
            style={{ color: "#333", fontSize: "22px", minHeight: "66px" }}
          >
            {course.title}
          </Card.Title>

          {/* Summary - Improved readability */}
          <Card.Subtitle 
            className="mb-3 fw-normal" 
            style={{ fontSize: "14px", color: "#6c757d", lineHeight: "1.5" }}
          >
            {course.summary}
          </Card.Subtitle>

          <Card.Text as="div" className="flex-grow-1">
            <h6 className="mt-2 fw-bold text-uppercase" style={{ fontSize: "12px", letterSpacing: "1px", color: "#5043e7" }}>
              Key Features:
            </h6>
            <ul className="list-unstyled mb-4">
              {course.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="small mb-2 d-flex align-items-start text-muted">
                  <span className="text-warning me-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card.Text>

          {/* Metadata (Duration/Stages) - Clean icons added */}
          <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-auto text-muted small">
            <div className="d-flex align-items-center">
              <BsClock className="me-1 text-primary" />
              {course.duration}
            </div>
            <div className="d-flex align-items-center">
              <BsLayers className="me-1 text-primary" />
              {course.stages}
            </div>
          </div>
        </Card.Body>

        <Card.Footer className="p-4 bg-transparent border-0 pt-0">
          <Button 
            as={Link}
            to={`/course/${course.id}`}
            variant="primary"
            className="w-100 py-2 fw-bold d-flex align-items-center justify-content-center shadow-sm"
            style={{ 
              backgroundColor: "#5043e7", 
              borderColor: "#5043e7",
              borderRadius: "10px" 
            }}
          >
            Learn More <BsArrowRightShort size={24} />
          </Button>
        </Card.Footer>
      </Card>

      {/* CSS for the hover effect - can be moved to your .css file */}
      <style>{`
        .course-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
      `}</style>
    </div>
  );
};

export default CourseCard;