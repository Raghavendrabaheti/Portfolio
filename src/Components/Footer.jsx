import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navItems = ["Home", "Work", "Projects", "Certificates"];

  return (
    <footer className="bg-[#0a0129] text-white py-4 text-center">
      <h3 className="text-base font-semibold text-gray-300 mb-1">Raghavendra Baheti</h3>

      {/* Navigation Links */}
      <nav className="flex justify-center space-x-4 text-gray-400 text-sm mb-2">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">
            {item}
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-3 text-gray-400 text-lg">
        <a href="https://github.com/your-github" target="_blank" className="hover:text-white">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-twitter" target="_blank" className="hover:text-white">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="hover:text-white">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/your-instagram" target="_blank" className="hover:text-white">
          <FaInstagram />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-xs mt-1">&copy; {new Date().getFullYear()} Raghavendra Baheti. All rights reserved.</p>
    </footer>
  );
};

export default Footer;