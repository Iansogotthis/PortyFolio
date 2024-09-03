import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; 2024 Ian Mount. All rights reserved.</p>
      <ul className="footer-links">
        <li>
          <a href="https://github.com/Iansogotthis" aria-label="GitHub">
            <FaGithub className="footer-icon" />
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/webdevwonder88" aria-label="LinkedIn">
            <FaLinkedin className="footer-icon" />
          </a>
        </li>
        <li>
          <a href="mailto:mount88ian@gmail.com" aria-label="Email">
            <MdEmail className="footer-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;