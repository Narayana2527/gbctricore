import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from "react-scroll";

import Navbars from "./components/navbar";
import GBCCarousel from "./components/gbccarousel";
import CourseList from "./components/courseLists";
import Testimonials from "./components/testimonial";
import Contact from "./components/contact";

import "./App.css";

const App = () => (
  <Router>
    <Navbars />

    {/* Each scrollable section wrapped with Element and unique name */}
    <Element name="home">
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

  </Router>
);

export default App;
