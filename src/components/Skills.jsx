
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

        <div >
          {skills.map((skill) => {
            const Icon = Icons[skill.icon];
            return (
              <div
              key={skill.title}
              >
                <div>
                  <Icon size={26} />
                </div>
                <h3>
                  {skill.title}
                </h3>
                <p>
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
