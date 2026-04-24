import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="contact" className="py-24 md:py-40 bg-dark relative overflow-hidden" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-green/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-sm font-bellota text-cream tracking-[0.3em] uppercase mb-4">What's Next?</h2>
        <h3 className="text-5xl md:text-7xl font-valturin text-offwhite mb-8">Get In Touch</h3>

        <p className="max-w-xl mx-auto text-gray font-bellota text-lg mb-12">
          Whether you have a question, a project proposal, or just want to say hi,
          I'll try my best to get back to you! Currently open for new opportunities.
        </p>

        <a
          href="mailto:hamzadaniyal455@yahoo.com"
          className="inline-block px-10 py-5 bg-transparent border-2 border-cream text-cream hover:bg-cream hover:text-dark transition-all duration-300 rounded-full font-bellota text-lg tracking-wider"
        >
          Say Hello
        </a>

        <div className="mt-16 flex flex-col items-center justify-center gap-2 font-bellota text-gray">
          <p>Or call directly at</p>
          <a href="tel:+923332303315" className="text-2xl text-offwhite hover:text-cream transition-colors duration-300">
            +92 (333) 230-3315
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
