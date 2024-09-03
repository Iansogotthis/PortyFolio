// src/pages/Projects.js
import React from "react";
import "./Projects.css";

// ProjectCard Component
const ProjectCard = ({
  title,
  imageSrc,
  altText,
  description,
  links,
  darkMode,
}) => (
  <div className="project-card">
    <h2>{title}</h2>
    <img src={imageSrc} alt={altText} />
    {typeof description === "string" ? <p>{description}</p> : description}
    <div className="button-container">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-link ${darkMode ? "dark-mode" : ""}`}
        >
          {link.text}
        </a>
      ))}
    </div>
  </div>
);

// Projects Component
const Projects = ({ darkMode }) => {
  const projectData = [
    {
      title: "Checkers Game",
      imageSrc:"./images/checkers.jpg",
      altText: "Checkers Game Screenshot",
      description: "This project is a JavaScript Checkers Game.",
      links: [
        {
          href: "https://github.com/Iansogotthis/berrybananaCheckers",
          text: "View on GitHub",
        },
        {
          href: "https://iansogotthis.github.io/berrybananaCheckers/",
          text: "Play It",
        },
      ],
    },
    {
      title: "Rock Paper Scissors",
      imageSrc:
        "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_IMAGE_ID_FOR_RPS",
      altText: "Rock Paper Scissors Screenshot",
      description: (
        <>
          <p>A simple HTML/CSS/JS Rock Paper Scissors variation featuring:</p>
          <ol>
            <li>A clean, simple, and intuitive interface</li>
            <li>Random computer move generation</li>
            <li>Outcome display for each round</li>
          </ol>
        </>
      ),
      links: [
        {
          href: "https://github.com/Iansogotthis/RockPaperScissors",
          text: "View on GitHub",
        },
        {
          href: "https://codepen.io/Ian-the-styleful/full/yLwNNRo",
          text: "Play It",
        },
      ],
    },
    {
      title: "Social Media Site",
      imageSrc:
        "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_IMAGE_ID_FOR_SOCIAL_MEDIA",
      altText: "Social Media Site Screenshot",
      description: (
        <>
          <p>
            Vibetime is a web application that allows users to share and read
            stories. Features include:
          </p>
          <ol>
            <li>User authentication</li>
            <li>Story sharing</li>
            <li>Story reading</li>
            <li>Random story generation</li>
          </ol>
        </>
      ),
      links: [
        {
          href: "https://github.com/Iansogotthis/ProjectThree",
          text: "View on GitHub",
        },
        { href: "https://vibestime.onrender.com", text: "Visit Site" },
      ],
    },
    {
      title: "Destination",
      imageSrc:
        "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_IMAGE_ID_FOR_DESTINATION",
      altText: "Task Management Tool Screenshot",
      description: (
        <>
          <p>
            A task management tool built with React and Firebase. It allows
            users to create, edit, and delete tasks, and track their progress
            with a user-friendly interface.
          </p>
        </>
      ),
      links: [
        {
          href: "https://github.com/Iansogotthis/destination",
          text: "View on GitHub",
        },
        { href: "https://destination-htb7.onrender.com/", text: "Visit Site" },
      ],
    },
    {
      title: "Personal Blog",
      imageSrc:
        "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_IMAGE_ID_FOR_BLOG",
      altText: "Personal Blog Screenshot",
      description: (
        <>
          <p>
            A personal blog built with Gatsby and GraphQL. It features a clean,
            responsive design and allows me to easily publish and manage blog
            posts.
          </p>
        </>
      ),
      links: [{ href: "link-to-project-repo", text: "View on GitHub" }],
    },
  ];

  return (
    <div className={`page-container ${darkMode ? "dark-mode" : ""}`}>
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
