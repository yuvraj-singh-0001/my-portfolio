import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-12  mb-5 md:py-16 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-neon-500/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neon-500/30 bg-neon-500/10 backdrop-blur-sm mb-4">
            <GraduationCap className="text-neon-500 w-4 h-4" />
            <span className="text-sm text-neon-500 font-medium">Education Journey</span>
          </div>

          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-neon-500 to-accent bg-clip-text text-transparent">
              Academic Background
            </span>
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* BCA Card */}
            <div className="glass-dark rounded-2xl p-6 border border-neon-500/20 hover:border-neon-500/40 transition-all duration-300">
              <div className="flex items-start space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-neon-500/20 to-accent/20 rounded-lg">
                  <GraduationCap className="text-neon-500 w-6 h-6" />
                </div>
                <div>
                  <span className="inline-flex items-center px-3 py-1 bg-neon-500/10 rounded-full text-xs text-neon-500 font-medium mb-2">
                    Current
                  </span>
                  <h3 className="text-xl font-bold text-white">BCA</h3>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-medium">IGNOU University</p>
                  <p className="text-sm text-gray-400">Bachelor of Computer Applications</p>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>2023 – Present</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Noida, India</span>
                </div>

                <div className="pt-2">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="text-neon-500 w-4 h-4" />
                    <span className="text-sm text-gray-300">Focus Areas:</span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {[
                      "Web Development",
                      "Database Systems",
                      "Software Engineering",
                      "Data Structures"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-neon-500/50 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 12th Card */}
            <div className="glass-dark rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="flex items-start space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg">
                  <Award className="text-accent w-6 h-6" />
                </div>
                <div>
                  <span className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full text-xs text-accent font-medium mb-2">
                    Completed
                  </span>
                  <h3 className="text-xl font-bold text-white">12th (Science)</h3>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-medium">Devdhari Yadav Inter College</p>
                  <p className="text-sm text-gray-400">Science Stream</p>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>2022 – 2023</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Muderachand, Deoria</span>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Percentage:</span>
                    <span className="text-lg font-bold text-accent">65%</span>
                  </div>

                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="text-accent w-4 h-4" />
                      <span className="text-sm text-gray-300">Subjects:</span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">Physics</span>
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">Chemistry</span>
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">Biology</span>
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">English</span>
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">Hindi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10th Card */}
            <div className="glass-dark rounded-2xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
              <div className="flex items-start space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-secondary/20 to-neon-500/20 rounded-lg">
                  <Award className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <span className="inline-flex items-center px-3 py-1 bg-secondary/10 rounded-full text-xs text-secondary font-medium mb-2">
                    Completed
                  </span>
                  <h3 className="text-xl font-bold text-white">10th (High School)</h3>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-medium">Lohiya Intermediate College</p>
                  <p className="text-sm text-gray-400">UP Board</p>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>2021 – 2022</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Sahawa- Deoria, Gorkhpur, UP</span>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Percentage:</span>
                    <span className="text-lg font-bold text-secondary">85.38%</span>
                  </div>

                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="text-secondary w-4 h-4" />
                      <span className="text-sm text-gray-300">Main Subjects:</span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">Mathematics</span>
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">Science</span>
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">English</span>
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">Social Science</span>
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">Hindi</span>
                      <span className="px-2 py-1 bg-gray-800/50 rounded text-xs">Art</span>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline Visual */}
          <div className="mt-10 hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-neon-500 via-accent to-secondary transform -translate-y-1/2"></div>

              {/* Timeline Dots */}
              {/* <div className="relative flex justify-between px-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-lg"></div>
                  <span className="text-xs text-gray-400 mt-2">2022</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg"></div>
                  <span className="text-xs text-gray-400 mt-2">2023</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-neon-500 rounded-full border-2 border-white shadow-lg shadow-neon-500/30 animate-pulse"></div>
                  <span className="text-xs text-gray-400 mt-2">Present</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;