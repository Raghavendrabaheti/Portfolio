import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Certificates from './Components/Certificates';
import Work from './Components/Work';
import Project from './Components/Project';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;