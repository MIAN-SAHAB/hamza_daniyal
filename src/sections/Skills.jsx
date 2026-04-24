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
          toggleActions: "play reverse play reverse",
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
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent hidden md:block"></div>
          <h2 className="text-4xl md:text-5xl font-valturin text-text-main text-center">Technical Arsenal</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent to-secondary hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((group, idx) => (
            <div key={idx} className="bg-white/40 backdrop-blur-md border border-glass-border p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/60 hover:-translate-y-2 transition-all duration-500">
              <h3 className="text-2xl font-valturin text-primary mb-8 text-center">{group.category}</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {group.items.map(skill => (
                  <div
                    key={skill}
                    className="skill-item px-5 py-3 bg-white shadow-md rounded-xl text-text-main font-bellota font-bold text-sm border border-gray-100 hover:border-primary hover:text-primary cursor-default hover:scale-110 transition-transform duration-300"
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
