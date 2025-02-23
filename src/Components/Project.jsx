import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import image from '../assets/SSProject/quizdsa.png';
import image1 from '../assets/SSProject/MultiGame.png';
import image2 from '../assets/SSProject/name.png';
import image3 from '../assets/SSProject/bilingsys.png';
import image4 from '../assets/SSProject/tictactoe.png';
import image5 from '../assets/SSProject/SIH.png';
const projectsData = [

  {
    title: 'DSA Quiz',
    description: 'This is a description of project one.',
    imageUrl: image,
    projectUrl: 'https://quizdsa.netlify.app/',
    repoUrl: 'https://github.com/raghavendrabaheti/quizdsa'
  },
  {
    title: 'Multi-Games',
    description: 'This is a description of project two.',
    imageUrl: image1,
    projectUrl: 'https://funf.netlify.app/',
    repoUrl: 'https://github.com/Raghavendrabaheti/Fun_Games'
  },
  {
    title: 'name',
    description: 'This is a description of project two.',
    imageUrl: image2,
    projectUrl: 'https://raghavendrab.netlify.app/',
    repoUrl: '#'
  },
  {
    title: 'tictactoe',
    description: 'This is a description of project two.',
    imageUrl: image3,
    projectUrl: 'https://funtt.netlify.app/',
    repoUrl: 'https://github.com/Raghavendrabaheti/Fun_Games'
  },
  {
    title: 'Billing System', 
    description: 'This is a description of project two.',
    imageUrl: image4,
    projectUrl: 'https://billingsystemraghavendra.netlify.app/',
    repoUrl: 'https://github.com/Raghavendrabaheti/'
  },
  {
    title: 'SIH23', 
    description: 'This is a description of project two.',
    imageUrl: image5,
    projectUrl: 'https://raghavendrabaheti.github.io/SIH23.github.io/',
    repoUrl: 'https://github.com/Raghavendrabaheti/SIH23.github.io'
  },
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
              <div className="flex justify-between items-center">
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <GitHubIcon />
                </a>
                
              </div>
            </div>
          </div>

        ))}

      </div>

    </section>

  );

}


export default Projects;