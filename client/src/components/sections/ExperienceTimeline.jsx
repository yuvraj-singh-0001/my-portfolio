import React from 'react';
import { Briefcase, Calendar, ExternalLink, Code } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'creativestudio24.in',
      period: '2025 - Present',
      description: 'Working on modern web applications using React, Node.js, and MongoDB. Contributing to client projects and implementing responsive designs.',
      skills: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'REST APIs'],
      link: 'https://creativestudio24.in'
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: '2025 - Present',
      description: 'Building custom websites and web applications for clients. Focusing on performance, SEO, and user experience.',
      skills: ['JavaScript', 'React', 'Firebase', 'WordPress', 'UI/UX'],
      link: null
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-neon-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline connector line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-neon-500 to-accent"></div>
              )}
              
              <div className="relative glass-dark rounded-2xl p-8 ml-4 md:ml-16 border border-gray-800 hover:border-neon-500/50 transition-all duration-300">
                {/* Timeline dot */}
                <div className="absolute -left-4 md:-left-16 top-8">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center border-2 border-neon-500">
                    <Briefcase className="text-neon-500 w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <div className="flex items-center space-x-3 text-neon-500 mb-2">
                      <span className="text-lg">{exp.company}</span>
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-sm flex items-center space-x-2"
                    >
                      <Code size={14} />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;