import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import profilePic from "../assets/profile.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0b0f] bg-opacity-80 backdrop-blur-md shadow-md text-white py-4 px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social Links */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Raghavendrabaheti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/raghavendra-baheti-909109244"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {["Home", "About", "Work", "Projects", "Certificates"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-[#0b0b0f] bg-opacity-90 backdrop-blur-md shadow-lg text-white py-4 flex flex-col items-center space-y-4 md:hidden"
        >
          {["Home", "About", "Work", "Projects", "Certificates"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Mobile Social Links */}
          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com/Raghavendrabaheti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/raghavendra-baheti-909109244"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen text-white px-6 md:px-12 lg:px-20 w-full bg-[#0b0b0f] overflow-auto"
    >
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          Hi, I am <span className="text-blue-400">Raghavendra Baheti</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          A Passionate DevOps and Software Engineering enthusiast, building scalable applications with automation and seamless deployment.
        </p>
        <div className="flex space-x-4">
          <a href="your_resume_link.pdf" target="_blank" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow-lg shadow-blue-700/40">
            My Resume
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-gray-500 text-gray-300 hover:text-white hover:border-white transition">
            Let's Connect
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-84 h-84 md:w-92 md:h-92 rounded-full border-1 border-blue-500 overflow-hidden shadow-lg shadow-blue-700/40">
          <img src={profilePic} alt="Raghavendra Baheti" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Home;
