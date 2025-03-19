import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0129] bg-opacity-80 backdrop-blur-lg shadow-lg text-white py-4 px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Home", "Work", "Projects", "Certificates"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group text-gray-300 hover:text-white transition-all"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links (Desktop) */}
        <div className="hidden md:flex space-x-5">
          <a
            href="https://github.com/Raghavendrabaheti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/raghavendra-baheti-909109244"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-lg text-white py-5 flex flex-col items-center space-y-6 md:hidden"
          >
            {["Home", "Work", "Projects", "Certificates"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-300 hover:text-white transition-all"
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
                className="hover:text-blue-500 transition-all transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/raghavendra-baheti-909109244"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-all transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;