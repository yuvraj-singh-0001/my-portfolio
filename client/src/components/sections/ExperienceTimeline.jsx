import React from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'creativestudio24.in',
      period: '2023 - Present',
      description: 'Working on modern web applications using React, Node.js, and MongoDB. Contributing to client projects and implementing responsive designs.',
      skills: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'REST APIs'],
      link: 'https://creativestudio24.in'
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
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-500 to-accent"></div>
              
              <div className="relative glass-dark rounded-2xl p-8 ml-16 mb-8 border border-gray-800 hover:border-neon-500/50 transition-all duration-300">
                <div className="absolute -left-16 top-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                    <Briefcase className="text-neon-500" size={24} />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <div className="flex items-center space-x-2 text-neon-500 mb-2">
                      <span>{exp.company}</span>
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-sm"
                    >
                      {skill}
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