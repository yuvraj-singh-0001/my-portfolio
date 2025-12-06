import React from 'react';
import { ExternalLink, Github, Eye, Shield, Globe, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CCTV Management System',
      description: 'A comprehensive surveillance management system with real-time monitoring and analytics dashboard.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      imageColor: 'from-blue-500/20 to-cyan-500/20',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern portfolio website with dark theme, animations, and email notification system.',
      tech: ['React', 'Tailwind', 'EmailJS', 'Vite'],
      imageColor: 'from-purple-500/20 to-pink-500/20',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Code Compiler',
      description: 'Online code compiler supporting multiple languages with real-time output and syntax highlighting.',
      tech: ['Node.js', 'Express', 'Docker', 'Redis'],
      imageColor: 'from-green-500/20 to-emerald-500/20',
      liveLink: '#',
      githubLink: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work with modern technologies and innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass-dark rounded-2xl overflow-hidden border border-gray-800 hover:border-neon/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image/Placeholder */}
              <div className={`h-48 ${project.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                    <Globe size={48} className="text-white/30" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Shield className="text-neon" size={20} />
                </div>
                
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-gray-800/50 border border-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex-1 group/btn flex items-center justify-center space-x-2 py-3 rounded-xl border border-neon/30 hover:bg-neon/10 transition-all duration-300"
                  >
                    <Eye size={18} />
                    <span>Live Demo</span>
                    <ExternalLink className="opacity-0 group-hover/btn:opacity-100 transition-opacity" size={16} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 group/btn flex items-center justify-center space-x-2 py-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon/0 via-neon/5 to-neon/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;