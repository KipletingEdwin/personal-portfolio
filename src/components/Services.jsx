
import { motion } from "framer-motion"
import * as Icons from "lucide-react"
import { services } from '../data/content'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section
    id="services"
    className="bg-ink-950 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center ">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Services I provide
          </h2>
          <p className="mt-4 text-mist-300">
            I offer design and development services focused on building fast, modern, and user-friendly digital experiences.
          </p>
        </div>

        <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {
            services.map((service) => {
              const Icon = Icons[service.icon];
              return (
                <motion.div
                key={service.title}
                variants={item}
                className="card-surface rounded-2xl p-7 transition-colors hover:border-rose-accent/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rose-accent/30 bg-rose-accent/10 text-rose-accent">
                    <Icon size={22}/>
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">
                    { service.title}
                  </h3>
                  <p  className="mt-2 text-sm text-mist-400">{service.description}</p>
                </motion.div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services