

import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  // Hardcoded portfolio showcase array mapping exactly to your layout preview nodes
  const projectsData = [
    {
      id: 1,
      title: 'MSTM Todo App (2024)',
      description: 'A responsive full-stack task management ecosystem with persistent database structures and real-time live data state sync.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxN1N__a95U1qyLXlHE6KtDBKcuNNwTqWpGQVTPsUnQ&s=10',
      techTags: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Demo (2025)',
      description: 'A luxury storefront shopping experience incorporating fluid transitions, search filters, state carts, and dynamic checkout handles.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqkPuPqCMip3iLp6Zq0cxdgh1BLXQ4mXBUtNLVBV02w&s',
      techTags: ['React', 'Tailwind CSS', 'Redux', 'Stripe'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header Block */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl">
            Recent{' '}
            <span className="bg-linear-to-r from-brand-coral to-brand-neon-blue bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue" />
          <p className="mx-auto mt-4 max-w-md text-sm font-light text-slate-400">
            A selective showcase of comprehensive web systems engineered from visual mockups to live deployment servers.
          </p>
        </div>

        {/* Flat Grid Structure Wrapper splitting down layout on desktop sizes */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title}
              description={project.description}
              image={project.image}
              techTags={project.techTags}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
