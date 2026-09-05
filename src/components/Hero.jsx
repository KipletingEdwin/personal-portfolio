
import { ArrowUpRight } from 'lucide-react'
import profile  from '../assets/Profile.jpg'

const Hero = () => {
  return (
    <section
    id='home'
    className='relative overflow-hidden bg-linear-to-b from-ink-900 via-ink-900 to-ink-950 px-6 py-20 md:py-28  '
    >
      <div className='mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2  '>
        <div>
          <p className='font-display text-3xl text-white md:text-4xl'>Hi, I'm</p>
          <h1 className='font-display text-4xl font-bold text-gradient md:text-5xl'>Edwin Kipleting</h1>
          <p className='mt-5 max-w-md text-mist-300'>I build scalable full-stack applications using React, Angular, TypeScript and Rails. I love clean code and fast UIs. </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a 
            href='#projects'
            className='rounded-full btn-gradient px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105'>
              View Projects
            </a>
            <a
            href='#contact'
            className='inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-cyan-accent'
            >
              Let's collaborate <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img
              src={profile}
              alt='Edwin'
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero