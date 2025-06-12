import React, { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = ({ 
  particleCount = 50, 
  speed = 0.5, 
  size = 2, 
  opacity = 0.3,
  color = '#667eea' 
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  // Generate particles with memoization for performance
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * size + 1,
      opacity: Math.random() * opacity + 0.1,
      hue: Math.random() * 60 + 200, // Blue to purple range
    }));
  }, [particleCount, speed, size, opacity]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    particlesRef.current = [...particles];

    const animate = () => {
      particlesRef.current.forEach((particle, index) => {
        // Update positions
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x > 100) particle.x = 0;
        if (particle.x < 0) particle.x = 100;
        if (particle.y > 100) particle.y = 0;
        if (particle.y < 0) particle.y = 100;

        // Update DOM element
        const element = container.children[index];
        if (element) {
          element.style.transform = `translate(${particle.x}vw, ${particle.y}vh)`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `hsl(${particle.hue}, 70%, 60%)`,
            opacity: particle.opacity,
            filter: 'blur(0.5px)',
            willChange: 'transform',
          }}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            delay: particle.id * 0.01,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Additional floating elements for depth */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(240, 147, 251, 0.1) 0%, transparent 70%)',
          filter: 'blur(15px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />
    </div>
  );
};

export default ParticleBackground;