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
      {/* Abstract futuristic background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cream/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between z-10">

        <div className="md:w-1/2 mt-12 md:mt-0" ref={textRef}>
          <p className="text-cream text-lg mb-4 tracking-widest uppercase font-bellota">Hello, I am</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-valturin text-offwhite leading-tight mb-4">
            Hamza <br/><span className="text-cream-light">Daniyal</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray font-bellota mb-8">
            Full Stack Developer
          </h2>
          <div className="flex gap-6">
            <a href="#projects" className="px-8 py-4 bg-cream text-dark hover:bg-offwhite transition-colors duration-300 rounded-full font-bellota font-bold tracking-wide">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 border border-charcoal text-offwhite hover:border-cream transition-colors duration-300 rounded-full font-bellota tracking-wide">
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end" ref={imageRef}>
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Futuristic glowing border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-green-light/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-cream/20 animate-[spin_15s_linear_infinite_reverse]"></div>

            <div className="absolute inset-8 rounded-full overflow-hidden bg-dark-alt border border-charcoal">
              <img
                src="/images/Hamza-Daniyal.webp"
                alt="Hamza Daniyal"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
