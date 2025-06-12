import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Certificates from './Components/Certificates';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="min-h-screen overflow-y-auto scroll-smooth bg-gradient-main text-white">
      <Navbar />
      <main className="pt-16">
        <Home />
        <About />
        <Work />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
};

export default App;