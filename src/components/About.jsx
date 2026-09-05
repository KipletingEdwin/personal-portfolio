
import { Download } from 'lucide-react'
import profile from '../assets/Profile.jpg'

const About = () => {
  return (
    <section
    id='about'
    className='bg-ink-950 px-6 py-20 md:py-28'
    >
      <div className='mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2'>
        <div className='overflow-hidden rounded-3xl border border-white/10'>
          <img 
          src={profile}
          alt='Edwin Image'
          className='h-full w-full object-cover'
          />
        </div>

        <div>
          <h2
          className='font-display text-3xl font-semibold text-white md:text-4xl  '
          >
            About Me</h2> 
          <p
          className='mt-5 text-mist-300'
          >
            I am a MERN Stack Web Developer focusing on building production-ready
            applications. I enjoy designing APIs, creating interactive user
            interfaces, and optimizing performance to deliver smooth and
            efficient user experiences.
          </p>
          <p className='mt-4 text-mist-300'>
            Along with strong problem-solving skills, I follow clean architecture
            principles and modern development patterns. I'm passionate about
            writing maintainable code, improving UI/UX flows, and building
            applications that feel fast, secure, and intuitive. I actively
            explore new tools in the MERN ecosystem to stay updated and keep
            improving my development workflow.
          </p>
          <a
          href='#' 
          className='mt-8 inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105'
           >
            Download Resume <Download size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About