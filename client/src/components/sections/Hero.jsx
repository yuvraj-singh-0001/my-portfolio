import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ChevronDown, Download, Mail, Code, Server, Database } from 'lucide-react';
import YuvrajImage from '../../assets/images/Yuvraj-singh-portimage.png';
import ResumePdf from '../../assets/resume-cv/Yuvraj_Singh_Resume 1.pdf';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full Stack Developer', 'Web Developer', 'Problem Solver', 'UI/UX Enthusiast'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, roles]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = ResumePdf;
    link.download = 'Yuvraj_Singh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen py-8 md:py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0c0c0e] to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
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
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-500/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1s' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-4rem)] gap-8 md:gap-12 lg:gap-16">
          {/* Left Content - Text & CTA */}
          <div className="w-full lg:w-1/2 space-y-5 md:space-y-7 text-center lg:text-left mt-4 lg:mt-0">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-neon-500/30 bg-neon-500/10 backdrop-blur-sm group hover:border-neon-500/50 transition-all duration-300">
              <div className="relative">
                <Sparkles className="text-neon-500 w-4 h-4" />
                <div className="absolute inset-0 bg-neon-500/20 rounded-full blur-sm" />
              </div>
              <span className="text-xs md:text-sm text-neon-500 font-medium">
                Available for Freelance & Full-time
              </span>
            </div>

            {/* Heading + Subtitle with Typing Animation */}
            <div className="space-y-2 md:space-y-3">
              <h1 className="font-poppins text-4xl pb-2 sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-[1.08] bg-gradient-to-r from-white via-neon-500 to-secondary bg-clip-text text-transparent tracking-tight">
                Yuvraj Singh
              </h1>

              {/* Typing Animation Container */}
              <div className="flex items-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium">
                  I'm{' '}
                  <span className="text-neon-500 font-bold relative">
                    {displayText}
                    <span className="absolute -right-1 top-0 h-full w-[2px] bg-neon-500 animate-pulse"></span>
                  </span>
                </h2>
              </div>

              <p className="text-base sm:text-lg md:text-xl mb-2 text-gray-300 max-w-xl mx-auto lg:mx-0">
                Crafting visually stunning and technically robust digital experiences.
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-4 pt-2">
              {/* Primary row */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {/* Hire Me */}
                <button
                  onClick={scrollToContact}
                  className="group relative px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base font-semibold flex items-center space-x-2 transition-all duration-300 overflow-hidden min-w-[140px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary group-hover:from-neon-500 group-hover:to-accent transition-all duration-300" />
                  <div className="absolute inset-[1px] bg-primary rounded-[11px]" />
                  <span className="relative bg-gradient-to-r from-accent to-neon-500 bg-clip-text text-transparent group-hover:from-neon-500 group-hover:to-accent transition-all duration-300">
                    Hire Me Now
                  </span>
                  <ArrowRight
                    className="relative text-neon-500 group-hover:translate-x-2 transition-transform"
                    size={18}
                  />
                </button>

                {/* View Projects */}
                <button
                  onClick={scrollToProjects}
                  className="group px-6 py-3 md:px-8 md:py-4 border-2 border-neon-500/30 rounded-xl text-sm md:text-base font-semibold flex items-center space-x-2 hover:border-neon-500 hover:bg-neon-500/5 transition-all duration-300 min-w-[140px]"
                >
                  <span className="text-white">View Projects</span>
                  <ChevronDown
                    className="group-hover:rotate-180 transition-transform duration-300"
                    size={18}
                  />
                </button>
              </div>

              {/* Secondary row */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start max-w-md">
                {/* Download CV */}
                <button
                  onClick={downloadCV}
                  className="glass-dark px-4 py-3 md:px-6 md:py-3.5 rounded-xl flex items-center space-x-2 group hover:border-neon-500/30 transition-all duration-300 text-sm md:text-base min-w-[140px] justify-center"
                >
                  <Download className="text-neon-500 group-hover:scale-110 transition-transform" size={18} />
                  <span className="font-medium">Download CV</span>
                </button>

                {/* Contact Me */}
                <button
                  onClick={scrollToContact}
                  className="glass-dark px-4 py-3 md:px-6 md:py-3.5 rounded-xl flex items-center space-x-2 group hover:border-secondary/30 transition-all duration-300 text-sm md:text-base min-w-[140px] justify-center"
                >
                  <Mail className="text-secondary group-hover:scale-110 transition-transform" size={18} />
                  <span className="font-medium">Contact Me</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main Profile Container */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-1.5 border border-gray-800/50">
                {/* Profile Image */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black relative group">
                  <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center relative overflow-hidden">
                    {/* Profile Image */}
                    <div className="relative w-full h-full">
                      <img
                        src={YuvrajImage}
                        alt="Yuvraj Singh - Full Stack Developer"
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-10 px-4">
                      <div className="text-center mb-4">
                        <p className="text-white font-bold text-xl sm:text-xl">Yuvraj Singh</p>
                        <div className="h-8 flex items-center justify-center">
                          <p className="text-gray-300 text-sm sm:text-base">
                            I'm{' '}
                            <span className="text-neon-500 font-semibold">
                              {displayText || "a Full Stack Developer"}
                            </span>
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={scrollToContact}
                        className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-neon-500 to-accent rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
                      >
                        Get in Touch
                      </button>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 border-2 border-neon-500/10 rounded-2xl group-hover:border-neon-500/30 transition-all duration-300" />
                </div>

                {/* Tech Stack Badges */}
                

                <div
                  className="absolute -bottom-4 -right-4 animate-bounce-slow hidden sm:block"
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="glass-dark px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-accent/20 flex items-center space-x-2 shadow-lg">
                    <Server className="text-accent" size={16} />
                    <span className="text-xs sm:text-sm font-semibold text-white">Node.js</span>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 -left-6 animate-bounce-slow hidden lg:block"
                  style={{ animationDelay: '1s' }}
                >
                  
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 glass-dark rounded-xl px-4 py-3 shadow-xl border border-gray-700/50 w-11/12 max-w-xs animate-float"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-neon-500/20 to-accent/20 rounded-lg">
                    <Mail className="text-neon-500 w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400 truncate">Let's connect</p>
                    <a
                      href="mailto:singhyuvraj8420@gmail.com"
                      className="text-sm text-white font-medium hover:text-neon-500 transition-colors truncate block"
                      title="singhyuvraj8420@gmail.com"
                    >
                      singhyuvraj8420@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-1.5">
          <span className="text-xs sm:text-sm text-gray-500 animate-pulse">Scroll to explore more</span>
          <div className="relative">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-neon-500/30 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-neon-500 rounded-full mt-1.5 sm:mt-2 animate-bounce" />
            </div>
            <div className="absolute inset-0 border-2 border-neon-500/10 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;