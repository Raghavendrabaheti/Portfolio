import React from 'react';
import image from '../assets/SSProject/quizdsa.png';

const projectsData = [
  {
    title: 'DSA QUIZ',
    description: 'This is a description of project one.',
    imageUrl: image,
    projectUrl: 'https://quizdsa.netlify.app/'
  },
  {
    title: 'Project Two',
    description: 'This is a description of project two.',
    imageUrl: 'https://via.placeholder.com/200',
    projectUrl: '#'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-bold text-blue-500 mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="max-w-xs mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;