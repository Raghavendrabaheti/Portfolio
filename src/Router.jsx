import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Certificates from './Components/Certificates';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth bg-gray-900 text-white">
      <Navbar />
      <main className="flex flex-col">
        <section id="home" className="min-h-screen"><Home /></section>
        <section id="about" className="min-h-screen"><About /></section>
        <section id="work" className="min-h-screen"><Work /></section>
        <section id="projects" className="min-h-screen"><Projects /></section>
        <section id="certificates" className="min-h-screen"><Certificates /></section>
        <section id="contact" className="min-h-screen"><Contact /></section>
        {/* <section id="footer" className="min-h-screen"><Footer /></section> */}

      </main>
    </div>
  );
};

export default App;