import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import profilePic from "../assets/bg1.jpg"; // Import your profile picture

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 md:px-12 lg:px-20 w-full bg-[#0b0b0f] overflow-auto"
    >
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_80%)]"></div>
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>

      {/* 3D Sphere Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Sphere args={[1.5, 100, 200]} scale={2}>
            <MeshDistortMaterial 
              color="#0066ff" 
              attach="material" 
              distort={0.5} 
              speed={2} 
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Animated Content */}
      <motion.div 
        className="relative text-center max-w-2xl p-6 md:p-8 rounded-lg border border-gray-800 bg-[#12121a] backdrop-blur-lg shadow-2xl shadow-black/50 flex flex-col items-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Profile Photo */}
        <img 
         src={"/assets/bg1.jpg"} alt="Raghavendra Baheti" />
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-700 shadow-lg mb-4"
        />
        
        {/* Dynamic Typography */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5 leading-tight">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Raghavendra Baheti
          </span>
        </h1>

        <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-5 md:mb-7">
          A Passionate DevOps and software engineering enthusiast, focused on building scalable applications with automation and seamless deployment.
        </p>

        {/* Sleek Buttons with Hover Effects */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <a href="your_resume_link.pdf" target="_blank" className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow-lg shadow-blue-700/40 text-center text-sm md:text-base">
            My Resume
          </a>
          <a href="#contact" className="px-5 py-2 rounded-lg border border-gray-500 text-gray-300 hover:text-white hover:border-white transition text-center text-sm md:text-base">
            Let's Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;