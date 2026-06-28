
import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  // Hardcoded portfolio showcase array mapping exactly to your layout preview nodes
const projectsData = [
  {
    id: 1,
    title: 'iReporter (2024)',
    description: 'A civic-engagement platform enabling citizens to voice corruption and request government intervention through geospatial incident logging and multi-state status tracking.',
    image: 'https://ireporter-global.com/wp-content/uploads/2023/12/2aaab80407e74e625573311298ff65fb.png',
    techTags: ['React', 'TailwindCSS', 'Ruby on Rails', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'E-Commerce Demo (2025)',
    description: 'A luxury storefront shopping experience incorporating fluid transitions, search filters, state carts, and dynamic checkout handles.',
    image: 'https://flowebdesign.ie/wp-content/uploads/2024/12/E-commerce-Store-Demo-Site.jpg',
    techTags: ['Angular', 'TypeScript', 'Redux', 'Ruby on Rails'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'EduPulse Analytics Dashboard (2026)',
    description: 'A real-time data visualization hub for educational institutions to monitor student performance metric trends, attendance patterns, and predictive drop-out indicators.',
    image: 'https://storage.googleapis.com/blink-451505.firebasestorage.app/screenshots/edupulse-school-management-app-1auaezpw.sites.blink.new-1763177299861.webp',
    techTags: ['Angular', 'TypeScript', 'Ruby on Rails', 'Chart.js'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 4,
    title: 'SyncSpace Workspaces (2026)',
    description: 'A collaborative, real-time project management tool featuring live-updating Kanban boards, thread-based team chats, and automated Action Cable activity streams.',
    image: 'https://workinsync.io/wp-content/uploads/2023/02/Designing-Your-Hybrid-Workplace-for-Better-Space-Management-iamge.png',
    techTags: ['React', 'JavaScript', 'Ruby on Rails', 'ActionCable'],
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
