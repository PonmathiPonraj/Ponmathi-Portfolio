import React from 'react';
import { User, Zap, Code2, Lightbulb, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    // {
    //   icon: <Code2 size={24} />,
    //   title: 'Practical Architecture',
    //   description: 'Built scalable, maintainable web apps using clean code and industry best practices.',
    //   color: 'from-primary-500 to-primary-600'
    // },
    {
      icon: <Lightbulb size={24} />,
      title: 'Skill-Driven Training',
      description: 'Delivered hands-on MERN stack sessions with real-time use cases.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: <Target size={24} />,
      title: 'Impact-Oriented',
      description: 'Focused on delivering efficient, user-friendly solutions across the full stack.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: <Users size={24} />,
      title: 'Empowering Mentor',
      description: 'Trained 250+ learners, helping non-tech students become job-ready.',
      color: 'from-primary-500 to-secondary-600'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6">
            <User size={16} />
            About Me
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Career
            <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-accent-400" />
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    I'm Ponmathi from Sivakasi, a Computer Science and Engineering graduate from AAA College of Engineering and Technology (2021). Over the past three years, I've gained hands-on experience as a software developer and in automation testing.
                  </p>
                  <p className="text-justify">
                    Currently, I work as a Technical Trainer at Kevell Global Solutions, Madurai, where I lead web development internship programs. I design training modules, mentor 50+ students per batch, and guide them through both theory and real-time projects.
                  </p>
                  <p className="text-justify">
                    Passionate about continuous learning and knowledge sharing, I enjoy coding, mentoring, and solving real-world challenges. I'm eager to grow further in full stack development and technical education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" 
                     style={{ background: `linear-gradient(to right, ${highlight.color.split(' ')[1]}, ${highlight.color.split(' ')[3]})` }}></div>
                <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-xl p-6 group-hover:border-primary-400/40 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r ${highlight.color} rounded-lg text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;