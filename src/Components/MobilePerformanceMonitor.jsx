import { useEffect } from 'react';

const MobilePerformanceMonitor = ({ children }) => {
  useEffect(() => {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEndDevice = window.innerWidth <= 768 && (navigator.hardwareConcurrency <= 2 || navigator.deviceMemory <= 2);

    if (isMobile || isLowEndDevice) {
      // Disable expensive CSS effects
      document.documentElement.style.setProperty('--blur-heavy', 'blur(4px)');
      document.documentElement.style.setProperty('--blur-light', 'blur(2px)');
      
      // Add mobile class to body
      document.body.classList.add('mobile-device');
      
      // Reduce animation duration
      const style = document.createElement('style');
      style.textContent = `
        .mobile-device * {
          animation-duration: 0.3s !important;
          transition-duration: 0.3s !important;
        }
        .mobile-device .particle-background {
          display: none !important;
        }
        .mobile-device .complex-gradient {
          background: var(--bg-primary) !important;
        }
      `;
      document.head.appendChild(style);

      // Lazy load heavy components
      if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });
        images.forEach(img => imageObserver.observe(img));
      }

      // Memory management
      const handleVisibilityChange = () => {
        if (document.hidden) {
          // Pause animations when tab is not visible
          document.body.style.animationPlayState = 'paused';
        } else {
          document.body.style.animationPlayState = 'running';
        }
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  return children;
};

export default MobilePerformanceMonitor;
