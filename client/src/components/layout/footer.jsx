import React from 'react';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin />, href: 'https://www.linkedin.com/in/yuvraj-singh-001e/', label: 'LinkedIn' },
    { icon: <Github />, href: 'https://github.com/yuvraj-singh-0001', label: 'GitHub' },
    { icon: <Mail />, href: 'mailto:singhyuvraj8420@gmail.com', label: 'Email' },
  ];

  const contactInfo = [
    { icon: <Phone />, text: '+91 86013 00910' },
    { icon: <Mail />, text: 'singhyuvraj8420@gmail.com' },
    { icon: <MapPin />, text: 'India ,Noida ' },
  ];

  return (
    <footer className="relative border-t border-gray-800/50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-2 h-8 sm:h-10 bg-neon rounded-full animate-pulse"></div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold">Yuvraj Singh</h2>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Full Stack Developer specializing in building exceptional digital experiences
              that are fast, secure, and scalable.
            </p>
            <div className="mb-4">
              <p className="text-gray-300 text-sm sm:text-base">Available for opportunities</p>
            </div>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-neon hover:bg-neon/10 hover:text-neon transition-all duration-300"
                  aria-label={social.label}
                >
                  {React.cloneElement(social.icon, { 
                    size: 18,
                    className: "w-4 h-4 sm:w-5 sm:h-5"
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-3 lg:order-2">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                    {React.cloneElement(info.icon, { 
                      size: 16,
                      className: "w-3.5 h-3.5 sm:w-4 sm:h-4"
                    })}
                  </div>
                  <span className="text-sm sm:text-base break-all">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="order-2 lg:order-3">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h3>
            <div className="space-y-2 sm:space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-neon hover:translate-x-2 transition-all duration-300 text-sm sm:text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/50 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-500">
          <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Yuvraj Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;