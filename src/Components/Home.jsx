import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import profilePic from "../assets/profile.jpeg"; // Import profile image

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 md:px-12 lg:px-20 w-full bg-[#0b0b0f] overflow-hidden"
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
        {/* Profile Photo with Modern Ring Effect */}
        <div className="relative">
          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow opacity-30"></div>
          <img
            src={profilePic}
            alt="Raghavendra Baheti"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-gray-700 shadow-lg relative z-10"
          />
        </div>

        {/* Dynamic Typography */}
        <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-5 leading-tight">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Raghavendra Baheti
          </span>
        </h1>

        <p className="text-sm md:text-lg text-gray-400 mb-5 md:mb-7">
          A passionate <span className="text-blue-400">DevOps Engineer</span> &
          software enthusiast, dedicated to building scalable applications with
          seamless automation and deployment.
        </p>

        {/* Modern Buttons with Glow Effect */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <a
            href="your_resume_link.pdf"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white transition-all shadow-md shadow-blue-700/40 text-center text-sm md:text-base transform hover:scale-105"
          >
            My Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-gray-500 text-gray-300 hover:text-white hover:border-white transition-all text-center text-sm md:text-base transform hover:scale-105"
          >
            Let's Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;