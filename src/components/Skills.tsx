import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Palette, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      color: 'from-primary-500 to-primary-600',
      skills: [
        { name: 'HTML5/CSS3'},
        { name: 'BootStrap', level: 95, color: '#FFF44F' },
        { name: 'JavaScript', level: 90, color: '#06B6D4' },
        { name: 'Tailwind CSS', level: 85, color: '#FFA500' },
        { name: 'React.js', level: 80, color: '#3178C6' },
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'Backend',
      color: 'from-secondary-500 to-secondary-600',
      skills: [
        { name: 'Node.js', level: 80, color: '#3178C6' },
        { name: 'MongoDB', level: 80, color: '#FFA500' },
        { name: 'PHP', level: 80, color: '#50C878' },
        { name: 'Express.js', level: 70, color: '#06B6D4' },
        { name: 'MySQL', level: 75, color: '#FFF44F' },
      ]
    },
    {
      icon: <Palette size={24} />,
      title: 'Tools & Design',
      color: 'from-accent-500 to-accent-600',
      skills: [
        { name: 'Cypress', level: 95, color: '#FFA500' },
        { name: 'Git/GitHub', level: 95, color: '#06B6D4' },
        { name: 'Jira', level: 90, color: '#FFF44F' },
        { name: 'Postman', level: 80, color: '#3178C6' },
        { name: 'Firebase', level: 80, color: '#50C878' },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-dark-900/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/10 border border-secondary-500/30 rounded-full text-secondary-400 text-sm font-medium mb-6">
            <Zap size={16} />
            Technical Skills
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="block mb-2">Technologies</span>
            <span className="block text-4xl md:text-5xl bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              I Work With
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-accent-400 mx-auto rounded-full"></div>
        </div>     

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-5 group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <div className={`p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white shadow-lg`}>
                  <Code size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Frontend Technologies</h3>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'HTML5/CSS3', 'BootStrap', 'Tailwind CSS', 'JavaScript', 'React.js'
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-dark-800/50 border border-primary-500/20 text-gray-300 rounded-full text-sm hover:bg-dark-700/50 hover:border-primary-400/40 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-5 group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <div className={`p-3 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg text-white shadow-lg`}>
                  <Database size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Backend Technologies</h3>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Node.js', 'MongoDB', 'Express.js', 'PHP', 'MySQL'
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-dark-800/50 border border-primary-500/20 text-gray-300 rounded-full text-sm hover:bg-dark-700/50 hover:border-primary-400/40 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-5 group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <div className={`p-3 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg text-white shadow-lg`}>
                  <Palette size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Tools & Utilities</h3>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Cypress', 'Git/Github', 'Jira', 'Postman', 'Firebase', 'Netlify'
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-dark-800/50 border border-primary-500/20 text-gray-300 rounded-full text-sm hover:bg-dark-700/50 hover:border-primary-400/40 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'DSA', 'Manual Testing', 'Automation Testing', 'Redux', 'Material-UI', 'IOT', 'C', 'Java', 'Python'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-dark-800/50 border border-primary-500/20 text-gray-300 rounded-full text-sm hover:bg-dark-700/50 hover:border-primary-400/40 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;