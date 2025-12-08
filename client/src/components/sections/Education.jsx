import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-neon-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto glass-dark rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left: Icon */}
            <div className="p-6 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl self-start">
              <GraduationCap size={48} className="text-neon-500" />
            </div>
            
            {/* Right: Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-gray-300 mb-6 text-lg">Final Year Student</p>
              
              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar size={20} />
                  <span>2023 - Present</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} />
                  <span>India Noida </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-neon-500 text-lg">Key Focus Areas:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse"></div>
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse"></div>
                    <span>Database Management Systems</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse"></div>
                    <span>Web Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-500 rounded-full animate-pulse"></div>
                    <span>Software Engineering</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;