

import React from 'react';

export default function Skills() {
  // 6 Tech Stacks directly mapped from the design layout image
  const skillsData = [
    {
      id: 1,
      name: 'Tailwind CSS',
      description: 'Overhaul styling layouts cleanly using rapid utility frameworks.',
      // Custom Tailwind SVG
      svg: (
        <svg className="h-10 w-10 text-[#06b6d4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'JavaScript',
      description: 'Optimize high performance functional frontend and logic control layers.',
      // Custom JS code symbol SVG
      svg: (
        <svg className="h-10 w-10 text-[#f7df1e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'React',
      description: 'Building fine structural state controllers and atomized views.',
      // Custom React Atomic Orbit SVG
      svg: (
        <svg className="h-10 w-10 text-brand-neon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3s4.03-3 9-3s9 1.34 9 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-1.66 0-3-4.03-3-9s1.34-9 3-9s3 4.03 3 9s-1.34 9-3 9z" transform="rotate(30 12 12)" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-1.66 0-3-4.03-3-9s1.34-9 3-9s3 4.03 3 9s-1.34 9-3 9z" transform="rotate(-30 12 12)" />
        </svg>
      )
    },
    {
      id: 4,
      name: 'NodeJS',
      description: 'Powering back-end structural data handling and secure micro-services.',
      // Custom Node Server Hub SVG
      svg: (
        <svg className="h-10 w-10 text-[#339933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      id: 5,
      name: 'MongoDB',
      description: 'Document architecture modeling with rapid execution speed frameworks.',
      // Custom Database Cylinder SVG
      svg: (
        <svg className="h-10 w-10 text-[#47a248]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      id: 6,
      name: 'HTML5',
      description: 'Semantic markup architecture built for enhanced web crawling and indexing.',
      // Custom Layout Document SVG
      svg: (
        <svg className="h-10 w-10 text-brand-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Block */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl">
            Skills &{' '}
            <span className="bg-linear-to-r from-brand-coral to-brand-neon-blue bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue" />
          <p className="mx-auto mt-4 max-w-md text-sm font-light text-slate-400">
            A comprehensive matrix of architectural engineering stacks utilized to deploy premium visual web systems.
          </p>
        </div>

        {/* Responsive Skill Card Grid Structure */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-brand-card/40 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-neon-blue/30 hover:bg-brand-card bg-card-glow border-glow-blue"
            >
              {/* Top Accent Shadow Line Effect on Hover */}
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-linear-to-r from-brand-coral to-brand-neon-blue transition-all duration-300 group-hover:w-full" />
              
              {/* Header Layout Inner Card Row */}
              <div className="flex items-center gap-4 mb-4">
                {/* Tech Icon Container Wrapper */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-bg border border-white/5 transition-colors duration-300 group-hover:border-brand-neon-blue/20">
                  {skill.svg}
                </div>
                
                {/* Skill Structural Name Label */}
                <h3 className="text-lg font-semibold text-white tracking-wide transition-colors duration-300 group-hover:text-brand-neon-blue">
                  {skill.name}
                </h3>
              </div>
              
              {/* Detailed Technical Paragraph Description */}
              <p className="text-sm font-light leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {skill.description}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
