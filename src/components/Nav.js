// src/components/Nav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`nav-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="nav-content">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/education-achievements" onClick={() => setMenuOpen(false)}>Qualifications</Link></li>
        </ul>
      </div>
      <button onClick={toggleDarkMode} className="dark-mode-toggle" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Nav;