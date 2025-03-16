import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative flex flex-col items-start justify-center min-h-screen text-white px-6 md:px-12 lg:px-20 w-full bg-[#0b0b0f] overflow-hidden"
    >
      {/* Subtle Animated Background with Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_80%)]"></div>
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      
      {/* Animated Content Container */}
      <motion.div 
        className="relative text-left max-w-3xl p-6 md:p-10 rounded-lg border border-gray-800 bg-[#12121a] backdrop-blur-lg shadow-2xl shadow-black/50"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Dynamic Typography */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Raghavendra Baheti
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8">
          A JavaScript & DevOps enthusiast, crafting efficient and scalable applications with a passion for technology.
        </p>

        {/* Sleek Buttons with Hover Effects */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
          <a href="Work" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow-lg shadow-blue-700/40 text-center">
            Explore My Work
          </a>
          <a href="Contact" className="px-6 py-3 rounded-lg border border-gray-500 text-gray-300 hover:text-white hover:border-white transition text-center">
            Let's Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
