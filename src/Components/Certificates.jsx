import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Download } from 'lucide-react';

// Manually import certificates
import certificate1 from '../assets/Certificates/CSS.png';
import certificate2 from '../assets/Certificates/js.png';
import certificate3 from '../assets/Certificates/MYSQL.png';
import certificate4 from '../assets/Certificates/Mernstack.jpg';
import certificate5 from '../assets/Certificates/ndr.jpeg';
import certificate6 from '../assets/Certificates/sql2.jpg';
import certificate7 from '../assets/Certificates/cybersecurity.jpg';

const certificatesData = [
  {
    title: 'MERN Stack Development',
    issuer: 'Professional Certification',
    date: '2024',
    image: certificate4,
    description: 'Comprehensive full-stack development certification covering MongoDB, Express.js, React, and Node.js',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'Full Stack'
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Security Institute',
    date: '2024',
    image: certificate7,
    description: 'Advanced cybersecurity principles, threat analysis, and security implementation strategies',
    skills: ['Network Security', 'Threat Analysis', 'Risk Assessment'],
    category: 'Security'
  },
  {
    title: 'JavaScript Advanced Concepts',
    issuer: 'Tech Academy',
    date: '2023',
    image: certificate2,
    description: 'Deep dive into modern JavaScript, ES6+, async programming, and advanced patterns',
    skills: ['ES6+', 'Async/Await', 'Closures', 'Prototypes'],
    category: 'Programming'
  },
  {
    title: 'CSS Advanced Styling',
    issuer: 'Design Institute',
    date: '2023',
    image: certificate1,
    description: 'Advanced CSS techniques, animations, grid systems, and responsive design principles',
    skills: ['CSS Grid', 'Flexbox', 'Animations', 'Responsive Design'],
    category: 'Frontend'
  },
  {
    title: 'MySQL Database Management',
    issuer: 'Database Academy',
    date: '2023',
    image: certificate3,
    description: 'Database design, optimization, complex queries, and performance tuning',
    skills: ['SQL Queries', 'Database Design', 'Performance Tuning'],
    category: 'Database'
  },
  {
    title: 'Network Defense & Response',
    issuer: 'Cybersecurity Institute',
    date: '2024',
    image: certificate5,
    description: 'Network monitoring, incident response, and defense strategies',
    skills: ['Network Monitoring', 'Incident Response', 'Defense Strategies'],
    category: 'Security'
  },
  {
    title: 'Advanced SQL Concepts',
    issuer: 'Data Academy',
    date: '2023',
    image: certificate6,
    description: 'Complex SQL operations, stored procedures, and database optimization',
    skills: ['Stored Procedures', 'Query Optimization', 'Data Analysis'],
    category: 'Database'
  }
];

const Certificates = () => {
  const categories = [...new Set(certificatesData.map(cert => cert.category))];

  return (
    <section 
      id="certificates" 
      className="relative min-h-screen bg-gradient-main grid-bg py-20 px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/5 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
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
            <span className="gradient-text">Certificates</span> & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise 
            in various technologies and development practices.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-card rounded-xl p-4 text-center backdrop-blur-lg border border-white/10">
            <div className="text-2xl font-bold text-indigo-400 mb-1">{certificatesData.length}</div>
            <div className="text-gray-400 text-sm">Certificates</div>
          </div>
          <div className="bg-gradient-card rounded-xl p-4 text-center backdrop-blur-lg border border-white/10">
            <div className="text-2xl font-bold text-purple-400 mb-1">{categories.length}</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
          <div className="bg-gradient-card rounded-xl p-4 text-center backdrop-blur-lg border border-white/10">
            <div className="text-2xl font-bold text-cyan-400 mb-1">2023-2024</div>
            <div className="text-gray-400 text-sm">Years</div>
          </div>
          <div className="bg-gradient-card rounded-xl p-4 text-center backdrop-blur-lg border border-white/10">
            <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
            <div className="text-gray-400 text-sm">Completion</div>
          </div>
        </motion.div>
        
        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={index}
              className="bg-gradient-card rounded-2xl overflow-hidden backdrop-blur-lg border border-white/10 hover:border-indigo-500/30 transition-all duration-500 card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs backdrop-blur-sm border border-indigo-500/30">
                    {certificate.category}
                  </span>
                </div>

                {/* Award Icon */}
                <div className="absolute top-4 right-4">
                  <Award className="w-6 h-6 text-yellow-400" fill="currentColor" />
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {certificate.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-indigo-400 text-sm">{certificate.issuer}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <Calendar size={12} />
                    {certificate.date}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {certificate.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-green-500/10 text-green-300 px-2 py-1 rounded-md text-xs border border-green-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 btn-primary text-center text-sm py-2 px-4 rounded-lg inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </motion.button>
                  
                  <motion.button
                    className="btn-secondary text-center text-sm py-2 px-4 rounded-lg inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={16} />
                    Download
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-card rounded-2xl p-8 backdrop-blur-lg border border-white/10 max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" fill="currentColor" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-400 mb-6">
              I'm constantly updating my skills and pursuing new certifications to stay 
              current with the latest technologies and industry best practices.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Discuss Opportunities
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;