

import React from 'react';

export default function ProjectCard({ title, description, image, techTags, liveLink, githubLink }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-brand-card/40 p-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-neon-blue/20 hover:bg-brand-card bg-card-glow border-glow-blue flex flex-col h-full justify-between">
      
      <div>
        {/* Project Multi-device Mockup Frame Area */}
        <div className="relative overflow-hidden rounded-xl bg-brand-bg border border-white/5 aspect-video mb-5 group-hover:scale-[1.01] transition-transform duration-500">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
          />
          {/* Neon vignette cover shield */}
          <div className="absolute inset-0 bg-linear-to-t from-brand-bg/40 to-transparent pointer-events-none" />
        </div>

        {/* Semantic Title Text Row */}
        <h3 className="text-xl font-bold tracking-tight text-white mb-2 transition-colors duration-200 group-hover:text-brand-neon-blue">
          {title}
        </h3>

        {/* Brief Narrative Copy Block */}
        <p className="text-sm font-light leading-relaxed text-slate-400 mb-5">
          {description}
        </p>

        {/* Tech Stack Array Tags List */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techTags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs font-medium tracking-wide text-brand-neon-blue bg-brand-neon-blue/5 border border-brand-neon-blue/10 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Primary and Secondary Outbound Action Links Form Row */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <a 
          href={githubLink}
          className="flex-1 text-center py-2.5 text-xs font-semibold rounded-full border border-white/10 bg-brand-bg/60 text-slate-300 transition-all duration-200 hover:border-brand-coral/40 hover:text-white hover:bg-brand-bg"
        >
          GitHub
        </a>
        <a 
          href={liveLink}
          className="flex-1 text-center py-2.5 text-xs font-semibold rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue text-white shadow-md transition-all duration-300 hover:opacity-95 hover:scale-[1.01]"
        >
          Live Demo
        </a>
      </div>

    </div>
  );
}
