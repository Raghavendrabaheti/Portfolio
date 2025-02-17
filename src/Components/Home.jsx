import { motion } from 'framer-motion';
import img from '../assets/img.webp';

const Home = () => {
  return (
    <section 
      id="home" 
      className="flex flex-col items-start justify-center h-screen text-white px-6"
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.div 
        className="text-left max-w-3xl bg-opacity-50 p-8 rounded-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl text-[#beb6d2] font-bold mb-4">
          Hi, I'm <span className="text-[#fa1e4e]">Raghavendra Baheti</span>
        </h1>
        <p className="text-lg md:text-xl text-[#beb6d2] mb-6">
          A passionate Java Developer focused on building interactive and user-friendly web applications.
        </p>
        <div className="flex gap-4">
          <a href="#work" className="px-6 py-3 rounded-lg bg-[#fa1e4e] hover:bg-[#bf173c] text-black transition">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-[#fa1e4e] text-[#beb6d2] hover:bg-[#fa1e4e] hover:text-white transition">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;