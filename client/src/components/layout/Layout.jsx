import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Floating CTA Button */}
      <button className="floating-cta group px-6 py-3 bg-gradient-to-r from-accent to-secondary rounded-full font-semibold flex items-center space-x-2 shadow-lg animate-pulse-glow hover:animate-none hover:from-neon-500 hover:to-accent transition-all duration-300">
        <span>Hire Me</span>
        <div className="w-2 h-2 bg-neon-500 rounded-full group-hover:animate-ping"></div>
      </button>
    </div>
  );
};

export default Layout;