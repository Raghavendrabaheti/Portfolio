import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Play, Filter, Grid3X3, List } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import project images
import quizImg from '../assets/SSProject/quizdsa.png';
import multiGameImg from '../assets/SSProject/MultiGame.png';
import tictactoeImg from '../assets/SSProject/tictactoe.png';

// Projects data
const projects = [
  {
    id: 1,
    title: 'DSA Quiz Application',
    shortDescription: 'Interactive learning platform for data structures and algorithms',
    description: 'A comprehensive web application built with React that helps users test and improve their knowledge of data structures and algorithms through interactive quizzes with multiple difficulty levels.',
    image: quizImg,
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    githubUrl: 'https://github.com/Raghavendrabaheti/React-Quiz',
    liveUrl: 'https://quizdsa.netlify.app/',
    category: 'Web App',
    featured: true,
    status: 'Live'
  },
  {
    id: 2,
    title: 'Fun Games Collection',
    shortDescription: 'Multi-game platform with various interactive games',
    description: 'A collection of interactive and enjoyable web-based games built with React. Features multiple casual games including Tic Tac Toe, quizzes, and other engaging challenges for entertainment.',
    image: multiGameImg,
    technologies: ['React', 'JavaScript', 'CSS3', 'Game Logic'],
    githubUrl: 'https://github.com/raghavendrabaheti/Fun_Games',
    liveUrl: 'https://funf.netlify.app/',
    category: 'Game',
    featured: true,
    status: 'Live'
  },
  {
    id: 3,
    title: 'Tic Tac Toe Game',
    shortDescription: 'Classic two-player strategy game',
    description: 'A simple, interactive web application built with React featuring the classic Tic Tac Toe game. Players can challenge each other in turns, with automatic winner detection and draw scenarios.',
    image: tictactoeImg,
    technologies: ['React', 'JavaScript', 'CSS3', 'Game Logic'],
    githubUrl: 'https://github.com/raghavendrabaheti/Fun_Games',
    liveUrl: 'https://funtt.netlify.app/',
    category: 'Game',
    featured: false,
    status: 'Live'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile/tablet size
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className={`card-modern group overflow-hidden interactive-card ${
        viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
      }`}
    >
      {/* Project Image */}
      <div className={`relative overflow-hidden ${
        viewMode === 'list' ? 'md:w-1/3' : 'h-48'
      }`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-600"></div>
        
        {/* Enhanced Featured Badge */}
        {project.featured && (
          <motion.div 
            className="absolute top-4 left-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="badge badge-primary backdrop-blur-light">
              ⭐ Featured
            </span>
          </motion.div>
        )}

        {/* Enhanced Status Badge */}
        <motion.div 
          className="absolute top-4 right-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="badge badge-success backdrop-blur-light">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            {project.status}
          </span>
        </motion.div>

        {/* Enhanced Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-600">
          <div className="flex gap-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 glass-effect rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group/btn"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              data-tooltip="View Live"
            >
              <Play size={20} className="group-hover/btn:scale-110 transition-transform" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 glass-effect rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group/btn"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              data-tooltip="View Code"
            >
              <Github size={20} className="group-hover/btn:scale-110 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3 md:flex md:flex-col md:justify-between' : ''}`}>
        <div>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            <span className="bg-blue-500/10 text-blue-300 px-2 py-1 rounded-md text-xs font-medium border border-blue-500/20">
              {project.category}
            </span>
          </div>
          
          <p className="text-gray-400 mb-4 leading-relaxed text-sm">
            {viewMode === 'grid' ? project.shortDescription : project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded-md text-xs hover:bg-white/10 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-center text-sm py-2 px-4 rounded-lg inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink size={16} />
            Live Demo
          </motion.a>
          
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center text-sm py-2 px-4 rounded-lg inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={16} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section 
      id="projects" 
      className="relative min-h-screen bg-gradient-main grid-bg section-padding"
    >
      {/* Minimal background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-cyan-400 rounded-full opacity-50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-modern relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 backdrop-blur-sm mb-6"
          >
            <Grid3X3 className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Portfolio showcase</span>
          </motion.div>

          <h2 className="text-responsive-lg text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Explore my latest work showcasing modern web development practices and innovative solutions
          </p>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </motion.div>

        {/* Filter and View Controls */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Category Filter */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
            <Filter className="w-4 h-4 text-gray-400 ml-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <List size={16} />
            </button>
          </div>
        </motion.div>
        
        {/* Projects Grid/List/Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + viewMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobile ? (
              // Mobile/Tablet Carousel
              <div className="projects-swiper-container">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                  spaceBetween={20}
                  slidesPerView={1}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    bulletClass: 'project-bullet',
                    bulletActiveClass: 'project-bullet-active',
                  }}
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 15,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1.2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1.5,
                      spaceBetween: 30,
                    },
                  }}
                  className="projects-swiper"
                >
                  {filteredProjects.map((project, index) => (
                    <SwiperSlide key={project.id}>
                      <ProjectCard project={project} index={index} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              // Desktop Grid/List
              <div
                className={`${
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                    : 'space-y-8'
                }`}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Github className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore More on GitHub
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Check out my GitHub profile for more projects, contributions, and ongoing experiments 
              with new technologies and frameworks.
            </p>
            
            <motion.a
              href="https://github.com/Raghavendrabaheti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              View All Repositories
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;