
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
    <section>
      <div>
        <div>
          <h2>Contact Us</h2>
          <p> Have a project in mind? Let's connect and discuss how I can help bring your ideas to life. </p>
        </div>
        <div>
          <div>
            <h3>Get in touch today</h3> 
            <p> I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. </p>
            <ul>
              <li><Mail size={18}/>kipletingedwin4@gmail.com</li>
              <li><Phone size={18}/>+92 3000000</li>
              <li><MapPin size={18}/>London, UK</li>
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