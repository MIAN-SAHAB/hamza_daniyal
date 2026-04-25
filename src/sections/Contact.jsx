import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePopup } from '../context/PopupContext';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { openPopup } = usePopup();
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="contact" className="py-32 bg-primary text-white relative border-t border-border-main" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12 text-center">

        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-10 text-white drop-shadow-md">
          Let's Work <br/> Together.
        </h2>

        <p className="text-xl md:text-3xl font-light mb-16 text-white/90 max-w-2xl mx-auto">
          Currently open for new opportunities. Whether you have a project or just want to say hi, I'll get back to you.
        </p>

        <button
          onClick={openPopup}
          className="cursor-pointer inline-flex items-center gap-4 px-12 py-6 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full font-bold text-xl tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1 mb-8"
        >
          Send an Email
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-white/80">
          <p className="text-lg">Or call directly at</p>
          <a href="tel:+923332303315" className="text-3xl text-white hover:text-black font-bold transition-colors duration-300">
            +92 (333) 230-3315
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
