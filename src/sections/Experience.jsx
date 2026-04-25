import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

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
    gsap.fromTo('.exp-item',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="experience" className="py-32 bg-bg-alt relative border-t border-border-main" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-item group relative flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 border border-border-main bg-bg-main rounded-3xl hover:border-primary transition-colors duration-500 overflow-hidden">

              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

              <div className="relative z-10 md:w-1/3 mb-6 md:mb-0">
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{exp.year}</span>
                <h3 className="text-3xl font-bold text-white tracking-tight">{exp.role}</h3>
                <h4 className="text-xl text-text-muted mt-1">{exp.company}</h4>
              </div>

              <div className="relative z-10 md:w-2/3 md:pl-12">
                <p className="text-text-muted font-light leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
