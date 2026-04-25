import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.bento-item',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
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
    <section id="skills" className="py-32 bg-white text-black relative" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Stack & <br/> Capabilities</h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">

          {/* Frontend (Large Box) */}
          <div className="bento-item md:col-span-2 md:row-span-2 bg-gray-50 border border-border-dark p-10 rounded-3xl flex flex-col justify-between hover:bg-gray-100 transition-colors">
            <div>
              <h3 className="text-3xl font-bold mb-4">Frontend Engineering</h3>
              <p className="text-gray-600 text-lg">Building complex, interactive interfaces with modern JavaScript frameworks.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-full font-medium text-sm shadow-sm">{skill}</span>
              ))}
            </div>
          </div>

          {/* Backend (Wide Box) */}
          <div className="bento-item md:col-span-2 bg-black text-white p-10 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/40 transition-colors duration-500"></div>
            <h3 className="text-3xl font-bold mb-4 relative z-10">Backend Systems</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {['PHP', 'Laravel', 'Node.js', 'Yii'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full font-medium text-sm">{skill}</span>
              ))}
            </div>
          </div>

          {/* Databases (Small Box) */}
          <div className="bento-item border border-border-dark p-8 rounded-3xl flex flex-col justify-between hover:border-black transition-colors">
            <h3 className="text-xl font-bold">Databases</h3>
            <div className="flex flex-col gap-2">
              {['MySQL', 'PostgreSQL', 'SQL'].map(skill => (
                <span key={skill} className="text-gray-600 font-medium">{skill}</span>
              ))}
            </div>
          </div>

          {/* CMS & Other (Small Box) */}
          <div className="bento-item bg-primary text-white p-8 rounded-3xl flex flex-col justify-between">
            <h3 className="text-xl font-bold">CMS & Tools</h3>
            <div className="flex flex-col gap-2">
              {['WordPress', 'Git', 'Docker'].map(skill => (
                <span key={skill} className="text-white/90 font-medium">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
