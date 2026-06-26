

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links array matching the image layout
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-brand-bg/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Left Side: Brand Logo */}
          <div className="flex shrink-0 items-center">
            <a href="#home" className="group flex items-center gap-1.5 text-xl font-bold tracking-tight text-white">
              <span className="bg-linear-to-r from-brand-coral to-brand-neon-blue bg-clip-text text-transparent">
                E
              </span>
              <span className="font-light text-slate-400 group-hover:text-brand-neon-blue transition-colors duration-300">
                K
              </span>
            </a>
          </div>

          {/* Center/Right Side: Desktop Navigation Menu Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-brand-neon-blue py-2 group"
              >
                {link.name}
                {/* Micro-interaction sliding underline */}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-neon-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Side: Action CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue shadow-[0_0_15px_rgba(255,65,85,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)]"
            >
              <Sparkles size={15} />
              Hire Me
              {/* <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> */}
            </a>
          </div>

          {/* Mobile Layout Target: Hamburger Menu Toggle Icon Trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-brand-card focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} className="text-brand-coral" /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile Drawer / Overlay Layer */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-brand-bg/95 border-b border-white/5 backdrop-blur-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="space-y-2 px-4 pt-4 pb-6 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-slate-300 hover:bg-brand-card hover:text-brand-neon-blue transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-white/5 px-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-1 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue py-3 text-center text-sm font-semibold text-white shadow-md"
            >
              Contact Me
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
