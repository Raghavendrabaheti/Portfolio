import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import image5 from '../assets/SSProject/SIH.png';
import image6 from '../assets/SSProject/logithon.jpeg';
import image7 from '../assets/SSProject/sih24.jpeg';

const hackathonProjects = [
  {
    title: 'Multi-Modal Cross-Border Route Selector',
    description: 'A logistics optimization system using Dijkstra Algorithm',
    imageUrl: image6,
    projectUrl: 'https://github.com/Tech-Transit',
    repoUrl: 'https://github.com/Tech-Transit'
  },
  {
    title: 'SIH23',
    description: 'Smart India Hackathon 2023 project.',
    imageUrl: image5,
    projectUrl: 'https://raghavendrabaheti.github.io/SIH23.github.io/',
    repoUrl: 'https://github.com/Raghavendrabaheti/SIH23.github.io'
  },
  {
    title: 'SIH24',
    description: 'Smart India Hackathon 2024 project.',
    imageUrl: image7,
    projectUrl: 'https://raghavendrabaheti.github.io/SIH23.github.io/',
    repoUrl: 'https://github.com/Raghavendrabaheti/SIH-2024'
  }
];

const Work = () => {
  return (
    <section id="work" className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#0a0129] text-white">
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        My Work
      </motion.h2>
      
      <motion.p
        className="text-lg text-gray-400 max-w-3xl text-center mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        Here are some hackathon projects I’ve worked on, demonstrating my expertise in software development and problem-solving.
      </motion.p>
      
      {/* Centered Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {hackathonProjects.map((project, index) => (
          <motion.div
            key={index}
            className="w-80 bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Project</a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;