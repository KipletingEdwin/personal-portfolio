import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Mail, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      .then(
        () => {
          setSent(true);
          setIsSending(false);
          form.current.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false);
        },
      );
  };

  const handleChange = (e) => {
    console.log(() => ({ ...form, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-ink-900 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-mist-300">
            Have a project in mind? Let's connect and discuss how I can help
            bring your ideas to life.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              Get in touch today
            </h3>
            <p className="mt-3 text-sm text-mist-300">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.{" "}
            </p>
            <ul className="mt-8 space-y-4 text-sm text-mist-300">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-accent" />
                kipletingedwin4@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-accent" />
                London, UK
              </li>
            </ul>
          </div>
          <form
            onSubmit={sendEmail}
            ref={form}
            className="card-surface space-y-4 rounded-2xl p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Edwin Kipleting" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Phone" name="phone" placeholder="(123) 456 - 789" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-mist-300">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                placeholder="Please type your message here..."
                className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-mist-400 outline-none focus:border-cyan-accent"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSending || sent}
              whileHover={!isSending && !sent ? { scale: 1.02 } : {}}
              whileTap={!isSending && !sent ? { scale: 0.98 } : {}}
              className="flex w-full items-center justify-center gap-2 rounded-full btn-gradient px-6 py-3 text-sm font-medium text-white disabled:opacity-80"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isSending ? (
                    <motion.span
                    key="sending"
                    initial={{ opacity: 0, y: 6}}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6}}
                    transition={{ duration: 0.2}}
                    className="flex items-center gap-2"
                    >Sending... <Loader2 size={16} className="animate-spin" />
                    
                    </motion.span>
                ) : sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                     Message sent <Check size={16}/>
                  </motion.span>
                ) : (
                    <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                    >
                      Send Message <Send size={16} />
                      </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

function Field({ label, name, placeholder, type = "text" }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-mist-300 "
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-2.5 text-sm text-white placeholder:text-mist-400 outline-none focus:border-cyan-accent"
      />
    </div>
  );
}

export default Contact;
