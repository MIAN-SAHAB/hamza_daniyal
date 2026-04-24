import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-alt border-t border-charcoal/30 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/images/footer-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">

          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="font-valturin text-3xl text-offwhite mb-2">Hamza Daniyal</h3>
            <p className="text-gray font-bellota text-lg">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/MIAN-SAHAB" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-charcoal flex items-center justify-center text-gray hover:text-dark hover:bg-cream hover:border-cream transition-all duration-300">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hamza-daniyal/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-charcoal flex items-center justify-center text-gray hover:text-dark hover:bg-cream hover:border-cream transition-all duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:hamzadaniyal455@yahoo.com" className="w-12 h-12 rounded-full border border-charcoal flex items-center justify-center text-gray hover:text-dark hover:bg-cream hover:border-cream transition-all duration-300">
              <FaEnvelope size={20} />
            </a>
            <a href="tel:+923332303315" className="w-12 h-12 rounded-full border border-charcoal flex items-center justify-center text-gray hover:text-dark hover:bg-cream hover:border-cream transition-all duration-300">
              <FaPhone size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-charcoal/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray/60 text-sm font-bellota mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hamza Daniyal. All rights reserved.
          </p>
          <div className="text-gray/60 text-sm font-bellota">
            Designed & Built with React & GSAP
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
