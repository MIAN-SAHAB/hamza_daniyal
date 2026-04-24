import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(textRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="about" className="py-24 md:py-32 bg-glass backdrop-blur-md relative border-y border-glass-border shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div ref={textRef}>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent"></div>
            <h2 className="text-4xl md:text-5xl font-valturin text-text-main">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-lg text-text-muted font-bellota leading-relaxed">
            <div>
              <p className="mb-6">
                With over <span className="text-primary font-bold">7 years of experience</span> in full-stack development,
                I have honed my skills in building robust, scalable, and visually compelling web applications.
                My journey has been driven by a passion for creating seamless user experiences and solving complex architectural challenges.
              </p>
              <p>
                I thrive in environments that demand both creative problem-solving and technical excellence.
                Whether it's architecting a backend database or crafting interactive frontend animations,
                I approach every project with a modern mindset and an eye for sleek, eye-catching design.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl border border-glass-border shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <h3 className="text-2xl text-text-main font-valturin mb-4">My Core Stack</h3>
              <p className="mb-6 text-sm">
                I specialize in bridging the gap between elegant interfaces and powerful backend systems using modern technologies.
              </p>
              <div className="flex flex-wrap gap-3">
                {['PHP', 'Laravel', 'SQL', 'MySQL', 'WordPress', 'Yii', 'React', 'TypeScript', 'Next.js'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-bold text-primary shadow-sm hover:scale-105 transition-transform duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
