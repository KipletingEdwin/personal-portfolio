

import React, { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3 Dynamic user review payloads matching your layout nodes
  const testimonialsData = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Product Manager at FinTech Corp',
      quote: 'Edwin perfectly translated our complex Figma structures into a high-performance React application. His use of modular state workflows and clean Tailwind utilities made the codebase incredibly easy for our team to adopt and maintain.',
      rating: 5,
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Founder of AgriTech Labs',
      quote: 'The full-stack database integrations Edwin built for our platform are flawless. He possesses a rare mix of extreme attention to pixel-perfect layouts alongside airtight back-end security infrastructure. Absolute professional.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Elena Rostova',
      role: 'Creative Director at PixelStudio',
      quote: 'I was blown away by the execution speed and optimization scores of our new e-commerce interface. Edwin transformed custom animations and heavy asset grids into a lightweight, fluid, and conversion-focused web system.',
      rating: 5,
    }
  ];

  // Slider State Control Handlers
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Block */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl">
            Client{' '}
            <span className="bg-linear-to-r from-brand-coral to-brand-neon-blue bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue" />
          <p className="mx-auto mt-4 max-w-md text-sm font-light text-slate-400">
            Real feedback from engineering managers and founders on deployed digital products.
          </p>
        </div>

        {/* Core Testimonial Slider Interactive Containment Box */}
        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-brand-card/40 p-8 md:p-12 shadow-2xl bg-card-glow border-glow-blue">
          
          {/* Decorative Giant Quote Vector Accent Marks */}
          <div className="absolute top-6 left-6 text-brand-neon-blue/10 pointer-events-none">
            <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.85h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.85h4v10h-10z" />
            </svg>
          </div>

          {/* Active Testimonial Card Transition Deck Wrapper */}
          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Dynamic Star Rating Mapping Loop */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                <svg 
                  key={i} 
                  className="h-5 w-5 text-brand-neon-blue drop-shadow-[0_0_5px_rgba(0,210,255,0.3)]" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Core Narrative Quote Text */}
            <p className="text-base md:text-lg font-light leading-relaxed text-slate-200 mb-8 max-w-3xl italic">
              "{testimonialsData[currentIndex].quote}"
            </p>

            {/* Client Structural Signature Identity Block */}
            <div>
              <h4 className="text-base font-bold tracking-wide text-white">
                {testimonialsData[currentIndex].name}
              </h4>
              <p className="text-xs font-medium text-brand-coral uppercase tracking-wider mt-1">
                {testimonialsData[currentIndex].role}
              </p>
            </div>

          </div>

          {/* Navigational Arrow Action Control Buttons */}
          <div className="mt-8 flex justify-center gap-4 relative z-20">
            {/* Left Prev Arrow Button Trigger */}
            <button
              onClick={handlePrev}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-brand-bg/60 text-slate-400 transition-all duration-200 hover:border-brand-neon-blue/40 hover:text-brand-neon-blue hover:scale-105 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Right Next Arrow Button Trigger */}
            <button
              onClick={handleNext}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-brand-bg/60 text-slate-400 transition-all duration-200 hover:border-brand-coral/40 hover:text-brand-coral hover:scale-105 cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Micro Pagination Carousel Dots Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
            {testimonialsData.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-brand-neon-blue' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}

