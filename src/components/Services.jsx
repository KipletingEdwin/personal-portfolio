
import * as Icons from "lucide-react"
import { services } from '../data/content'

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {
            services.map((service) => {
              const Icon = Icons[service.icon];
              return (
                <div
                key={service.title}
                className="card-surface rounded-2xl p-7 transition-colors hover:border-rose-accent/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rose-accent/30 bg-rose-accent/10 text-rose-accent">
                    <Icon size={22}/>
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">
                    { service.title}
                  </h3>
                  <p  className="mt-2 text-sm text-mist-400">{service.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Services