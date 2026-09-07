
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "../data/content";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const go = (delta) => setIndex((i) => (i + delta + total) % total);

  return (
    <section className="bg-ink-950 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Testimonials</h2>
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
            <ChevronLeft size={18} />
          </button>
          <div className="card-surface flex-1 rounded-b-2xl border-t-2 border-t-rose-accent p-8">
            <div className="flex justify-center gap-1 text-amber-400">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-mist-300">{current.quote} </p>
            <p className="mt-5 font-display font-semibold text-gradient">{current.name}</p>
            <p className="mt-1 text-sm text-mist-400">{current.date}</p>
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
              onClick={() => setIndex(i)}
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
