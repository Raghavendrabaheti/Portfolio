import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp, MapPin, Coffee, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Raghavendrabaheti",
      color: "hover:text-gray-300",
      description: "Code & Projects"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/raghavendra-baheti-909109244",
      color: "hover:text-blue-400",
      description: "Professional Network"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:raghavendra.baheti@email.com",
      color: "hover:text-purple-400",
      description: "Get In Touch"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-section backdrop-blur-heavy border-t border-white/10">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-bg h-full bg-mesh"></div>
      </div>

      <div className="container-modern py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">RB</span>
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={12} className="text-blue-400" />
                </motion.div>
              </div>
              <div>
                <div className="text-xl font-bold gradient-text">
                  Raghavendra Baheti
                </div>
                <div className="text-gray-400 text-sm">DevOps Engineer & Full Stack Developer</div>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              Passionate about crafting scalable digital experiences with clean code, 
              robust architecture, and seamless deployment pipelines.
            </p>

            {/* Location & Status */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>Udaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee size={14} className="text-green-400" />
                <span className="text-green-400 text-sm">Available for opportunities</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm group flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg">Let's Connect</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${social.color} hover:border-white/20 hover:bg-white/10 group`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <social.icon size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{social.name}</div>
                    <div className="text-xs text-gray-500">{social.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <motion.div
              className="flex items-center gap-3 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span>© {currentYear}</span>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={14} fill="currentColor" className="text-red-400" />
              </motion.div>
              <span>by Raghavendra Baheti</span>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="text-gray-400 text-sm flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span>Built with</span>
              <div className="flex items-center gap-1">
                <span className="text-blue-400">React</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <span className="text-cyan-400">Tailwind</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <span className="text-purple-400">Framer Motion</span>
              </div>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Fun Message */}
        <motion.div
          className="text-center mt-8 pt-6 border-t border-white/5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
            <span>🚀</span>
            <span>Always learning, always building, always improving</span>
            <span>✨</span>
          </p>
        </motion.div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;