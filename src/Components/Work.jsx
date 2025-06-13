import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Users } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import image5 from '../assets/SSProject/SIH.png';
import image6 from '../assets/SSProject/logithon.jpeg';
import image7 from '../assets/SSProject/sih24.jpeg';

const hackathonProjects = [
  {
    title: 'Multi-Modal Cross-Border Route Selector',
    description: 'A comprehensive logistics optimization system leveraging Dijkstra Algorithm for efficient cross-border transportation route planning.',
    imageUrl: image6,
    projectUrl: 'https://github.com/Tech-Transit',
    repoUrl: 'https://github.com/Tech-Transit',
    technologies: ['React', 'Node.js', 'Dijkstra Algorithm', 'MongoDB'],
    date: '2024',
    team: '4 members'
  },
  {
    title: 'Smart India Hackathon 2023',
    description: 'Innovative solution addressing real-world challenges through technology and creative problem-solving.',
    imageUrl: image5,
    projectUrl: 'https://raghavendrabaheti.github.io/SIH23.github.io/',
    repoUrl: 'https://github.com/Raghavendrabaheti/SIH23.github.io',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    date: '2023',
    team: '6 members'
  },
  {
    title: 'Smart India Hackathon 2024',
    description: 'Advanced technological solution focusing on scalability and user experience for nationwide implementation.',
    imageUrl: image7,
    projectUrl: 'https://raghavendrabaheti.github.io/SIH23.github.io/',
    repoUrl: 'https://github.com/Raghavendrabaheti/SIH-2024',
    technologies: ['React', 'Express.js', 'MongoDB', 'AWS'],
    date: '2024',
    team: '6 members'
  }
];

const Work = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  
  // Check if screen is mobile/tablet size
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section 
      id="work" 
      className="relative min-h-screen bg-gradient-main grid-bg py-20 px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of my featured hackathon projects that demonstrate my expertise in 
            software development, problem-solving, and collaborative innovation.
          </p>
        </motion.div>
        
        {/* Projects Display - Responsive */}
        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathonProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-card rounded-2xl overflow-hidden backdrop-blur-lg border border-white/10 hover:border-indigo-500/30 transition-all duration-500 card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Project Meta */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full text-xs backdrop-blur-sm flex items-center gap-1">
                    <Calendar size={12} />
                    {project.date}
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs backdrop-blur-sm flex items-center gap-1">
                    <Users size={12} />
                    {project.team}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded-md text-xs border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center text-sm py-2 px-4 rounded-lg inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                    View Project
                  </motion.a>
                  
                  <motion.a
                    href={project.repoUrl}
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
          ))}
        </div>

        {/* Mobile & Tablet Carousel View */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <style jsx>{`
              .work-swiper .swiper-pagination {
                position: relative;
                margin-top: 2rem;
              }
              .work-bullet {
                background: rgba(255, 255, 255, 0.3);
                opacity: 1;
                transition: all 0.3s ease;
              }
              .work-bullet-active {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                transform: scale(1.2);
              }
              .work-swiper .swiper-button-prev,
              .work-swiper .swiper-button-next {
                display: none;
              }
            `}</style>
            
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
                bulletClass: 'swiper-pagination-bullet work-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active work-bullet-active',
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
              className="work-swiper pb-12"
            >
              {hackathonProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-gradient-card rounded-2xl overflow-hidden backdrop-blur-lg border border-white/10 hover:border-indigo-500/30 transition-all duration-500 card-hover w-full max-w-sm mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Project Meta */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full text-xs backdrop-blur-sm flex items-center gap-1">
                          <Calendar size={12} />
                          {project.date}
                        </span>
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs backdrop-blur-sm flex items-center gap-1">
                          <Users size={12} />
                          {project.team}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded-md text-xs border border-indigo-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-primary text-center text-xs py-2 px-3 rounded-lg inline-flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={14} />
                          View
                        </motion.a>
                        
                        <motion.a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-center text-xs py-2 px-3 rounded-lg inline-flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={14} />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;