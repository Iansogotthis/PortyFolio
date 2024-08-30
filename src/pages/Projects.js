// src/pages/Projects.js
import React from "react";
import "./Projects.css";

// ProjectCard Component
const ProjectCard = ({ title, imageSrc, altText, description, links }) => (
  <div className="project-card">
    <h2>{title}</h2>
    <img src={imageSrc} alt={altText} />
    <p>{description}</p>
    {links.map((link, index) => (
      <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
        {link.text}
      </a>
    ))}
  </div>
);

// Projects Component
const Projects = ({ darkMode }) => {
  const projectData = [
    {
      title: "Checkers Game",
      imageSrc: "./images/checkers.png",
      altText: "Checkers Game Screenshot",
      description: "This project is a JavaScript Checkers Game.",
      links: [
        { href: "https://github.com/Iansogotthis/berrybananaCheckers", text: "View on GitHub" },
        { href: "https://iansogotthis.github.io/berrybananaCheckers/", text: "Play It" },
      ],
    },
    {
      title: "Rock Paper Scissors",
      imageSrc: "path/to/screenshot2.png",
      altText: "Rock Paper Scissors Screenshot",
      description: (
        <>
          A simple HTML/CSS/JS Rock Paper Scissors variation featuring:
          <ol>
            <li>A clean, simple, and intuitive interface</li>
            <li>Random computer move generation</li>
            <li>Outcome display for each round</li>
          </ol>
        </>
      ),
      links: [
        { href: "https://github.com/Iansogotthis/RockPaperScissors", text: "View on GitHub" },
        { href: "https://codepen.io/Ian-the-styleful/full/yLwNNRo", text: "Play It" },
      ],
    },
    {
      title: "Social Media Site",
      imageSrc: "path/to/screenshot3.png",
      altText: "Social Media Site Screenshot",
      description: (
        <>
          Vibetime is a web application that allows users to share and read stories. Features include:
          <ol>
            <li>User authentication</li>
            <li>Story sharing</li>
            <li>Story reading</li>
            <li>Random story generation</li>
          </ol>
        </>
      ),
      links: [
        { href: "https://github.com/Iansogotthis/ProjectThree", text: "View on GitHub" },
        { href: "https://vibestime.onrender.com", text: "Visit Site" }
      ],
    },
    {
      title: "Destination",
      imageSrc: "path/to/screenshot4.png",
      altText: "Task Management Tool Screenshot",
      description: "A task management tool built with React and Firebase. It allows users to create, edit, and delete tasks, and track their progress with a user-friendly interface.",
       links: [
        { href: "https://github.com/Iansogotthis/destination", text: "View on GitHub" },
        { href: "https://destination-htb7.onrender.com/", text: "Visit Site" }
      ],
    },
    {
      title: "Personal Blog",
      imageSrc: "path/to/screenshot5.png",
      altText: "Personal Blog Screenshot",
      description: "A personal blog built with Gatsby and GraphQL. It features a clean, responsive design and allows me to easily publish and manage blog posts.",
      links: [{ href: "link-to-project-repo", text: "View on GitHub" }],
    },
  ];

  return (
    <div className={`page-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
