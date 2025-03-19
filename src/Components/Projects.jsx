import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

// Import project images
import image from '../assets/SSProject/quizdsa.png';
import image1 from '../assets/SSProject/MultiGame.png';
import image2 from '../assets/SSProject/name.png';
import image3 from '../assets/SSProject/bilingsys.png';
import image4 from '../assets/SSProject/tictactoe.png';
import image5 from '../assets/SSProject/SIH.png';
import image6 from '../assets/SSProject/logithon.jpeg';

// Categorized Projects
const projectsData = {
  hackathon: [
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
      imageUrl: image5,
      projectUrl: 'https://raghavendrabaheti.github.io/SIH23.github.io/',
      repoUrl: 'https://github.com/Raghavendrabaheti/SIH23.github.io'
    },
    {
      title: 'Multi-Modal Cross-Border Route Selector',
      description: 'A logistics optimization system using Dijkstra Algorithm',
      imageUrl: image6,
      projectUrl: 'https://github.com/Raghavendrabaheti/LogiTHON-Route-Selector',
      repoUrl: 'https://github.com/Raghavendrabaheti/LogiTHON-Route-Selector'
    },
  ],
  web: [
    {
      title: 'DSA Quiz',
      description: 'A fun quiz app for Data Structures & Algorithms.',
      imageUrl: image,
      projectUrl: 'https://quizdsa.netlify.app/',
      repoUrl: 'https://github.com/raghavendrabaheti/quizdsa'
    },
    {
      title: 'Multi-Games',
      description: 'A collection of fun and interactive games.',
      imageUrl: image1,
      projectUrl: 'https://funf.netlify.app/',
      repoUrl: 'https://github.com/Raghavendrabaheti/Fun_Games'
    },
    {
      title: 'Billing System',
      description: 'An online billing system for easy transactions.',
      imageUrl: image3,
      projectUrl: 'https://billingsystemraghavendra.netlify.app/',
      repoUrl: 'https://github.com/Raghavendrabaheti/'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website.',
      imageUrl: image2,
      projectUrl: 'https://raghavendrab.netlify.app/',
      repoUrl: '#'
    },
    {
      title: 'Tic Tac Toe',
      description: 'A classic Tic Tac Toe game.',
      imageUrl: image4,
      projectUrl: 'https://funtt.netlify.app/',
      repoUrl: 'https://github.com/Raghavendrabaheti/Fun_Games'
    },
  ],
  devops: [],
};

// Section Component with Horizontal Scroll
const ProjectSection = ({ title, projects }) => (
  <div className="mb-12 w-full">
    <h3 className="text-3xl font-semibold text-blue-400 mb-6 text-center">{title}</h3>
    <div className="overflow-x-auto flex space-x-6 scrollbar-hide p-4">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="min-w-[320px] bg-gray-900 shadow-lg rounded-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
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
  </div>
);

// Main Component
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6"
    >
      <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">My Projects</h2>
      <ProjectSection title="🚀 Hackathon Projects" projects={projectsData.hackathon} />
      <ProjectSection title="🌐 Web Development Projects" projects={projectsData.web} />
      <ProjectSection title="⚙️ DevOps & Cloud Projects" projects={projectsData.devops} />
    </section>
  );
};

export default Projects;