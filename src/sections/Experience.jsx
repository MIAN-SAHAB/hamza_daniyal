import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  const experiences = [
    {
      year: '2021 - Present',
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading a team of developers to build scalable enterprise applications using Laravel and React. Architected cloud-based solutions and improved database query performance by 40%.',
    },
    {
      year: '2018 - 2021',
      role: 'Full Stack Developer',
      company: 'Digital Creative Agency',
      description: 'Developed custom WordPress themes and plugins. Built interactive frontend interfaces using React and Next.js. Handled complex API integrations and database migrations.',
    },
    {
      year: '2016 - 2018',
      role: 'Backend Developer',
      company: 'Web Solutions Co.',
      description: 'Focused on server-side logic using PHP and Yii framework. Designed MySQL schemas and optimized backend processes for high-traffic e-commerce platforms.',
    }
  ];

  useGSAP(() => {
    // Animate the vertical line drawing down
    gsap.fromTo(lineRef.current,
      { height: 0 },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: true,
        }
      }
    );

    // Animate the items fading in
    gsap.fromTo('.exp-item',
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="experience" className="py-24 md:py-32 bg-white/30 backdrop-blur-sm relative" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent"></div>
          <h2 className="text-4xl md:text-5xl font-valturin text-text-main">Experience</h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/10">
            <div ref={lineRef} className="w-full bg-gradient-to-b from-primary via-secondary to-accent shadow-[0_0_15px_rgba(139,92,246,0.5)] origin-top"></div>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`exp-item relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-[-33px] md:left-1/2 md:-ml-[6px] mt-1.5 w-4 h-4 rounded-full bg-white border-4 border-secondary z-10 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <span className="text-secondary font-bold font-bellota text-sm tracking-widest bg-secondary/10 px-3 py-1 rounded-full inline-block mb-2">{exp.year}</span>
                  <h3 className="text-2xl font-valturin text-text-main mt-2">{exp.role}</h3>
                  <h4 className="text-lg text-primary font-bellota mb-4 font-bold">{exp.company}</h4>
                  <p className="text-text-muted font-bellota leading-relaxed text-sm md:text-base bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-glass-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {exp.description}
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
