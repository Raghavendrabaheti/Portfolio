import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <section
      id="work"
      className="h-screen flex flex-col items-center justify-center px-6 bg-black text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Work
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 max-w-3xl text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Here are some projects I’ve worked on, including web apps, UI/UX designs, and open-source contributions.
      </motion.p>
    </section>
  );
};

export default Work;