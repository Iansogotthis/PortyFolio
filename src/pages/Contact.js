import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch('https://formspree.io/f/mqkrwqzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setResponseMessage('Thank you for your message! I will get back to you soon.');
        form.reset();
      } else {
        setResponseMessage('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      setResponseMessage('Error sending message. Please try again later.');
    }
  };

  return (
    <section id="contact">
      <h2 style={{ textAlign: 'center' }}>Get in Touch</h2>
      <br />

      <ul className="contact-links">
        <li>
          <a href="https://github.com/Iansogotthis">
            GitHub
            <img src="/images/git.jpg" alt="GitHub Logo" style={{ width: '16px', height: '16px' }} />
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/webdevwonder88">
            LinkedIn
            <img src="/images/linkd.png" alt="LinkedIn Logo" style={{ width: '16px', height: '16px' }} />
          </a>
        </li>
      </ul>
      <br />

      <div id="responseMessage">{responseMessage && <p>{responseMessage}</p>}</div>

      <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          style={{ textAlign: 'center', border: '2px solid white' }}
          type="text"
          id="name"
          name="name"
          className="feedback-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          style={{ textAlign: 'center', border: '2px solid white' }}
          type="email"
          id="email"
          name="email"
          className="feedback-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          style={{ textAlign: 'center', border: '2px solid white' }}
          id="message"
          name="message"
          className="feedback-input"
          placeholder="Comment"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
