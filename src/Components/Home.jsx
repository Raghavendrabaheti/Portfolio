import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative flex flex-col items-start justify-center h-screen text-white px-6 w-full m-0 bg-[#0b0b0f]"
    >
      {/* Animated Background (Minimal Glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_80%)]"></div>

      {/* Animated Text Container */}
      <motion.div 
        className="relative text-left max-w-3xl p-8 rounded-lg border border-gray-800 bg-[#111118] backdrop-blur-md shadow-lg shadow-black/40"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Elegant Typography */}
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
            Raghavendra Baheti
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-6">
          A passionate Java Developer focused on crafting smooth and efficient applications.
        </p>

        {/* Minimalist Buttons with Subtle Glow */}
        <div className="flex gap-4">
          <a href="Work" className="px-6 py-3 rounded-md bg-gray-900 hover:bg-gray-800 text-white transition border border-gray-700 shadow-sm shadow-gray-700/50">
            View My Work
          </a>
          <a href="Contact" className="px-6 py-3 rounded-md border border-gray-600 text-gray-400 hover:text-white hover:border-white transition">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;