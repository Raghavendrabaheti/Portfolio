import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Sparkles, Code, Coffee } from "lucide-react";
import profilePic from "../assets/profile.jpeg";

const Home = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "3+", label: "Years Experience", icon: "⚡" },
    { number: "15+", label: "Technologies", icon: "🛠️" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-hero grid-bg bg-mesh flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced floating elements with better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            filter: 'blur(1px)',
            opacity: 0.6
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-3 h-3 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            filter: 'blur(0.5px)',
            opacity: 0.5
          }}
          animate={{
            x: [-25, 25, -25],
            y: [-15, 15, -15],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/5 w-3.5 h-3.5 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
            filter: 'blur(0.8px)',
            opacity: 0.4
          }}
          animate={{
            scale: [1, 1.6, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/5 left-1/3 w-2 h-2 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #10b981, #06b6d4)',
            filter: 'blur(0.3px)',
            opacity: 0.3
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="container-modern">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-20">
          
          {/* Left Content - Enhanced */}
          <motion.div 
            className="lg:w-1/2 space-y-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Enhanced greeting badge with better design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 glass-surface rounded-full px-8 py-4 backdrop-blur-lg border border-white/10 shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <Coffee className="w-5 h-5 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm"></div>
              </motion.div>
              <span className="text-blue-300 text-sm font-semibold tracking-wide">Available for opportunities</span>
              <motion.div 
                className="w-2.5 h-2.5 bg-emerald-400 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </motion.div>

            {/* Enhanced main heading with better typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-responsive-xl text-white leading-tight text-balance font-black">
                Hi, I'm{" "}
                <span className="gradient-text text-glow relative">
                  Raghavendra
                  <motion.div
                    className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
                <motion.span
                  animate={{ rotate: [0, 14, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  className="inline-block origin-bottom-right ml-3 text-4xl"
                >
                  👋
                </motion.span>
              </h1>
              
              <div className="space-y-4">
                <div className="text-responsive-md text-gray-200 font-light">
                  <span className="gradient-text-tertiary font-semibold">DevOps Engineer</span> 
                  <span className="text-gray-400 mx-2">×</span>
                  <span className="gradient-text-secondary font-semibold">Full Stack Developer</span>
                </div>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed text-pretty font-light">
                  I craft <span className="text-white font-medium">scalable digital experiences</span> with clean code, 
                  robust architecture, and seamless deployment pipelines that 
                  <span className="gradient-text-tertiary font-medium"> transform ideas into reality</span>.
                </p>
              </div>
            </motion.div>

            {/* Enhanced stats with improved styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center lg:text-left group hover-lift"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text text-glow mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium tracking-wide group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a 
                href="#projects" 
                className="btn-primary inline-flex items-center gap-3 justify-center text-base shimmer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Code size={20} />
                View My Work
                <motion.div
                  className="w-2 h-2 bg-white/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
              
              <motion.a 
                href="/src/assets/Raghavendraa.pdf" 
                target="_blank"
                className="btn-secondary inline-flex items-center gap-3 justify-center text-base"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Enhanced quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center gap-8 text-sm text-gray-400"
            >
              <span className="font-medium">Quick links:</span>
              <div className="flex gap-6">
                <a href="#about" className="hover:text-blue-400 transition-all duration-300 hover-lift relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
                <a href="#work" className="hover:text-purple-400 transition-all duration-300 hover-lift relative group">
                  Work
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
                <a href="#contact" className="hover:text-cyan-400 transition-all duration-300 hover-lift relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Profile */}
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Enhanced floating decorations */}
              <motion.div
                className="absolute -top-12 -left-12 w-20 h-20 border-2 border-gradient-primary rounded-3xl backdrop-blur-sm glass-effect"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm"
                animate={{ 
                  rotate: [0, -360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main profile container with enhanced effects */}
              <motion.div 
                className="relative w-80 h-80 md:w-96 md:h-96 group"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Multi-layered gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-pink-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
                <div className="absolute inset-2 bg-gradient-to-tr from-cyan-500/10 to-yellow-500/10 rounded-3xl blur-2xl"></div>
                
                {/* Profile image container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl group-hover:border-white/30 transition-all duration-500">
                  <img 
                    src={profilePic} 
                    alt="Raghavendra Baheti" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Enhanced overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/10 group-hover:from-blue-900/10 transition-all duration-500"></div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-3xl border border-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Enhanced floating tech icons */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-xl hover-scale"
                  animate={{ 
                    y: [-8, 8, -8],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  <Code size={24} />
                </motion.div>
                
                <motion.div
                  className="absolute -top-6 -right-10 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-xl hover-scale"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ duration: 7, repeat: Infinity }}
                  whileHover={{ scale: 1.2, y: -5 }}
                >
                  <Sparkles size={18} />
                </motion.div>
                
                <motion.div
                  className="absolute -top-4 -left-8 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white shadow-lg hover-scale"
                  animate={{ 
                    x: [-5, 5, -5],
                    y: [-3, 3, -3],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                  whileHover={{ scale: 1.15 }}
                >
                  ⚡
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-all duration-300 group glass-effect rounded-full p-4 backdrop-blur-light border border-white/10 hover:border-white/20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium tracking-wide">
              Discover more
            </span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <ArrowDown size={18} />
            </motion.div>
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2 opacity-60"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
