// pages/Home.js (Corrected)
import { Element } from "react-scroll";
import GBCCarousel from "../components/gbccarousel";
import CourseList from "../components/courseLists"; 
import Testimonials from "../components/testimonial"; 
import Contact from "../components/contact"; 

const Home = () => (
  <div> 
    
    <Element name="/">
      <GBCCarousel />
    </Element>

    <Element name="courses">
      <CourseList />
    </Element>

    <Element name="about">
      <Testimonials />
    </Element>

    <Element name="contact">
      <Contact />
    </Element>
  </div>
);

export default Home;