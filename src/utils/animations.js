// Animation variants for consistent animations across components
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

// Utility functions
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Theme colors
export const colors = {
  primary: {
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca'
  },
  secondary: {
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9'
  },
  accent: {
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490'
  }
};
