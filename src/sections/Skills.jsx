import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.skill-item',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: sectionRef });

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'GSAP'] },
    { category: 'Backend', items: ['PHP', 'Laravel', 'Yii', 'Node.js'] },
    { category: 'Database & CMS', items: ['MySQL', 'SQL', 'WordPress'] },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="h-[1px] w-12 bg-cream hidden md:block"></div>
          <h2 className="text-4xl md:text-5xl font-valturin text-offwhite text-center">Technical Arsenal</h2>
          <div className="h-[1px] w-12 bg-cream hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((group, idx) => (
            <div key={idx} className="bg-dark-alt/50 backdrop-blur-sm border border-charcoal/40 p-8 rounded-3xl hover:border-cream/30 transition-colors duration-500">
              <h3 className="text-2xl font-valturin text-cream-light mb-8 text-center">{group.category}</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {group.items.map(skill => (
                  <div
                    key={skill}
                    className="skill-item px-5 py-3 bg-dark shadow-inner shadow-black/50 rounded-xl text-offwhite font-bellota text-sm border border-transparent hover:border-green-light hover:text-green-light cursor-default transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
