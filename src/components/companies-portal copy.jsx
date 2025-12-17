import Slider from "react-slick";

const mobileSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
};

{isMobile ? (
  <Slider {...mobileSettings}>
    {courseData.map(course => (
      <div key={course.id} className="p-2">
        <CourseCard course={course} />
      </div>
    ))}
  </Slider>
) : (
  // same desktop grid as before
)}
