

import React from 'react';

export default function Services() {
  // 8 structural service capabilities mapped directly from the layout grid image
  const servicesData = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Architecting robust client and server systems from top to bottom using custom React workflows.',
      // Layers/Stack Icon
      svg: (
        <svg className="h-7 w-7 text-brand-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25M12 5.75L6.429 8.75 12 11.75l5.571-3L12 5.75zm0 12.5l-5.571-3L12 18.25l5.571-3-5.571 3z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Database & API Architecture',
      description: 'Designing highly reliable RESTful endpoints paired with structured MongoDB schemas.',
      // Database Cylinder Icon
      svg: (
        <svg className="h-7 w-7 text-brand-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'E-Commerce Development',
      description: 'Building secure visual shopping grids complete with frictionless product payment checkouts.',
      // Shopping Bag Icon
      svg: (
        <svg className="h-7 w-7 text-brand-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Authentication & Authorization',
      description: 'Integrating airtight middleware protocols ensuring role management integrity.',
      // Shield Lock Icon
      svg: (
        <svg className="h-7 w-7 text-brand-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0112 5.714z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Performance Optimization',
      description: 'Fine-tuning media payloads, caching states, and code architectures for maximum speed scores.',
      // Bolt/Zap Icon
      svg: (
        <svg className="h-7 w-7 text-brand-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Deployment & Cloud Hosting',
      description: 'Automating pipelines to roll out updates securely across distributed global CDNs.',
      // Cloud Icon
      svg: (
        <svg className="h-7 w-7 text-brand-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'UI/UX Design Translation',
      description: 'Meticulously mapping sophisticated design layouts into production-ready front-end code.',
      // Computer Screen Monitor Icon
      svg: (
        <svg className="h-7 w-7 text-brand-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15.75V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
        </svg>
      )
    },
    {
      id: 8,
      title: 'Technical Support & Consulting',
      description: 'Providing comprehensive runtime analysis and debugging services to maintain system up-time.',
      // Support/LifeBuoy Icon
      svg: (
        <svg className="h-7 w-7 text-brand-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 5.636l3.536 3.536m0 5.656l-3.536 3.536M9.172 9.172a4 4 0 105.656 5.656 4 4 0 00-5.656-5.656z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Block */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl">
            Services I{' '}
            <span className="bg-linear-to-r from-brand-coral to-brand-neon-blue bg-clip-text text-transparent">
              Provide
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue" />
          <p className="mx-auto mt-4 max-w-md text-sm font-light text-slate-400">
            Tailored digital solutions engineered for reliability, modular data manipulation, and premium visual interfaces.
          </p>
        </div>

        {/* Dense Responsive Grid Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/5 bg-brand-card/40 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-coral/30 hover:bg-brand-card bg-card-glow"
            >
              {/* Decorative Linear Neon Bottom Highlight */}
              <div className="absolute bottom-0 right-0 h-0.5 w-0 bg-linear-to-r from-brand-neon-blue to-brand-coral transition-all duration-300 group-hover:w-full" />
              
              <div>
                {/* Structural Service Icon Core */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-bg border border-white/5 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {service.svg}
                </div>

                {/* Service Semantic Title Card */}
                <h3 className="text-base font-semibold text-white tracking-wide mb-3 transition-colors duration-200 group-hover:text-brand-neon-blue">
                  {service.title}
                </h3>

                {/* Service Context Description Paragraph */}
                <p className="text-xs font-light leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Decorative Miniature Accent Arrow Indicator */}
              <div className="mt-4 flex justify-end opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <svg className="h-4 w-4 text-brand-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
