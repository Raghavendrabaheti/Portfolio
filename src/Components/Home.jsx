import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import profilePic from "../assets/profile.jpeg"; // Import profile image

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 md:px-12 lg:px-20 w-full bg-[#0b0b0f] overflow-hidden pt-16"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_80%)]"></div>
      <div className="absolute -top-20 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>

      {/* 3D Sphere in Background */}
      <div className="absolute right-10 top-24 md:top-28 lg:top-32 w-[450px] h-[450px] opacity-30 pointer-events-none">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Sphere args={[1.5, 100, 200]} scale={2.3}>
            <MeshDistortMaterial 
              color="#0066ff" 
              attach="material" 
              distort={0.5} 
              speed={2} 
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Profile Image (Perfect Positioning) */}
      <motion.div
        className="relative flex flex-col items-center text-center mt-4 md:mt-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-8 border-gray-700 shadow-xl overflow-hidden">
          <img
            src={profilePic}
            alt="Raghavendra Baheti"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-3xl md:text-4xl font-bold mt-5">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Raghavendra Baheti
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-400 mt-3 max-w-lg">
          A <span className="text-blue-400">DevOps Engineer</span> & software enthusiast, passionate about building scalable applications with automation & deployment efficiency.
        </p>

        {/* Buttons */}
        <div className="flex gap-5 mt-5">
          <motion.a
            href="your_resume_link.pdf"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg transition-all transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            My Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-gray-500 text-gray-300 hover:text-white hover:border-white transition-all transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;