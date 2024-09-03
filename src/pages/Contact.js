// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={`page-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop me a message.</p>

        <div className="contact-card">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="contact-card">
          <h2>Other Ways to Connect</h2>
          <ul className="contact-info">
            <li>Email: ian.mount@example.com</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/ianmount" target="_blank" rel="noopener noreferrer">linkedin.com/in/ianmount</a></li>
            <li>GitHub: <a href="https://github.com/ianmount" target="_blank" rel="noopener noreferrer">github.com/ianmount</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;