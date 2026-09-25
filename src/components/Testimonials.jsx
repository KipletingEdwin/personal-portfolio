
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "../data/content";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [[index, direction], setIndex] = useState([0, 0]);
  const total = testimonials.length;
  const current = testimonials[index];

  // const go = (delta) => setIndex((i) => (i + delta + total) % total);

  const go = (delta) => {
    setIndex(([i]) => [(i + delta + total) % total, delta]);
  };

  return (
    <section
    id="testimonials"
     className="bg-ink-950 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
          Testimonials
        </h2>
        <p className="mt-4 text-mist-300">
          Feedback from clients and collaborators I've worked with on real
          projects and web applications.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonials"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-800 text-mist-300 transition-colors hover:text-cyan-accent"
          >
            <ChevronLeft size={18}/>
          </button>

          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>


              <motion.div 
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{duration: 0.35, ease: "easeInOut"}}
              className="card-surface rounded-2xl border-t-2 border-t-rose-accent p-8">

                
                <div className="flex justify-center gap-1 text-amber-400">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-mist-300">
                  {current.quote}
                </p>
                <p className="mt-5 font-display font-semibold text-gradient">
                  {current.name}
                </p>
                <p className="mt-1 text-xs text-mist-400">{current.date}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next tesimonial"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-800 text-mist-300 transition-colors hover:text-cyan-accent"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(([current]) => [i, i > current ? 1 : -1])}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-rose-accent" : "w-2 bg-white/20"}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
