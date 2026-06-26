

import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Dual-Column Split Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Custom Framed Profile Image */}
          <div className="relative flex justify-center lg:justify-start">
            
            {/* Background Decorative Accent Box (Mimicking the deep burgundy glow backdrop) */}
            <div className="absolute -inset-4 rounded-2xl bg-linear-to-tr from-brand-coral/20 to-brand-neon-blue/10 blur-xl opacity-60" />
            
            {/* Image Outer Containment Wrapper matching image dimensions */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-brand-card p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <img 
                src="https://unsplash.com" 
                alt="Sajid Yaqub - About Profile" 
                className="h-80 w-full max-w-sm rounded-xl object-cover grayscale contrast-115 brightness-95"
              />
              {/* Sleek bottom neon gradient tint mask overlay */}
              <div className="absolute inset-2 rounded-xl bg-linear-to-t from-brand-bg/50 via-transparent to-transparent mix-blend-overlay" />
            </div>
            
          </div>

          {/* Right Column: Bio Narrative & Structural Text Stack */}
          <div className="flex flex-col text-left">
            
            {/* Section Heading Tag */}
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-white sm:text-4xl">
              About{' '}
              <span className="bg-linear-to-r from-brand-coral to-brand-neon-blue bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            
            {/* Horizontal Section Accent Separator Bar */}
            <div className="mb-6 h-1 w-16 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue" />
            
            {/* Bold Narrative Subtitle */}
            <h3 className="mb-4 text-lg font-semibold text-brand-neon-blue tracking-wide">
              Crafting scalable, high-performance systems from structural mockups.
            </h3>
            
            {/* Context Paragraph 1 */}
            <p className="mb-4 text-base font-light leading-relaxed text-slate-300">
              I am a dedicated Full Stack Web Developer with a sharp focus on translating visual compositions into clean, maintainable code architectures. Using tools like React and Tailwind CSS, I focus on building interfaces that are both lightweight and responsive across all device breakpoints.
            </p>
            
            {/* Context Paragraph 2 */}
            <p className="mb-6 text-base font-light leading-relaxed text-slate-400">
              My engineering framework prioritizes code optimization, secure state management patterns, and fluid animations. I love bridging the gap between intricate, functional backend structures and modern, intuitive front-end layouts.
            </p>

            {/* Layout Micro-Feature Metadata Row (Mini-flex block matching portfolio standards) */}
            <div className="mb-8 grid grid-cols-2 gap-4 border-t border-b border-white/5 py-5 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <svg className="h-5 w-5 text-brand-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Available for Freelance / Fulltime</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <svg className="h-5 w-5 text-brand-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Location: Remote / Global</span>
              </div>
            </div>

            {/* Narrative CTA Redirection Link Button */}
            <div>
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue px-7 py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(255,65,85,0.15)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] cursor-pointer"
              >
                More About My Work
                {/* Self-contained arrow vector asset */}
                <svg 
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}
