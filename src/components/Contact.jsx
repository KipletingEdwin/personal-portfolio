
import { Mail, MapPin, Phone } from 'lucide-react';
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
              

            </div>
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
      className='w-full'
      />
    </div>
  )

}

export default Contact