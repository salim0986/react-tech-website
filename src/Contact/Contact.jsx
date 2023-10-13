import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({});
  const { name, email, message } = form;
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <section id="contact">
      <div className="contact">
        <h2 className="contactHeading">Contact us</h2>
        <form className="contactForm">
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Abc"
              value={name}
              onChange={(e) => handleForm(e)}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              placeholder="abc@mail.com"
              value={email}
              onChange={(e) => handleForm(e)}
            />
          </label>
          <label>
            Message
            <input
              type="text"
              name="message"
              placeholder="Tell us about your query..."
              value={message}
              onChange={(e) => handleForm(e)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}
