

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Navigation array matching the Navbar architecture
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative mt-12 border-t border-white/5 bg-brand-bg/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Core Multi-Row Grid Layout Block */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/5 pb-8 sm:flex-row">
          
          {/* Left Block: Logo System Replica */}
          <div className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-white">
            <span className="bg-linear-to-r from-brand-coral to-brand-neon-blue bg-clip-text text-transparent">
              Kipleting
            </span>
            <span className="font-light text-slate-500">
              Edwin
            </span>
          </div>

          {/* Center Block: Secondary Anchor List Rows */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-400 transition-colors duration-200 hover:text-brand-neon-blue"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Block: Core Social Media Icon Links */}
          <div className="flex items-center gap-4">
            {/* LinkedIn Icon Link */}
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-500 transition-colors duration-200 hover:text-brand-neon-blue"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" fill="currentColor" />
              </svg>
            </a>

            {/* GitHub Icon Link */}
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-500 transition-colors duration-200 hover:text-brand-coral"
              aria-label="GitHub Profile"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </a>

            {/* Twitter / X Icon Link */}
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-500 transition-colors duration-200 hover:text-brand-neon-blue"
              aria-label="Twitter Profile"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Metadata Rights Subtext Row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-xs font-light text-slate-500 sm:flex-row">
          <p>© {currentYear} Kipleting Edwin. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with 
            <span className="text-brand-coral animate-pulse">❤️</span> 
            using React & Tailwind v4
          </p>
        </div>

      </div>
    </footer>
  );
}
