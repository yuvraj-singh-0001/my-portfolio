import React from 'react';
import { ExternalLink, Github, Eye, Shield, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
   {
  title: 'Jobion – Job Search Portal',
  description: 'A client-based job search portal for browsing jobs and applying online with a clean, responsive UI.',
  tech: ['React (Vite)', 'Node.js', 'MongoDB', 'Tailwind CSS', 'SEO'],
  imageColor: 'from-purple-500/20 to-fuchsia-500/20',
  liveLink: 'https://jobion.in',
  githubLink: 'https://github.com/yuvraj-singh-0001'
},

   {
  title: 'SP Coaching – Client Project',
description: 'Client project with student , Admin dashboard, fee tracking, SEO, and Gmail notifications.',
  tech: ['React (Vite)', 'Node.js', 'MongoDB', 'Tailwind CSS', 'SEO'],
  imageColor: 'from-green-500/20 to-emerald-500/20',
  liveLink: 'https://spcoaching.vercel.app',
  githubLink: 'https://github.com/yuvraj-singh-0001'
}
,
    {
      title: 'CCTV Management System',
      description: 'A comprehensive surveillance management system with real-time monitoring and analytics dashboard.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      imageColor: 'from-blue-500/20 to-cyan-500/20',
      liveLink: 'https://github.com/yuvraj-singh-0001/cctv',
      githubLink: 'https://github.com/yuvraj-singh-0001/cctv'
    },
  ];

  return (
    <section id="projects" className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-sm">
            Showcasing my best work with modern technologies and innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass-dark rounded-xl overflow-hidden border border-gray-800 hover:border-neon/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image/Placeholder - Compact */}
              <div className={`h-32 ${project.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                    <Globe size={32} className="text-white/30" />
                  </div>
                </div>
              </div>
              
              {/* Project Content - Compact */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold line-clamp-1">{project.title}</h3>
                  <Shield className="text-neon" size={18} />
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack - Compact */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-gray-800/50 border border-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons - Compact */}
                <div className="flex space-x-2">
                  <a
                    href={project.liveLink}
                    className="flex-1 group/btn flex items-center justify-center space-x-1 py-2 rounded-lg border border-neon/30 hover:bg-neon/10 transition-all duration-300 text-sm"
                  >
                    <Eye size={16} />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 group/btn flex items-center justify-center space-x-1 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
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