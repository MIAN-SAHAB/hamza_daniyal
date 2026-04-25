import React, { useState, useEffect } from 'react';
import { usePopup } from '../context/PopupContext';

const Navbar = () => {
  const { openPopup } = usePopup();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-glass backdrop-blur-md border-b border-border-main py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight text-text-main hover:text-primary transition-colors duration-300 flex items-center gap-3">
          <span className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-full font-bold text-sm">HD</span>
          <span>Hamza Daniyal</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center bg-white/5 px-6 py-2 rounded-full border border-border-main backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-muted hover:text-white font-medium transition-colors duration-300 text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={openPopup}
            className="cursor-pointer px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-colors text-sm"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-text-main focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-main border-t border-border-main py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-main hover:text-primary font-medium transition-colors duration-300 text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
