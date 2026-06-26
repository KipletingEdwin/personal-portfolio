
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaArrowUp,
  FaInstagram,
} from "react-icons/fa6";
import { SiX } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Navigation array matching the Navbar architecture
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
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
            <span className="font-light text-slate-500">Edwin</span>
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
          <div className="flex items-center gap-5">
            {/* LinkedIn Anchor */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-brand-card text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand-neon-blue/30 hover:text-brand-neon-blue hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </a>

            {/* GitHub Anchor */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-brand-card text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand-coral/30 hover:text-brand-coral hover:shadow-[0_0_15px_rgba(255,65,85,0.2)]"
              aria-label="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>

            {/* X / Twitter Anchor */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-brand-card text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand-neon-blue/30 hover:text-brand-neon-blue hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]"
              aria-label="Twitter Profile"
            >
              <SiX size={15} />
            </a>

            {/* YouTube Anchor */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-brand-card text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand-coral/30 hover:text-brand-coral hover:shadow-[0_0_15px_rgba(255,65,85,0.2)]"
              aria-label="YouTube Channel"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Metadata Rights Subtext Row */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center text-xs font-light text-slate-500 sm:flex-row">
          <p>© {currentYear} Kipleting Edwin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
