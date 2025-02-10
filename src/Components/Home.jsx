import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-6">
      <motion.div 
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Raghav</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          A passionate Full-Stack Developer focused on building interactive and user-friendly web applications.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#work" className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;