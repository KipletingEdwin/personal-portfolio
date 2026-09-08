
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
      </div>
    </section>
  )
}

export default Contact