import React from 'react';
import { User, Download } from 'lucide-react';
import YuvrajImage from '../assets/images/Yuvraj-singh-about-image.png';
import ResumePdf from '../assets/resume-cv/Yuvraj_Singh_Resume 1.pdf';

const About = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = ResumePdf;
    link.download = 'Yuvraj_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen py-12 md:py-16 lg:py-20 relative flex items-center">
      {/* Original About Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10"></div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-neon-500/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-neon-500/30 bg-neon-500/10 backdrop-blur-sm mb-3">
            <User className="text-neon-500 w-4 h-4" />
            <span className="text-sm text-neon-500 font-medium">About Me</span>
          </div>
          
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-white via-neon-500 to-accent bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
        </div>
        
        {/* Content - POSITIONS SWAPPED */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT: Image Section (Now on left side) */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-3 border border-gray-800/50">
                {/* Professional Image Container */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  {/* Perfect square for professional photo */}
                  <div className="aspect-square w-full flex items-center justify-center">
                    <img
                      src={YuvrajImage}
                      alt="Yuvraj Singh - Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Professional overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Hover effect - will look great with real photo */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-white text-xl font-bold mb-2">Yuvraj Singh</p>
                      <p className="text-gray-300 mb-4">Full Stack Developer</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1 bg-neon-500/20 backdrop-blur-sm rounded-lg text-sm text-white">React</span>
                        <span className="px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-lg text-sm text-white">Node.js</span>
                        <span className="px-3 py-1 bg-secondary/20 backdrop-blur-sm rounded-lg text-sm text-white">MongoDB</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-3 -left-3">
                  <div className="glass-dark px-3 py-1.5 rounded-lg border border-neon-500/30 flex items-center space-x-2 shadow-lg">
                    <span className="text-sm font-semibold text-white">Available Now</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 -right-3">
                  <div className="glass-dark px-3 py-1.5 rounded-lg border border-accent/30 flex items-center space-x-2 shadow-lg">
                    <span className="text-sm font-semibold text-white">Open to Work</span>
                  </div>
                </div>
              </div>
              
              {/* Stats - Positioned below image */}
              <div className="glass-dark mt-6 p-4 rounded-xl border border-gray-700/50">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-neon-500">40+</div>
                    <div className="text-sm text-gray-400">Commits</div>
                  </div>
                  <div className="text-center border-x border-gray-700/30">
                    <div className="text-xl md:text-2xl font-bold text-accent">18/7</div>
                    <div className="text-sm text-gray-400">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-secondary">97%</div>
                    <div className="text-sm text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT: Text Content (Now on right side) */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Hello! I'm <span className="text-neon-500">Yuvraj Singh</span>
              </h3>
              
              <div className="space-y-3">
                <p className="text-gray-300 text-lg">
                  I'm a passionate <span className="text-neon-500 font-semibold">Full Stack Developer</span> specializing in creating beautiful, functional, 
                  and user-friendly digital experiences.
                </p>
                
                <p className="text-gray-400">
                  With expertise in modern web technologies, I bring ideas to life through clean code 
                  and innovative solutions. Currently pursuing my BCA final year while working on 
                  real-world projects that solve actual problems.
                </p>
                
                <p className="text-gray-400">
                  I believe in continuous learning and staying updated with the latest technologies 
                  to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
            
            {/* Key Points */}
            <div>
              <h4 className="font-semibold text-lg text-gray-300 mb-3">What I focus on:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Clean, maintainable code architecture",
                  "User-centric design approach",
                  "Problem-solving mindset",
                  "Timely project delivery",
                  "Continuous skill improvement",
                  "Quality over quantity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-neon-500 mt-1">•</span>
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Download Button */}
            <div className="pt-2">
              <button
                onClick={downloadResume}
                className="group relative px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary group-hover:from-neon-500 group-hover:to-accent transition-all duration-300" />
                <div className="absolute inset-[1px] bg-primary rounded-[11px]" />
                <span className="relative bg-gradient-to-r from-accent to-neon-500 bg-clip-text text-transparent group-hover:from-neon-500 group-hover:to-accent transition-all duration-300">
                  Download Resume
                </span>
                <Download className="relative text-neon-500 group-hover:translate-y-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;