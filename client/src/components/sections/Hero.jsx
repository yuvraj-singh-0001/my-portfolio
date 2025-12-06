import React from 'react';
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0c0c0e] to-secondary/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neon-500/30 bg-neon-500/5">
              <Sparkles size={16} className="text-neon-500" />
              <span className="text-sm text-neon-500">Full Stack Developer</span>
            </div>
            
            <h1 className="font-poppins text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">Yuvraj Singh</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent via-neon-500 to-accent bg-clip-text text-transparent">
                  Building Digital Systems
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-neon-500 animate-pulse"></span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl">
              Crafting secure, scalable, and high‑impact digital solutions with modern technologies.
              Specializing in full‑stack development with focus on performance and user experience.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-accent to-secondary rounded-xl font-semibold flex items-center space-x-3 hover:from-neon-500 hover:to-accent transition-all duration-300 shadow-lg hover:shadow-neon-500/30">
                <span>Hire Me Now</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-neon-500/50 rounded-xl font-semibold hover:bg-neon-500/10 hover:border-neon-500 transition-all duration-300">
                View Portfolio
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              {[
                { value: '15+', label: 'Projects' },
                { value: '2+', label: 'Years Experience' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-neon-500">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Geometric Shapes */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Geometric Grid */}
              <div className="absolute inset-0 border-2 border-neon-500/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-4 border-2 border-accent/20 rounded-2xl transform -rotate-6"></div>
              <div className="absolute inset-8 border-2 border-secondary/20 rounded-2xl transform rotate-12"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-neon-500 rounded-xl animate-float"></div>
              <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-accent rounded-xl animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-secondary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Code Preview */}
              <div className="absolute bottom-0 left-0 right-0 glass-dark rounded-xl p-4 m-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-sm font-mono">
                  <code className="text-gray-300">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-neon-500">developer</span>{' '}
                    <span className="text-purple-400">=</span>{' '}
                    <span className="text-yellow-400">{'{'}</span>{'\n'}
                    &nbsp;&nbsp;<span className="text-blue-400">name</span>:{' '}
                    <span className="text-green-400">"Yuvraj Singh"</span>,{'\n'}
                    &nbsp;&nbsp;<span className="text-blue-400">role</span>:{' '}
                    <span className="text-green-400">"Full Stack Dev"</span>,{'\n'}
                    &nbsp;&nbsp;<span className="text-blue-400">stack</span>:{' '}
                    <span className="text-orange-400">[</span>
                    <span className="text-green-400">"React"</span>,{' '}
                    <span className="text-green-400">"Node.js"</span>,{' '}
                    <span className="text-green-400">"MongoDB"</span>
                    <span className="text-orange-400">]</span>{'\n'}
                    <span className="text-yellow-400">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="rotate-90 text-neon-500" size={24} />
      </div>
    </section>
  );
};

export default Hero;