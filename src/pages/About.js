// src/pages/About.js
import React, { useState } from 'react';
import './About.css';

function About({ darkMode }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = {
    frontEnd: "React, JavaScript (ES6+), TypeScript, Python, Ruby",
    uxUi: "CSS, Bootstrap, D3, SASS, Responsive Design, Tailwind CSS, jQuery",
    backEnd: "Django, Express, SQLite, SQL, Node.js, RESTful APIs, MongoDB, PostgreSQL, MySQL, GraphQL, Docker"
  };

  return (
    <div className={`page-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="about-container">
        <section className="intro-section">
          <h1>About Me</h1>
          <p>Hello! I'm Ian Mount, a passionate web developer based in Hyde Park, Chicago. My journey into web development began after a long career in management within the food service industry, where I honed my skills in leadership, problem-solving, and project management.</p>
          <p>My transition into tech has been fueled by a love for creating minimalist, modern web applications that are both functional and aesthetically pleasing. I'm committed to continuous learning and have completed various certifications to deepen my expertise in full-stack development.</p>
        </section>
        <section className="skills-section">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div 
              className="skill-item" 
              onMouseEnter={() => setHoveredSkill('frontEnd')}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <h3>Front-End Development</h3>
              {hoveredSkill === 'frontEnd' && <p>{skills.frontEnd}</p>}
            </div>
            <div 
              className="skill-item" 
              onMouseEnter={() => setHoveredSkill('uxUi')}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <h3>UX/UI Design</h3>
              {hoveredSkill === 'uxUi' && <p>{skills.uxUi}</p>}
            </div>
            <div 
              className="skill-item" 
              onMouseEnter={() => setHoveredSkill('backEnd')}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <h3>Back-End Development</h3>
              {hoveredSkill === 'backEnd' && <p>{skills.backEnd}</p>}
            </div>
          </div>
        </section>
        <section className="timeline-section">
          <h2>My Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>2024 - Present</h3>
              <p>Junior Web Developer at XYZ Tech, Chicago, IL</p>
              <p>Building and maintaining responsive web applications using React and Node.js.</p>
            </div>
            <div className="timeline-item">
              <h3>2022 - 2024</h3>
              <p>Completed Web Development Certifications</p>
              <p>Earned certifications in full-stack development, focusing on JavaScript, React, and Node.js.</p>
            </div>
            <div className="timeline-item">
              <h3>2018 - 2022</h3>
              <p>Management in Food Service Industry</p>
              <p>Developed leadership skills and managed teams in a fast-paced environment.</p>
            </div>
          </div>
        </section>
        <section className="personal-section">
          <h2>A Little More About Me</h2>
          <p>When I'm not coding, I enjoy exploring the vibrant city of Chicago, experimenting with new recipes in the kitchen, and staying active with outdoor activities like hiking and biking. I'm also a tech enthusiast who loves keeping up with the latest trends in software development and design.</p>
        </section>
      </div>
    </div>
  );
}

export default About;