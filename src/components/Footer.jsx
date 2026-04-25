import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bg-main text-white pt-20 pb-10 relative border-t border-border-main overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Massive Screen-Wide Name */}
        <div className="flex justify-center w-full mb-20 overflow-hidden">
          <h2 className="text-[12vw] font-bold text-white tracking-tighter leading-none whitespace-nowrap opacity-10 uppercase">
            Hamza Daniyal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start mb-16">

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-full font-bold text-sm">HD</span>
              Hamza Daniyal
            </h3>
            <p className="text-text-muted text-lg max-w-sm">
              Engineering digital futures with robust backend logic and striking frontend aesthetics.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-valturin">Navigation</h4>
            <ul className="space-y-3 text-text-muted">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-valturin">Contact</h4>
            <div className="flex flex-col space-y-3">
              <a href="tel:+923332303315" className="text-text-muted hover:text-primary transition-colors flex items-center gap-3">
                <FaPhone size={16} /> +92 (333) 230-3315
              </a>
              <a href="mailto:hamzadaniyal455@yahoo.com" className="text-text-muted hover:text-primary transition-colors flex items-center gap-3">
                <FaEnvelope size={16} /> Email
              </a>
              <a href="https://github.com/MIAN-SAHAB" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors flex items-center gap-3">
                <FaGithub size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/hamza-daniyal/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors flex items-center gap-3">
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-main pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
          <p>
            &copy; {new Date().getFullYear()} Hamza Daniyal. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            Based in Karachi, Pakistan
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
