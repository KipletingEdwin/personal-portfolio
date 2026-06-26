
import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Structural Split Grid */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Typography Stack & Actions */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left animate-fade-in">
            
            {/* Short Catchy Pre-heading */}
            <span className="mb-3 text-lg font-semibold tracking-wide text-brand-neon-blue text-glow-blue uppercase">
              Hi, I'm
            </span>
            
            {/* Main Interactive Headline */}
            <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Kipleting{' '}
              <span className="bg-linear-to-r from-brand-coral to-brand-neon-blue bg-clip-text text-transparent">
                Edwin
              </span>
            </h1>
            
            {/* Sub-headline Professional Focus Statement */}
            <h2 className="mb-6 text-xl font-medium text-slate-200 sm:text-2xl">
              Full Stack Web Developer & AI Enthusiast
            </h2>
            
            {/* Descriptive Context Bio Block */}
            <p className="max-w-md mb-8 text-base font-light leading-relaxed text-slate-400">
              I build robust, secure, and modern web systems from scratch using React, Node.js, and ecosystem tools. Specialized in high-performance architectures and pixel-perfect design translation.
            </p>
            
            {/* Call To Actions Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary Call to Action Button */}
              <button 
                type="button" 
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_15px_rgba(255,65,85,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] cursor-pointer"
              >
                View Project
                {/* Self-contained Arrow Right Inline SVG */}
                <svg 
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              
              {/* Secondary Call to Action Button */}
              <button 
                type="button" 
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-brand-card/40 px-8 py-3.5 text-base font-semibold text-slate-200 transition-all duration-300 hover:border-brand-neon-blue/50 hover:bg-brand-card/80 hover:text-white cursor-pointer"
              >
                Let's Talk
              </button>
            </div>
            
          </div>
          
          {/* Right Column: Visual Composition Frame */}
          <div className="relative flex items-center justify-center md:justify-end animate-float">
            
            {/* Outer Decorative Radial Background Shadow Ring */}
            <div className="absolute top-1/2 left-1/2 h-87.5 w-87.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-neon-blue/10 blur-[60px] md:h-112.5 md:w-112.5" />
            
            {/* Main Visual Component Frame */}
            <div className="relative z-10 h-72 w-72 rounded-full border-2 border-brand-neon-blue/30 bg-brand-card p-3 shadow-2xl shadow-brand-neon-blue/10 sm:h-80 sm:w-80 md:h-96 md:w-96">
              
              {/* Profile Image Node Context Matching */}
              <img 
                src="https://media.istockphoto.com/id/2226994045/photo/isolated-male-avatar-in-purple-circle.webp?a=1&b=1&s=612x612&w=0&k=20&c=zTAWtyjM3UPzbRxt_eoV1j21oriDlL1DfKl-4fV7K3A=" 
                alt="Kipleting Edwin - Hero Visual Profile" 
                className="h-full w-full rounded-full object-cover grayscale brightness-90 contrast-110"
              />
              
              {/* Custom Image Colored Neon Tint Vignette overlay */}
              <div className="absolute inset-3 rounded-full bg-linear-to-t from-brand-bg/40 via-brand-neon-blue/10 to-transparent mix-blend-color-dodge" />
              
              {/* Design Asset Replica: Floating Circle Orbit Tech Badge (HTML5/CSS/JS reference node marker) */}
              <div className="absolute -top-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-brand-card/90 text-brand-neon-blue shadow-lg border-glow-blue">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>

              {/* Design Asset Replica: Floating Circle Orbit Tech Badge 2 */}
              <div className="absolute -bottom-2 -left-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-brand-card/90 text-brand-coral shadow-lg">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.954-8.954m-8.954 3.858L12 14.25M21 3.75L18 6.75M21 3.75h-3.75M21 3.75v3.75m0 0L14.25 14.25M18 6.75L12 12.75" />
                </svg>
              </div>

            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
