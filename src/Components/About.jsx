import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { Code2, Database, Server, Cloud, Wrench, Trophy, Heart, MapPin, GraduationCap } from "lucide-react";

const About = () => {
  const skills = [
    { 
      icon: Code2, 
      name: "Frontend", 
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Server, 
      name: "Backend", 
      items: ["Node.js", "Express", "Java", "Python"],
      color: "from-green-500 to-teal-500"
    },
    { 
      icon: Database, 
      name: "Database", 
      items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Cloud, 
      name: "DevOps", 
      items: ["Docker", "AWS", "CI/CD", "Kubernetes"],
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: Wrench, 
      name: "Tools", 
      items: ["Git", "Linux", "Nginx", "Jenkins"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "Computer Science & Engineering at Techno India NJR",
      color: "text-blue-400"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Udaipur, Rajasthan, India",
      color: "text-green-400"
    },
    {
      icon: Heart,
      title: "Passion",
      content: "Building scalable, secure applications",
      color: "text-red-400"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-gradient-section grid-bg section-padding"
    >
      {/* Enhanced minimal background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/6 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.7, 1, 0.7],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-50"
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60"
          animate={{
            scale: [0.8, 1.5, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="container-modern relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 backdrop-blur-sm mb-6"
          >
            <Heart className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Get to know me</span>
          </motion.div>

          <h2 className="text-responsive-lg text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-modern p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                My Journey
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi! I'm <span className="text-blue-400 font-semibold">Raghavendra Baheti</span>, 
                  a passionate developer from <span className="text-purple-400">Udaipur, India</span>. 
                  Currently pursuing Computer Science & Engineering, I specialize in creating 
                  digital experiences that matter.
                </p>
                
                <p>
                  My expertise lies in <span className="text-blue-400 font-semibold">Full-Stack Development</span> 
                  with the <span className="text-purple-400 font-semibold">MERN</span> stack, combined with 
                  <span className="text-cyan-400 font-semibold"> DevOps</span> practices for scalable deployments.
                </p>
                
                <p>
                  I believe in writing <span className="text-green-400">clean, maintainable code</span> and 
                  building systems that can scale gracefully while maintaining security and performance.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-modern p-4 flex items-center gap-4"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="card-modern p-6 group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-white/10 transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GitHub Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="card-modern p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              GitHub Activity
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              A visual representation of my coding consistency and contribution patterns
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-full flex justify-center">
              <div className="w-full max-w-4xl">
                <GitHubCalendar 
                  username="Raghavendrabaheti" 
                  blockSize={12} 
                  blockMargin={4} 
                  colorScheme="dark"
                  theme={{
                    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  }}
                  fontSize={12}
                />
              </div>
            </div>
          </div>
          
          {/* GitHub stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">500+</div>
              <div className="text-sm text-gray-400">Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
              <div className="text-sm text-gray-400">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">15+</div>
              <div className="text-sm text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">3+</div>
              <div className="text-sm text-gray-400">Years Active</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;