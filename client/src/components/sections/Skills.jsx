import React from 'react';
import { Code2, Server, Database, Palette, Cpu, Terminal, GitBranch, Shield } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <Code2 />, level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', icon: <Server />, level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', icon: <Terminal />, level: 80, color: 'from-gray-400 to-gray-600' },
    { name: 'TailwindCSS', icon: <Palette />, level: 95, color: 'from-teal-400 to-cyan-500' },
    { name: 'MongoDB', icon: <Database />, level: 75, color: 'from-green-400 to-green-600' },
    { name: 'MySQL', icon: <Database />, level: 70, color: 'from-blue-400 to-blue-600' },
    { name: 'C/C++', icon: <Cpu />, level: 85, color: 'from-purple-500 to-indigo-500' },
    { name: 'Java/Python', icon: <Terminal />, level: 80, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent">
              Tech Stack & Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative glass-dark rounded-2xl p-6 border border-gray-800 hover:border-neon/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-110 transition-transform duration-300">
                  <div className={`text-white`}>
                    {React.cloneElement(skill.icon, { size: 28 })}
                  </div>
                </div>
              </div>
              
              {/* Skill Name */}
              <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              {/* Level Indicator */}
              <div className="absolute top-4 right-4 text-sm font-semibold text-neon">
                {skill.level}%
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;