import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
    )
    .fromTo(imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' },
      "-=0.8"
    );
  }, { scope: heroRef });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20" ref={heroRef}>

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between z-10">

        <div className="md:w-1/2 mt-12 md:mt-0" ref={textRef}>
          <p className="text-primary text-lg mb-4 tracking-widest uppercase font-bold font-bellota">Hello, I am</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-valturin text-text-main leading-tight mb-4 drop-shadow-sm">
            Hamza <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Daniyal</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-text-muted font-bellota mb-8">
            Full Stack Developer
          </h2>
          <div className="flex gap-6">
            <a href="#projects" className="px-8 py-4 bg-primary text-white hover:bg-secondary transition-all duration-300 rounded-full shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-1 font-bellota font-bold tracking-wide">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 transition-colors duration-300 rounded-full font-bellota font-bold tracking-wide">
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end" ref={imageRef}>
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Futuristic glowing border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"></div>

            <div className="absolute inset-8 rounded-full overflow-hidden bg-white shadow-2xl border-4 border-white">
              <img
                src="/images/Hamza-Daniyal.webp"
                alt="Hamza Daniyal"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
