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
    <section id="skills" className="py-12 md:py-8 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent">
              Tech Stack & Skills
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2 sm:px-0">
            Technologies I work with to build amazing digital experiences
          </p>
        </div>
        
        {/* Mobile: 2 cards per row, Desktop: 4 cards per row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-3 sm:p-4 md:p-5 border border-gray-800 hover:border-neon/30 transition-all duration-300 cursor-pointer bg-gray-900/30 backdrop-blur-sm"
            >
              {/* Skill Header with Icon and Name - Adjusted for mobile */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                <div className="inline-flex p-1.5 sm:p-2 md:p-2.5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <div className="text-white">
                    {React.cloneElement(skill.icon, { 
                      size: 18, // Reduced icon size for mobile
                      className: "w-4 h-4 sm:w-5 sm:h-5" // Responsive size classes
                    })}
                  </div>
                </div>
                <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent overflow */}
                  <h3 className="font-semibold text-xs sm:text-sm md:text-base truncate"> {/* Added truncate */}
                    {skill.name}
                  </h3>
                  <div className="text-xs sm:text-sm text-neon font-medium">{skill.level}%</div>
                </div>
              </div>
              
              {/* Progress Bar - Modern Style */}
              <div className="relative">
                <div className="w-full h-1.5 sm:h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
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