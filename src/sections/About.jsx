import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: "play reverse play reverse",
      }
    });

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(statsRef.current.children,
      { scale: 0.9, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.5)' },
      "-=0.6"
    );
  }, { scope: sectionRef });

  const stats = [
    { number: "07+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "10+", label: "Tech Stacks" }
  ];

  return (
    <section id="about" className="py-32 bg-bg-main relative border-t border-border-main" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div>
            <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
              Engineering <br/>
              <span className="text-primary">Digital</span> Futures.
            </h2>

            <div ref={textRef} className="space-y-6 text-xl text-text-muted font-light leading-relaxed">
              <p>
                I am a passionate Full Stack Developer with over 7 years of experience crafting high-performance, scalable web applications. My expertise spans across robust backend architectures and highly interactive, polished frontend interfaces.
              </p>
              <p>
                From complex CRM systems in Laravel to blazing-fast modern web applications in React and Next.js, I bridge the gap between design and deeply complex logic to deliver products that are both technically profound and aesthetically striking.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div ref={statsRef} className="grid grid-cols-2 gap-6 w-full">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-8 border border-border-main bg-bg-alt rounded-3xl hover:border-primary transition-colors duration-500 group">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-text-muted font-medium text-sm tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
