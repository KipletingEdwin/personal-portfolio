
import { skills } from "../data/content";
import * as Icons from "lucide-react"

const Skills = () => {
  return (
    <section className="bg-ink-900 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl"> Skills &amp; Technologies</h2>
          <p className="mt-4 text-mist-300">
            I work with modern tools and technologies to build fast, scalable
            and efficient web applications.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = Icons[skill.icon];
            return (
              <div
              key={skill.title}
              className="card-surface rounded-2xl p-8 text-center transition-colors hover:border-cyan-accent/40  "
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-accent/30 bg-cyan-accent/10 text-cyan-accent ">
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm text-mist-400">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
