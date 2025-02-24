import GitHubCalendar from "react-github-calendar";
const About = () => {
  return (
    <section id="about" className="h-screen bg-[#8F9CD9] text-white flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-blue-500 mb-4">About Me</h2>
      <p className="text-lg  max-w-3xl text-center">
      Hi Everyone, I’m Raghavendra Baheti  from Udaipur, India. I currently pursuing Computer Science and Engineering at Techno India NJR. I specialize in full-stack development, particularly in the MEARN (MongoDB, Express.js, React, Node.js) stack, along with DevOps. My expertise extends to backend development, cloud deployment, and automation, making me proficient in building scalable and secure applications.
      With a strong foundation in Java and DSA, I focus on problem-solving, algorithm optimization, and competitive programming to enhance my coding skills.
      </p>
    <div className="flex justify-center items-center h-screen">
      <GitHubCalendar username="Raghavendrabaheti" />
    </div>
    </section>
  );
};

export default About;