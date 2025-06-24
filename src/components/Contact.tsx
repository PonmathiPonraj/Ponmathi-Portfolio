import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/PonmathiPonraj',
      color: 'hover:text-purple-400'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ponmathi-ponraj-9332561b2',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/10 border border-secondary-500/30 rounded-full text-secondary-400 text-sm font-medium mb-6">
            <MessageCircle size={16} />
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to
            <span className="block bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-accent-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Excited to take on new challenges! Reach out, and let’s create something meaningful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col h-full">
            <div className="contact flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center">
                    <Mail size={20} className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <a href="mailto:ponmathi.selvam@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                      ponmathittl@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center">
                    <Phone size={20} className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <a href="tel:+919361620268" className="text-gray-400 hover:text-primary-400 transition-colors">
                      +91 9361620268
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center">
                    <MapPin size={20} className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-400">Sivakasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Social Links and Call to Action */}
          <div className="flex flex-col h-full justify-between">
            {/* Social Links */}
            <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
            <div className="relative flex flex-col justify-end mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 blur-xl rounded-2xl"></div>
              <div className="relative bg-dark-900/80 backdrop-blur-xl border border-primary-500/20 rounded-2xl p-8">
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-4 bg-dark-800/50 border border-primary-500/20 rounded-lg hover:border-primary-400/40 transition-all duration-300 transform hover:scale-105 ${social.color}`}
                    >
                      <div className="text-gray-300 group-hover:text-current transition-colors duration-300">
                        {social.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                        {social.label}
                      </span>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-current transition-colors duration-300 ml-auto" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="flex justify-center w-full my-8">
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-xl rounded-2xl"></div>
          <div className="relative bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-400/20 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-4">Let's build something amazing!</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm passionate about building digital solutions and sharing technical knowledge. 
              I'm currently open to opportunities as a Developer, Tester, or Technical Trainer. 
              With a strong focus on learning and growth, 
              I'm always eager to take on new challenges and contribute meaningfully to any team or project. Feel free to reach out — I'd be happy to connect! I take pride in writing clean, efficient code and guiding others in their learning journey. 
              My goal is to keep evolving with the tech industry while making a positive impact wherever I work.
            </p>
            <div className="text-sm text-gray-400 leading-loose">
              <p>⚡ Typically responds within 24 hours</p>
              <p>🚀 Actively seeking full-time opportunities</p>
              <p>💡 Open to Developer, Tester, and Trainer roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;