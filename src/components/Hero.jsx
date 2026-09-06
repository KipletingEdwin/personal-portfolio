
import { ArrowUpRight, Boxes, FileCode2, Settings, Share2 } from "lucide-react";
import profile from "../assets/Profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-b from-ink-900 via-ink-900 to-ink-950 px-6 py-20 md:py-28  "
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2  ">
        <div>
          <p className="font-display text-3xl text-white md:text-4xl">
            Hi, I'm
          </p>
          <h1 className="font-display text-4xl font-bold text-gradient md:text-5xl">
            Edwin Kipleting
          </h1>
          <p className="mt-5 max-w-md text-mist-300">
            I build scalable full-stack applications using React, Angular,
            TypeScript and Rails. I love clean code and fast UIs.{" "}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full btn-gradient px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-cyan-accent"
            >
              Let's collaborate <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-accent/30 via-blue-accent/20 to-rose-accent/30 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-ink-800">
            <img
              src={profile}
              alt="Edwin"
              className="h-full w-full object-cover"
            />
          </div>
          <FloatingIcon icon={Share2} className="left-2 top-8" />
          <FloatingIcon icon={Settings} className="right-0 top-9" />
          <FloatingIcon icon={Boxes} className="left-0 top-1/2" />
          <FloatingIcon icon={FileCode2} className="left-6 bottom-2" />
          <FloatingIcon icon={FileCode2} className="right-2 bottom-10" />
        </div>
      </div>
    </section>
  );
};

function FloatingIcon({ icon: Icon, className }) {
  return (
    <div
      className={`absolute flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-800/90 text-cyan-accent shadow-lg ${className}`}
    >
      <Icon size={18} />
    </div>
  );
}

export default Hero;
