import React from 'react';
import { Code2, Server, Database, Palette, Cpu, Terminal, GitBranch, Shield } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <Code2 />, level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', icon: <Server />, level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', icon: <Terminal />, level: 80, color: 'from-gray-400 to-gray-600' },
    { name: 'TailwindCSS', icon: <Palette />, level: 90, color: 'from-teal-400 to-cyan-500' },
    { name: 'MongoDB', icon: <Database />, level: 75, color: 'from-green-400 to-green-600' },
    { name: 'MySQL', icon: <Database />, level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'C/C++', icon: <Cpu />, level: 90, color: 'from-purple-500 to-indigo-500' },
    { name: 'Java/Python', icon: <Terminal />, level: 80, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="skills" className="py-8 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent">
              Tech Stack & Skills
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-5 border border-gray-800 hover:border-neon/30 transition-all duration-300 cursor-pointer bg-gray-900/30 backdrop-blur-sm"
            >
              {/* Skill Header with Icon and Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex p-2.5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {React.cloneElement(skill.icon, { size: 22 })}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">{skill.name}</h3>
                  <div className="text-sm text-neon font-medium">{skill.level}%</div>
                </div>
              </div>
              
              {/* Progress Bar - Modern Style */}
              <div className="relative">
                <div className="w-full h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                {/* Removed progress dots */}
              </div>
              
              {/* Hover Effect - Subtle Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;