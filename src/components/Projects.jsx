import { projects } from "../data/content";
import profile from "../assets/Profile.jpg";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section
    id="projects"
    className="bg-ink-900 px-6  py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">Recent Projects</h2>
          <p className="mt-4 text-mist-600">
            Here are some of the real-world projects I've built using the MERN stack.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            return (
              <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-rose-accent/30 bg-ink-800"
              >
                <div className="flex h-52 items-center justify-center bg-linear-to-br from-blue-accent/30 via-link-800 to-rose-accent/20">
                  <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=900&auto=format&fit=crop"
                  alt={`${project.title} preview`} 
                  className="h-full w-full object-cover opacity-90"
                  />
                </div>

                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-white">{project.title} </h3>
                  <p className="mt-2 text-sm text-mist-400">{project.description} </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                      key={tag}
                      className="rounded-full bg-ink-700 px-3 py-1 text-xs text-mist-300  "
                      >{tag}</span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                    href={project.href}
                    className="inline-flex items-center gap-2 rounded-full  bg-ink-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-ink-600"
                    >
                      <FaGithub size={16} /> Github
                    </a>
                    <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-full btn-gradient px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
