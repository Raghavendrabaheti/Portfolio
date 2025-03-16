import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0b0f] bg-opacity-70 backdrop-blur-md shadow-md text-white py-4 px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="https://github.com/Raghavendrabaheti" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <i className="bi bi-github text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/raghavendra-baheti-909109244" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <i className="bi bi-linkedin text-2xl"></i>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {['Home', 'About', 'Certificates', 'Work', 'Projects'].map((item) => (
            <li key={item}>
              <Link to={`/${item.toLowerCase()}`} className="hover:text-blue-500 transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
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
          {['Home', 'About', 'Certificates', 'Work', 'Projects'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`} 
              className="text-lg hover:text-blue-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
