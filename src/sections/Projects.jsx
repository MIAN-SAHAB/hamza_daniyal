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
        duration: 1,
        stagger: 0.3,
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
    <section id="projects" className="py-32 bg-bg-main relative" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Selected Work</h2>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card group relative w-full h-[60vh] md:h-[80vh] rounded-3xl overflow-hidden cursor-pointer border border-border-main">

              {/* Image Background */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end z-10">
                <div className="max-w-3xl transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-none">{project.title}</h3>
                  <p className="text-lg md:text-xl text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
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
