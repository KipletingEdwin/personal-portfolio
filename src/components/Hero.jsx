
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import profile from "../assets/Profile.jpg";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoIonic } from "react-icons/io";
import { SiRuby, SiRubyonrails, SiTypescript } from "react-icons/si";

const floatingIcons = [
  RiJavascriptFill,
  FaHtml5,
  RiTailwindCssFill,
  FaReact,
  IoLogoIonic,
  SiTypescript,
  SiRuby,
  SiRubyonrails,
  IoLogoCss3,
];

const textContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-b from-ink-900 via-ink-900 to-ink-950 px-6 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
        variants={textContainer}
        initial="hidden"
        animate="show"
        >
          <motion.p
          variants={textItem}
            className="font-display text-3xl text-white md:text-4xl">
            Hi, I'm
          </motion.p>
          <motion.h1
          variants={textItem}
           className="font-display text-4xl font-bold text-gradient md:text-5xl pb-2">
            Edwin Kipleting
          </motion.h1>
          <motion.p
          variants={textItem}
           className="mt-5 max-w-md text-mist-300">
            I build scalable full-stack applications using React, Angular,
            TypeScript and Rails. I love clean code and fast UIs.
          </motion.p>
          <motion.div
          variants={textItem}
           className="mt-8 flex flex-wrap gap-4">
            <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
              href="#projects"
              className="rounded-full btn-gradient px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              View Projects
            </motion.a>
            <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-cyan-accent"
            >
              Let's collaborate <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
         className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-accent/30 via-blue-accent/20 to-rose-accent/30 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-ink-800">
            <img
              src={profile}
              alt="Edwin"
              className="h-full w-full object-cover"
            />
          </div>

          {floatingIcons.map((Icon, i) => {
            const angle =
              (-90 + i * (360 / floatingIcons.length)) * (Math.PI / 180);
            const x = 50 + 50 * Math.cos(angle);
            const y = 50 + 50 * Math.sin(angle);
            return (
              <motion.div
                key={i}
                style={{ left: `${x}%`, top: `${y}%` }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-ink-800/90 text-cyan-accent shadow-lg"
              >
                <Icon size={18} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
