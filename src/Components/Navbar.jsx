import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/Raghavendrabaheti",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/raghavendra-baheti-909109244",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:raghavendra.baheti@email.com",
      label: "Email"
    }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? "glass-effect backdrop-blur-heavy shadow-2xl shadow-black/20 border-b border-white/20" 
          : "bg-white/5 backdrop-blur-light border-b border-white/10"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container-modern">
        <div className="flex justify-between items-center py-4">
          
          {/* Enhanced Logo */}
          <motion.a
            href="#home"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 glass-effect border border-white/20 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">RB</span>
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={16} className="text-blue-400" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
              </div>
              <span className="text-white font-semibold text-xl hidden sm:block tracking-tight">
                Raghavendra
              </span>
            </div>
          </motion.a>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-all duration-400 text-sm font-medium group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-400 group-hover:w-full rounded-full"></span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-secondary transition-all duration-400 group-hover:w-full rounded-full opacity-50 blur-sm"></span>
              </motion.a>
            ))}
          </div>

          {/* Enhanced Desktop Actions */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-400 group relative overflow-hidden"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </motion.a>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <motion.a
              href="#contact"
              className="btn-primary text-sm px-6 py-3 font-medium relative overflow-hidden glass-effect border border-white/20 hover:border-white/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <span className="relative z-10">Let's Talk ✨</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            </motion.a>
          </div>

          {/* Enhanced Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 glass-effect hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-xl flex items-center justify-center text-white transition-all duration-400 relative overflow-hidden"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-white/20 backdrop-blur-heavy"
            >
              <div className="glass-effect border border-white/10 p-8 m-4 mt-0 rounded-b-3xl shadow-2xl shadow-black/20">
                {/* Navigation Links */}
                <div className="space-y-6 mb-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-all duration-400 py-3 text-xl font-medium group relative glass-effect rounded-lg px-4 border border-transparent hover:border-white/20"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 12 }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute left-0 top-0 w-0 h-full bg-gradient-primary/20 transition-all duration-400 group-hover:w-full rounded-lg -z-0"></span>
                    </motion.a>
                  ))}
                </div>
                
                {/* Enhanced Mobile Social Links */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 glass-effect hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-400"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                  
                  <motion.a
                    href="#contact"
                    className="btn-primary text-sm px-6 py-3 font-medium"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Get In Touch ✨
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;