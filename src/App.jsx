import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbars from "./components/navbar";


import "./App.css";
import Home from "./pages/Home";

import CourseDetails from "./components/courseDetails";


import Contact from "./components/contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbars />
    <Routes>
       <Route path="/" element={<Home />} />
       
      <Route path="/course/:courseId" element={<CourseDetails />} />
      {/* <Route path="/courseId" element={<CourseDetails />} />       */}
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
