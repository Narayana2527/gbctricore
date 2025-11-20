import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbars from "./components/navbar";


import "./App.css";
import Home from "./pages/Home";

import CourseDetails from "./components/courseDetails";

const App = () => (
  <Router>
    <Navbars />
    <Routes>
       <Route path="/" element={<Home />} />
       
      <Route path="/course/:courseId" element={<CourseDetails />} />
      
    </Routes>
  </Router>
);

export default App;
