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
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden" ref={sectionRef}>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="bg-white/50 backdrop-blur-xl border border-glass-border p-12 md:p-20 rounded-3xl max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-sm font-bold font-bellota text-secondary tracking-[0.3em] uppercase mb-4">What's Next?</h2>
          <h3 className="text-5xl md:text-7xl font-valturin text-text-main mb-8">Get In Touch</h3>

          <p className="max-w-xl mx-auto text-text-muted font-bellota text-lg mb-12">
            Whether you have a question, a project proposal, or just want to say hi,
            I'll try my best to get back to you! Currently open for new opportunities.
          </p>

          <a
            href="mailto:hamzadaniyal455@yahoo.com"
            className="inline-block px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 hover:shadow-[0_10px_25px_rgba(59,130,246,0.5)] transition-all duration-300 rounded-full font-bellota font-bold text-lg tracking-wider"
          >
            Say Hello
          </a>

          <div className="mt-16 flex flex-col items-center justify-center gap-2 font-bellota text-text-muted">
            <p>Or call directly at</p>
            <a href="tel:+923332303315" className="text-2xl text-text-main hover:text-primary font-bold transition-colors duration-300">
              +92 (333) 230-3315
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
