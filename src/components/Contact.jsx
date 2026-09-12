
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
const [sent, setSent] = useState(false);

const handleChange = (e) => {
  setForm((f) => ({ ...form, [e.target.name]:e.target.value}));
};

const handleSubmit = (e) => {
  e.preventDefault();
  setSent(true);
};


  return (
    <section id='contact' className='bg-ink-900 px-6 py-20 md:py-28'>
      <div className='mx-auto max-w-6xl'>
        <div className='mx-auto max-w-xl text-center'>
          <h2 className='font-display text-3xl font-semibold text-white md:text-4xl'>Contact Us</h2>
          <p className='mt-14 text-mist-300'>Have a project in mind? Let's connect and discuss how I can help bring your ideas to life. </p>
        </div>

        <div className='mt-14 grid gap-12 md:grid-cols-2' >
          <div>
            <h3 className='font-display text-xl font-semibold text-white'>Get in touch today</h3> 
            <p className='mt-3 text-sm text-mist-300'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. </p>
            <ul className='mt-8 space-y-4 text-sm text-mist-300'>
              <li className='flex items-center gap-3'><Mail size={18} className='text-cyan-accent' />kipletingedwin4@gmail.com</li>
              <li className='flex items-center gap-3'><Phone size={18} className='text-cyan-accent'/>+92 3000000</li>
              <li className='flex items-center gap-3'><MapPin size={18} className='text-cyan-accent'/>London, UK</li>
            </ul>
          </div>
          <form>
            <div>
              <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Edwin Kipleting"/>
              <Field label="Email" name="email" type='email' value={form.email} onChange={handleChange} placeholder="example@gmail.com" />
            </div>
            <div className='grid gap-4 sm:grid-cols-2'>
              <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="(123) 456 - 789"/> 
              <Field label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Family"/> 
            </div>
            <div>
              <label> Message </label>
              <textarea name='message' rows={4} value={form.message} onChange={handleChange} placeholder='Please type your message here...' />
            </div>
            <button
            type='submit'
            >
              {sent ? "Message sent" : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label htmlFor={name}  >
        {label}
      </label>
      <input 
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='w-full rounded-xl border-white/10 bg-ink-900 px-4 py-2.5 text-sm text-white placeholder:text-mist-400 outline-none focus:border-cyan-accent'
      />
    </div>
  )

}

export default Contact