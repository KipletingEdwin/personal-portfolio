
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}