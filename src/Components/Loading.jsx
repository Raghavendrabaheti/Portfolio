import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`relative ${sizeClasses[size]}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 border-2 border-gray-600 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-blue-500 rounded-full"></div>
      </motion.div>
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-hero flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">RB</span>
          </div>
        </motion.div>
        
        <LoadingSpinner size="lg" className="mb-6" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-xl font-semibold text-white mb-2">Loading Portfolio</h2>
          <p className="text-gray-400">Preparing something amazing...</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export { LoadingSpinner, LoadingScreen };
export default LoadingSpinner;
