import React from "react";
import "./Projects.css";
import checkersImage from "../images/checkers.jpg";
import postPiece from "../images/vibetime.jpg";
import rpsImg from "../images/rps.jpg";
import destination from "../images/destination.jpg";
import whackImg from "../images/whack.png";
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
      imageSrc: checkersImage,
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
      imageSrc: rpsImg,
      altText: "Rock Paper Scissors Screenshot",
      description: (
        <>
          <p>
            A simple HTML/CSS/JS Rock Paper Scissors variation featuring:
            <ol>
              <li>A clean, simple, and intuitive interface</li>
              <li>Random computer move generation</li>
              <li>Outcome display for each round</li>
            </ol>
          </p>
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
      imageSrc: postPiece,
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
      imageSrc: destination,
      altText: "Task Management Tool Screenshot",
      description: (
        <>
          <p>
            Django-based travel platform showcasing restaurants and hotels
            worldwide. Features user profiles, photo galleries, and activity
            listings. Implemented with Python, HTML/CSS, JavaScript, and
            Bootstrap. Demonstrates full-stack development skills, database
            management, and responsive design.
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
      title: "Whack A Mole",
      imageSrc:whackImg,
      altText: "Personal Blog Screenshot",
      description: (
        <>
          <p>
          
            Whack-a-Mole is a Python game implemented using the pygame library. In this game, the player uses a mallet to hit moles that pop up from holes in a grid. The player scores points for each mole hit, and the game gets progressively harder as the moles appear and disappear more quickly. The main features include:
            <ol>
              <li>Interactive gameplay with increasing difficulty</li>
              <li>Score tracking and high score saving</li>
              <li>Colorful graphics and animations</li>
              
            </ol>
          </p>
        </>
      ),
      links: [{ href: "https://github.com/Iansogotthis/whackAmole", text: "View on GitHub" },
              { href: "https://oholeymoley.replit.app/", text: "Play It" }
             ],
      
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
