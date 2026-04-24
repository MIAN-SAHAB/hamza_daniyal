import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      tech: ['React', 'Laravel', 'MySQL'],
      description: 'A scalable e-commerce solution with advanced filtering, real-time inventory tracking, and seamless checkout flow.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'Corporate Dashboard',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      description: 'An analytical dashboard for corporate clients to visualize data metrics, manage users, and generate automated reports.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: 'Booking System API',
      tech: ['PHP', 'Yii', 'SQL'],
      description: 'A robust RESTful API serving mobile and web clients for a hotel booking ecosystem with complex availability logic.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    }
  ];

  useGSAP(() => {
    gsap.fromTo('.project-card',
      { y: 100, opacity: 0 },
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
    <section id="projects" className="py-24 md:py-32 relative bg-glass backdrop-blur-md border-y border-glass-border shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent hidden md:block"></div>
          <h2 className="text-4xl md:text-5xl font-valturin text-text-main text-center">Selected Works</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent to-secondary hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-lg border border-glass-border hover:border-primary/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

              {/* Image Container with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative z-20 bg-gradient-to-t from-white via-white/95 to-transparent -mt-12 pt-16">
                <h3 className="text-2xl font-valturin text-text-main mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-text-muted text-sm font-bellota mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-bold font-bellota px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
