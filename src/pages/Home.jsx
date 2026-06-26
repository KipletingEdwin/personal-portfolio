

import React from 'react';
import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    /* Base wrapper setup using your Tailwind v4 theme palette variables */
    <div className="min-h-screen bg-brand-bg bg-brand-radial-glow text-white font-sans selection:bg-brand-neon-blue selection:text-brand-bg antialiased">
      
      {/* Sticky Global Navigation Layout Layer */}
      <Navbar />

      {/* Main Portfolio Sections Stack */}
      <main>
        {/* Section 1: Intro copywriting & floating graphics */}
        <Hero />

        {/* Section 2: Bio details, timeline links, and profile snapshot */}
        <About />

        {/* Section 3: 6-Core tech grid mapping your skills array */}
        <Skills />

        {/* Section 4: 8-Card services matrix breakdown */}
        <Services />

        {/* Section 5: Highlight projects showcase gallery */}
        <Projects />

        {/* Section 6: Client review slider and ratings deck */}
        <Testimonials />

        {/* Section 7: Communication gateway panel & local contact variables */}
        <Contact />
      </main>

      {/* Persistent Page Terminus */}
      <Footer />
      
    </div>
  );
}
