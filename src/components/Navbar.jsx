import { Menu, Send, X } from "lucide-react"
import { navLinks } from "../data/content"
import { useState } from "react"


const Navbar = () => {
  const[open, setOpen] = useState(false);


  return (
    <header className="top-0 -z-50 border-b border-white/5 bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4   ">
        <a href="#home" className="font-display text-lg font-semibold">
          <span className="text-gradient" >MERN</span> Stack Developer
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {
            navLinks.map((link, i) => (
              <a 
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-white ${i === 0 ? "text-cyan-accent" : "text-mist-300"}`}
              >
                { link.label  }
              </a>
            ))}
        </nav>
        <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 rounded-full bg-rose-accent px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          <Send size={14} /> Hire Me
        </a>
        <button
        className="text-mist-300 md:hidden"
        onClick={() => setOpen(!open)}
        aria-label={ open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        >
          {
            open ? <X size={24} /> : <Menu size={24} />
          }
        </button>
      </div>
      {
        open && (
          <nav className=" md:hidden flex flex-col gap-1 border-t border-white/5 bg-ink-950 px-6 py-4  ">
            {
              navLinks.map((link) => (
                <a
                key={link.href}
                href={link.href}
                onClick={() =>setOpen(false)}
                className="py-2 text-sm text-mist-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))
            }
            <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-rose-accent px-5 py-2 text-sm font-medium text-white"
            >
              <Send size={14} /> Hire Me
            </a>
          </nav>
        )
      }
    </header>
  )
}

export default Navbar