import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(badgeRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
    .fromTo(textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' },
      "-=0.4"
    )
    .fromTo(imageRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' },
      "-=0.8"
    );
  }, { scope: heroRef });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 pb-20 overflow-hidden" ref={heroRef}>

      {/* Abstract Background Element */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary opacity-20 blur-[150px] rounded-full pointer-events-none -z-10 translate-x-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 flex flex-col items-start" ref={textRef}>
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-main bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide text-text-muted uppercase">Available for work</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-6">
              Full Stack <br/>
              <span className="text-text-muted">Developer</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-muted max-w-xl mb-10 leading-relaxed font-light">
              I build high-performance, scalable web applications with <span className="text-white font-medium">7 years of experience</span> across PHP, Laravel, and modern JavaScript ecosystems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300 rounded-full font-medium tracking-wide text-lg flex items-center gap-2">
                View Projects
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/5 border border-border-main text-white hover:bg-white/10 transition-colors duration-300 rounded-full font-medium tracking-wide text-lg">
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative" ref={imageRef}>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-border-main bg-bg-alt">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img
                src="/images/Hamza-Daniyal.webp"
                alt="Hamza Daniyal"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-bold text-xl">Hamza Daniyal</p>
                <p className="text-primary font-medium">Software Engineer</p>
              </div>
            </div>

            {/* Floating Tech Stack Badges */}
            <div className="absolute top-10 -right-6 bg-white/10 backdrop-blur-md border border-border-main p-4 rounded-2xl animate-[bounce_4s_ease-in-out_infinite]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
            </div>
            <div className="absolute bottom-20 -left-8 bg-white/10 backdrop-blur-md border border-border-main p-4 rounded-2xl animate-[bounce_5s_ease-in-out_infinite_reverse]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" alt="Laravel" className="w-8 h-8" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
