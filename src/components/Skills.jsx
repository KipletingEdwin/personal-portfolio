import React from "react";
import { FaAngular, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiRubyonrails, SiTypescript } from "react-icons/si";

export default function Skills() {
  // 7 Tech Stacks directly mapped from the design layout image
  const skillsData = [
    {
      id: 1,
      name: "HTML5",
      description:
        "Semantic markup architecture built for enhanced web crawling and indexing.",
      svg: <FaHtml5 className="h-10 w-10 text-brand-coral" />,
    },
    {
      id: 2,
      name: "Tailwind CSS",
      description:
        "Overhaul styling layouts cleanly using rapid utility frameworks.",
      svg: <RiTailwindCssFill className="h-10 w-10 text-cyan-500 " />,
    },
    {
      id: 3,
      name: "JavaScript",
      description:
        "Optimize high performance functional frontend and logic control layers.",
      svg: <SiJavascript className="h-10 w-10 text-[#f7df1e] " />,
    },
    {
      id: 4,
      name: "React",
      description:
        "Building fine structural state controllers and atomized views.",
      svg: <FaReact className="h-10 w-10 text-brand-neon-blue" />,
    },
    {
      id: 5,
      name: "Angular",
      description:
        "Architect robust, enterprise-scale frontend applications with structured MVC frameworks.",
      svg: <FaAngular className="h-10 w-10 text-red-600" />,
    },
    {
      id: 6,
      name: "TypeScript",
      description:
        "Enforce strict type safety and scalable architecture across application workflows.",
      svg: <SiTypescript className="h-10 w-10 text-blue-600" />,
    },
    {
      id: 7,
      name: "Ruby on Rails",
      description:
        "Accelerate backend development utilizing convention over configuration frameworks.",
      svg: <SiRubyonrails className="h-10 w-10 text-red-700" />,
    },
  ];

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header Block */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl">
            Skills &{" "}
            <span className="bg-linear-to-r from-brand-coral to-brand-neon-blue bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue" />
          <p className="mx-auto mt-4 max-w-md text-sm font-light text-slate-400">
            A comprehensive matrix of architectural engineering stacks utilized
            to deploy premium visual web systems.
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
