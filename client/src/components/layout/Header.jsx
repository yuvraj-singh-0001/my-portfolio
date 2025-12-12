import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, href: '#home' },
    { name: 'About', icon: <User size={20} />, href: '#about' },
    { name: 'Skills', icon: <Code2 size={20} />, href: '#skills' },
    { name: 'Projects', icon: <Briefcase size={20} />, href: '#projects' },
    { name: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  ];

  // Function to handle Hire Me click
  const handleHireMeClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // On mobile, close menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-40 glass-dark border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-8 bg-neon-500 rounded-full animate-pulse"></div>
            <h1 className="font-poppins text-2xl font-bold bg-gradient-to-r from-accent to-neon-500 bg-clip-text text-transparent">
              Yuvraj Singh
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center space-x-2 text-gray-300 hover:text-neon-500 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(item.href);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.icon}
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            ))}
            <button 
              onClick={handleHireMeClick}
              className="px-6 py-2 bg-gradient-to-r from-accent to-secondary rounded-xl font-semibold hover:from-neon-500 hover:to-accent transition-all duration-300 shadow-lg hover:shadow-neon-500/20"
            >
              Hire Me
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-700 hover:border-neon-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector(item.href);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
              {/* Mobile Hire Me Button */}
              <button 
                onClick={handleHireMeClick}
                className="w-full py-3 bg-gradient-to-r from-accent to-secondary rounded-xl font-semibold hover:from-neon-500 hover:to-accent transition-all duration-300 shadow-lg hover:shadow-neon-500/20 mt-2"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;