import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen bg-[#0b0b0f] text-white flex flex-col items-center justify-center px-6 py-12"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_80%)]"></div>

      {/* Animated Heading */}
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-gray-100 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Animated Description */}
      <motion.p 
        className="text-lg md:text-xl max-w-3xl text-center text-gray-400 leading-relaxed px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Hi Everyone, I’m <span className="font-semibold text-white">Raghavendra Baheti</span>  
         from <span className="text-white">Udaipur, India</span>.  
        I’m currently pursuing <span className="font-semibold">Computer Science and Engineering</span>  
        at Techno India NJR.  
        
        I specialize in <span className="font-semibold">Full-Stack Development</span>, particularly in the  
        <span className="text-[#FACC15]"> MERN</span> stack, along with <span className="text-[#00D8FF]">DevOps</span>.  
        My expertise extends to **backend development, cloud deployment, and automation**,  
        making me proficient in building **scalable and secure applications**.  
        
        With a strong foundation in **Java & DSA**, I focus on **problem-solving,  
        algorithm optimization, and competitive programming**.
      </motion.p>

      {/* GitHub Contribution Calendar */}
      <motion.div 
        className="w-full max-w-4xl flex flex-col items-center justify-center mt-10 p-6 bg-[#111118] rounded-lg shadow-lg shadow-black/40 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-[#FACC15] mb-4">
          GitHub Activity 📈
        </h3>
        <div className="w-full overflow-x-auto">
          <GitHubCalendar 
            username="Raghavendrabaheti" 
            blockSize={12} 
            blockMargin={4} 
            colorScheme="dark"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;