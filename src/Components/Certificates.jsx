import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

// Manually import certificates
import certificate1 from '../assets/Certificates/CSS.png';
import certificate2 from '../assets/Certificates/js.png';
import certificate3 from '../assets/Certificates/MYSQL.png';
import certificate4 from '../assets/Certificates/Mernstack.jpg';
import certificate5 from '../assets/Certificates/ndr.jpeg';
import certificate6 from '../assets/Certificates/sql2.jpg';
import certificate7 from '../assets/Certificates/cybersecurity.jpg';

const certificatesData = [
  { name: 'Cybersecurity Certificate', url: certificate7, color: '#00bcd4' },
  { name: 'MERN Stack Certificate', url: certificate4, color: '#1e90ff' },
  { name: 'CSS Certificate', url: certificate1, color: '#facc15' },
  { name: 'JavaScript Certificate', url: certificate2, color: '#ff7f50' },
  { name: 'MySQL Certificate', url: certificate3, color: '#66cdaa' },
  { name: 'NDR Certificate', url: certificate5, color: '#ff4500' },
  { name: 'SQL Certificate', url: certificate6, color: '#4b0082' },
];

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setCertificates(certificatesData);
  }, []);

  return (
    <section id="certificates" className="bg-[#0a0129] text-white py-20 flex flex-col items-center">
      {/* Section Title */}
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Certifications 🎓
      </motion.h2>

      {/* Scrollable Container */}
      <div className="w-full max-w-6xl overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6">
          {certificates.map((certificate, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px]"
            >
              <Card 
                className="bg-[#111118] shadow-lg shadow-black/40 rounded-xl overflow-hidden"
                sx={{ borderBottom: `5px solid ${certificate.color}` }}
              >
                <CardActionArea href={certificate.url} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="220"
                    image={certificate.url}
                    alt={certificate.name}
                    className="object-cover"
                  />
                  <CardContent className="text-center">
                    <Typography variant="h6" className="text-white font-semibold">
                      {certificate.name}
                    </Typography>
                    <Typography variant="body2" className="text-gray-400">
                      Click to view certificate
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;