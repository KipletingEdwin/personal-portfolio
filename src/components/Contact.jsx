import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  // Local state controllers for form handling variables
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Capture input events
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle standard execution triggers
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API pipeline transmission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-clear notification layer banner after a short delay
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading Label Block */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl">
            Get In{" "}
            <span className="bg-linear-to-r from-brand-coral to-brand-neon-blue bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue" />
          <p className="mx-auto mt-4 max-w-md text-sm font-light text-slate-400">
            Have an interesting project layout or engineering role? Drop a
            secure transmission message below.
          </p>
        </div>

        {/* Core Structural Dual Column Split Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left Column (Span 2): Contact Information Anchor Cards */}
          <div className="space-y-6 lg:col-span-2">
            {/* Metadata Detail Anchor Card 1: Email Address */}
            <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-brand-card/40 p-5 bg-card-glow shadow-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-bg border border-white/5 text-brand-neon-blue">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-white">
                  Email Address
                </h4>
                <a
                  href="mailto:kipletingedwin4@gmail.com"
                  className="mt-1 block text-sm font-light text-slate-400 hover:text-brand-neon-blue transition-colors duration-200"
                >
                  kipletingedwin4@gmail.com
                </a>
              </div>
            </div>

            {/* Metadata Detail Anchor Card 2: Phone */}
            {/* <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-brand-card/40 p-5 bg-card-glow shadow-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-bg border border-white/5 text-brand-coral">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-white">
                  Direct Line
                </h4>
                <a
                  href="tel:+1234567890"
                  className="mt-1 block text-sm font-light text-slate-400 hover:text-brand-coral transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div> */}

            {/* Metadata Detail Anchor Card 3: Location */}
            <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-brand-card/40 p-5 bg-card-glow shadow-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-bg border border-white/5 text-brand-neon-blue">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-white">
                  Location Hub
                </h4>
                <p className="mt-1 text-sm font-light text-slate-400">
                  Remote / London, UK
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Span 3): Interactive Contact Gateway Form Panel */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-brand-card/20 p-6 md:p-8 bg-card-glow shadow-2xl border-glow-blue space-y-5"
            >
              {/* Dynamic Status Alert Banner */}
              {submitStatus === "success" && (
                <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-sm font-medium text-emerald-400 animate-fade-in">
                  Secure transmission dispatched successfully! I will respond
                  shortly.
                </div>
              )}

              {/* Two Column Grid Input Row splits Name/Email on tablet sizes up */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                  >
                     Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/5 bg-brand-bg px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-brand-neon-blue/40 focus:outline-none focus:ring-1 focus:ring-brand-neon-blue/40 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                  >
                    Email 
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/5 bg-brand-bg px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-brand-neon-blue/40 focus:outline-none focus:ring-1 focus:ring-brand-neon-blue/40 transition-all"
                  />
                </div>
              </div>

              {/* Single Column Grid Input Row: Subject Header */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                >
                  Subject Line
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration Request"
                  className="w-full rounded-xl border border-white/5 bg-brand-bg px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-brand-neon-blue/40 focus:outline-none focus:ring-1 focus:ring-brand-neon-blue/40 transition-all"
                />
              </div>

              {/* Text Area Form Block: Narrative Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                >
                   Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please type your message here..."
                  className="w-full rounded-xl border border-white/5 bg-brand-bg px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-brand-neon-blue/40 focus:outline-none focus:ring-1 focus:ring-brand-neon-blue/40 transition-all resize-none"
                />
              </div>

              {/* Action Form Submit Trigger Row Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-coral to-brand-neon-blue py-3.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(255,65,85,0.15)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      Send Message
                       <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
