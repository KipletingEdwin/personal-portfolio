
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profile from "../assets/Profile.jpg";

const imageVariant = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="bg-ink-950 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden rounded-3xl border border-white/10"
        >
          <img
            src={profile}
            alt="Edwin Image"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={textItem}
            className="font-display text-3xl font-semibold text-white md:text-4xl  "
          >
            About Me
          </motion.h2>
          <motion.p variants={textItem} className="mt-5 text-mist-300">
            I am a MERN Stack Web Developer focusing on building
            production-ready applications. I enjoy designing APIs, creating
            interactive user interfaces, and optimizing performance to deliver
            smooth and efficient user experiences.
          </motion.p>
          <motion.p variants={textItem} className="mt-4 text-mist-300">
            Along with strong problem-solving skills, I follow clean
            architecture principles and modern development patterns. I'm
            passionate about writing maintainable code, improving UI/UX flows,
            and building applications that feel fast, secure, and intuitive. I
            actively explore new tools in the MERN ecosystem to stay updated and
            keep improving my development workflow.
          </motion.p>
          <motion.a
            variants={textItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full btn-gradient px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Download Resume <Download size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
