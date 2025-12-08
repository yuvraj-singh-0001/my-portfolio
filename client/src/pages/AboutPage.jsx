import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-neon-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated Border */}
              <div className="absolute inset-0 border-4 border-neon-500/30 rounded-3xl animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-2">
                <div className="rounded-xl overflow-hidden">
                  {/* Replace with your photo */}
                  <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <p className="text-gray-400">Your Photo Here</p>
                      <p className="text-sm text-gray-500 mt-2">Add your image in public/images/profile.jpg</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-neon-500 to-accent text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                Available Now
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-accent to-secondary text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                Open to Work
              </div>
            </div>
          </div>
          
          {/* Right: About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">Hello! I'm Yuvraj Singh</h3>
              <p className="text-gray-300 text-lg">
                I'm a passionate Full Stack Developer specializing in creating beautiful, functional, 
                and user-friendly digital experiences. With expertise in modern web technologies, 
                I bring ideas to life through clean code and innovative solutions.
              </p>
              <p className="text-gray-400">
                Currently pursuing my BCA final year while working on real-world projects that solve 
                actual problems. I believe in continuous learning and staying updated with the latest 
                technologies.
              </p>
            </div>
            
            {/* Skills/Interests */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-dark p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="text-neon-500" />
                  <h4 className="font-semibold">Mission</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Build scalable solutions that create real value
                </p>
              </div>
              
              <div className="glass-dark p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="text-accent" />
                  <h4 className="font-semibold">Passion</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Clean code, great UX, and problem solving
                </p>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-500">40+</div>
                <div className="text-gray-400 text-sm">Commits/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">18/7</div>
                <div className="text-gray-400 text-sm">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">97%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-accent to-secondary rounded-xl font-semibold hover:from-neon-500 hover:to-accent transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;