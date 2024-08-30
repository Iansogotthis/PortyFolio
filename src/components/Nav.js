// src/components/Nav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="nav-container" aria-label="Main Navigation">
  <ul>
    <li><Link to="/" aria-label="Home">Home</Link></li>
    <li><Link to="/about" aria-label="About Me">About</Link></li>
    <li><Link to="/projects" aria-label="My Projects">Projects</Link></li>
    <li><Link to="/contact" aria-label="Contact Me">Contact</Link></li>
  </ul>

      <button onClick={toggleDarkMode} className="toggle-button">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default Nav;

