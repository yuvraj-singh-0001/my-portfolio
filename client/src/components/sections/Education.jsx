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
          <div className="flex items-start space-x-6">
            <div className="p-4 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl">
              <GraduationCap size={32} className="text-neon-500" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-gray-300 mb-4">Final Year Student</p>
              
              <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>2022 - Present</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>India</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-neon-500">Key Focus Areas:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-500 rounded-full"></div>
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-500 rounded-full"></div>
                    <span>Database Management Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-500 rounded-full"></div>
                    <span>Web Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-500 rounded-full"></div>
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