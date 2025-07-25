import React from 'react';
import { ExternalLink, Github, Eye, Folder } from 'lucide-react';
import crackerShopImage from '../assets/cracker-1.jpg';
import speedDetectorImage from '../assets/detect-speed.jpg';
import mailClientImage from '../assets/mail-2.jpg';
import sareesImage from '../assets/sarees-2.jpg'

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Prathish Crackers',
      description: 'Developed responsive websites for local businesses with clean, mobile-first designs to boost engagement. Implemented backend connectivity for dynamic content and real-time updates. Delivered a custom site for a cracker shop with live pricing to support seasonal sales.',
      image: crackerShopImage,
      technologies: ['HTML5', 'CSS3', 'BootStrap', 'PHP', 'MYSQL'],
      liveUrl: 'https://www.bestonlinecrackers.in',
      githubUrl: '#',
      featured: true,
      category: 'Full Stack'
    },
    {
      title: 'Textile Shop Website',
      description: 'Built a responsive website to showcase the shop’s products with category filtering and smooth navigation. Optimized for fast, consistent performance across devices. Designed a clean interface and structured the frontend for future integration of inventory and order management.',
      image: sareesImage,
      technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Frontend'
    },
    {
      title: 'Web-Based Mail Client',
      description: 'Developed a full-stack mail client with secure user authentication and personalized inbox management. Implemented real-time message updates, unread counts, and mail deletion features for smooth user interaction. Delivered a responsive, cross-device UI optimized for performance and ease of use.',
      image: mailClientImage,
      technologies: ['HTML5', 'CSS3', 'BootStrap', 'JavaScript', 'React.js', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Frontend'
    },
    {
      title: 'Detecting Speed Limit of Vehicles',
      description: 'A technology-driven solution to detect vehicles exceeding speed limits on roads and highways. The system monitors vehicle speed, alerts drivers when they exceed the limit, detects obstacles, and adjusts speed based on road signboards — helping reduce road accidents caused by overspeeding and careless driving.',
      image: speedDetectorImage,
      technologies: ['C', 'C++', 'Arduino IDE'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'IOT'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/10 border border-secondary-500/30 rounded-full text-secondary-400 text-sm font-medium mb-6">
            <Folder size={16} />
            My Work
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Featured
            <span className="block bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-accent-400 mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-2xl overflow-hidden group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110${(project.title === 'Sree Pon Sarees' || project.title === 'Prathish Crackers') ? ' object-top mt-0' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-justify">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-800/50 border border-primary-500/20 text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {!(project.title === 'Web-Based Mail Client' || project.title === 'Detecting Speed Limit of Vehicles') && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 text-sm font-medium transform hover:scale-105"
                      >
                        <Eye size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {/* <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">More Projects</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl"></div>
                <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-xl px-4 py-6 group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-primary-300 transition-colors duration-300 mb-2">
                        {project.title}
                      </h4>
                      <span className="text-xs text-gray-400 bg-dark-800/50 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-dark-800/50 border border-primary-500/20 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;