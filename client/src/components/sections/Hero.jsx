import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
              <Sparkles size={18} className="mr-2" />
              <span className="font-medium">Available for Hire & Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600">Yuvraj Singh</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
              Full Stack Developer & Problem Solver
            </h2>
            
            <p className="text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0">
              I build high-performance web applications with React, Node.js, and modern technologies.
              Passionate about creating solutions that make a difference and deliver real value.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>Hire Me</span>
                <ArrowRight size={20} />
              </Link>
              
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:your.email@gmail.com"
                className="p-3 bg-gray-100 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-4 bg-white rounded-xl shadow">
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-gray-500 text-sm">Projects Done</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-gray-500 text-sm">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-gray-500 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile */}
          <div className="relative">
            <div className="max-w-md mx-auto">
              <div className="relative">
                {/* Main Profile Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border">
                  {/* Profile Image */}
                  <div className="w-48 h-48 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                    <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl mb-2">👨‍💻</div>
                        <div className="text-blue-600 font-bold">Yuvraj</div>
                        <div className="text-gray-500 text-sm">Full Stack Dev</div>
                      </div>
                    </div>
                    
                    {/* Decorative Rings */}
                    <div className="absolute -inset-2 border-2 border-blue-300 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute -inset-4 border-2 border-purple-300 rounded-full animate-ping opacity-10 animation-delay-1000"></div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="text-center mb-6">
                    <h3 className="font-bold text-lg mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['React', 'Node.js', 'MongoDB', 'Tailwind', 'MySQL', 'AWS'].map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Availability Status */}
                  <div className="flex items-center justify-center gap-2 bg-green-50 text-green-700 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Available for new projects</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border animate-bounce">
                  <div className="text-center">
                    <div className="text-xl">🚀</div>
                    <div className="text-xs font-bold mt-1">Fast</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border">
                  <div className="text-center">
                    <div className="text-lg">⚡</div>
                    <div className="text-xs font-bold">Reliable</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border rotate-12">
                  <div className="text-center">
                    <div className="text-lg">🎯</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}