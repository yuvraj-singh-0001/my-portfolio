import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ChevronDown, Code, Server, Database, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        // Word completed, start deleting
        setIsDeleting(true);
      } else if (isDeleting && typedText === '') {
        // Word deleted, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        // Type or delete
        setTypedText(
          isDeleting 
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-20 md:pt-24 pb-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0c0c0e] to-secondary/20">
        {/* Animated gradient dots */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-500/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-neon-500/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
      
      {/* Large floating elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Text & CTA */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 px-4 py-2.5 rounded-full border border-neon-500/30 bg-neon-500/10 backdrop-blur-sm group hover:border-neon-500/50 transition-all duration-300">
              <div className="relative">
                <Sparkles className="text-neon-500" size={18} />
                <div className="absolute inset-0 bg-neon-500/20 rounded-full blur-sm"></div>
              </div>
              <span className="text-sm md:text-base text-neon-500 font-medium">Available for Freelance & Full-time</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                  Yuvraj
                </span>
                <span className="block bg-gradient-to-r from-accent via-neon-500 to-secondary bg-clip-text text-transparent">
                  Singh
                </span>
              </h1>
              
              {/* Animated Typing Text */}
              <div className="h-16 flex items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">
                  I'm a{' '}
                  <span className="text-neon-500 relative">
                    {typedText}
                    <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-[2px] h-3/4 bg-neon-500 animate-pulse"></span>
                  </span>
                </h2>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              I craft <span className="text-neon-500 font-semibold">digital experiences</span> that are not only 
              visually stunning but also <span className="text-accent font-semibold">technically robust</span>. 
              Specializing in full-stack development, I transform ideas into scalable, high-performance solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary group-hover:from-neon-500 group-hover:to-accent transition-all duration-300"></div>
                {/* Inner background */}
                <div className="absolute inset-[1px] bg-primary rounded-[11px]"></div>
                {/* Content */}
                <span className="relative bg-gradient-to-r from-accent to-neon-500 bg-clip-text text-transparent group-hover:from-neon-500 group-hover:to-accent transition-all duration-300">
                  Hire Me Now
                </span>
                <ArrowRight className="relative text-neon-500 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 border-2 border-neon-500/30 rounded-xl font-semibold flex items-center space-x-3 hover:border-neon-500 hover:bg-neon-500/5 transition-all duration-300"
              >
                <span className="text-white">View Projects</span>
                <ChevronDown className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: '5+', label: 'Projects Done', icon: '🚀', color: 'text-neon-500' },
                { value: '6', label: 'Month Experience', icon: '💼', color: 'text-accent' },
                { value: '95%', label: 'Client Satisfaction', icon: '⭐', color: 'text-secondary' },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} flex items-center justify-center space-x-2 mb-2`}>
                    <span className="text-2xl">{stat.icon}</span>
                    <span>{stat.value}</span>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Profile & Visual Elements */}
          <div className="relative">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Main Profile Container */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-1 border border-gray-800/50">
                {/* Profile Image - Replace with your photo */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black relative group">
                  {/* Your Photo Here */}
                  <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for your image - Replace with <img src="/images/profile.jpg" /> */}
                    <div className="text-center">
                      <div className="text-8xl md:text-9xl mb-4 animate-float">👨‍💻</div>
                      <p className="text-gray-400 text-sm">Add your photo in public/images/profile.jpg</p>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="text-center">
                        <p className="text-white font-semibold mb-2">Yuvraj Singh</p>
                        <p className="text-gray-300 text-sm">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 border-2 border-neon-500/10 rounded-2xl group-hover:border-neon-500/30 transition-all duration-300"></div>
                </div>
                
                {/* Floating Tech Cards */}
                <div className="absolute -top-4 -left-4 animate-bounce-slow">
                  <div className="glass-dark px-4 py-2 rounded-xl border border-neon-500/20 flex items-center space-x-2 shadow-lg">
                    <Code className="text-neon-500" size={18} />
                    <span className="text-sm font-semibold text-white">React</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                  <div className="glass-dark px-4 py-2 rounded-xl border border-accent/20 flex items-center space-x-2 shadow-lg">
                    <Server className="text-accent" size={18} />
                    <span className="text-sm font-semibold text-white">Node.js</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-6 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                  <div className="glass-dark px-4 py-2 rounded-xl border border-secondary/20 flex items-center space-x-2 shadow-lg">
                    <Database className="text-secondary" size={18} />
                    <span className="text-sm font-semibold text-white">MongoDB</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Contact Card */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 glass-dark rounded-2xl p-4 shadow-xl border border-gray-700/50 animate-float" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-br from-neon-500/20 to-accent/20 rounded-lg">
                    <Mail className="text-neon-500" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Let's connect</p>
                    <a 
                      href="mailto:singhyuvraj8420@gmail.com" 
                      className="text-white font-medium hover:text-neon-500 transition-colors"
                    >
                      singhyuvraj8420@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions Bar */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <button className="glass-dark p-4 rounded-xl flex items-center justify-center space-x-3 group hover:border-neon-500/30 transition-all duration-300">
            <Download className="text-neon-500 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Download CV</span>
          </button>
          
          <button 
            onClick={scrollToProjects}
            className="glass-dark p-4 rounded-xl flex items-center justify-center space-x-3 group hover:border-accent/30 transition-all duration-300"
          >
            <Code className="text-accent group-hover:scale-110 transition-transform" />
            <span className="font-medium">View Projects</span>
          </button>
          
          <button 
            onClick={scrollToContact}
            className="glass-dark p-4 rounded-xl flex items-center justify-center space-x-3 group hover:border-secondary/30 transition-all duration-300"
          >
            <Mail className="text-secondary group-hover:scale-110 transition-transform" />
            <span className="font-medium">Contact Me</span>
          </button>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 animate-pulse">Scroll to explore</span>
          <div className="relative">
            <div className="w-6 h-10 border-2 border-neon-500/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-neon-500 rounded-full mt-2 animate-bounce"></div>
            </div>
            <div className="absolute inset-0 border-2 border-neon-500/10 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;