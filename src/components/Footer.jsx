import { navLinks, socialLinks } from "../data/content";
import * as Icons from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-rose-accent/30 bg-ink-950 px-6 pt-12 pb-6 ">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-display text-lg text-white">
          MERN Stack <span className="text-gradient" >Developer</span>
        </p>

        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a 
            key={link.href}
            href={link.href}
            className="text-sm text-mist-300 hover:text-white"
            >{link.label}</a>
          ))}
        </nav>
        <div className="flex gap-3">
          {socialLinks.map((social) => {
            const Icon = Icons[social.icon];
            return (
              <a 
              key={social.icon}
              href={social.href}
              aria-label={social.icon}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors hover:border-cyan-accent hover:text-cyan-accent"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-mist-400">
        Copyright © {new Date().getFullYear()} Edwin Kipleting | All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
