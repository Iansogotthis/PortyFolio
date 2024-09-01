// src/pages/EducationAchievements.js
import React from "react";
import "./EducationAchievements.css";

const EducationAchievements = ({ darkMode }) => {
    const educations = [
        {
            degree: "GED",
            institution: "Harper College",
            year: "2009",
        },
        {
            degree: "A+ Certification",
            institution: "Oakton Community College",
            year: "2013-2014",
        },
    ];

    const certifications = [
        {
            name: "HTML, CSS, JavaScript, React Fundamentals",
            institution: "Codecademy.com",
            year: "Ongoing since 2021",
        },
        {
            name: "Full Stack Web Development",
            institution: "Lambda School",
            year: "2021",
        },
        {
            name: "Full Stack Web Development Junior Web Dev",
            institution: "App Academy",
            year: "Ongoing since 2021",
        },
    ];

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Ruby",
        "Python",
        "React",
        "SQL",
    ];

    const projects = [
        {
            name: "PeerThruPeer Model",
            description:
                "Developed the 'PeerThruPeer' model for effective efficiency training, resulting in increased sales and decreased complaints.",
        },
    ];

    return (
        <div className={`page-container ${darkMode ? "dark-mode" : ""}`}>
            <div className="education-achievements">
                <h1>Education</h1>
                {educations.map((edu, index) => (
                    <div key={index} className="education-item">
                        <p>
                            <strong>Degree:</strong> {edu.degree}
                        </p>
                        <p>
                            <strong>Institution:</strong> {edu.institution}
                        </p>
                        <p>
                            <strong>Year:</strong> {edu.year}
                        </p>
                    </div>
                ))}

                <h1>Certifications</h1>
                {certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                        <p>
                            <strong>Certification:</strong> {cert.name}
                        </p>
                        <p>
                            <strong>Institution:</strong> {cert.institution}
                        </p>
                        <p>
                            <strong>Year:</strong> {cert.year}
                        </p>
                    </div>
                ))}

                <h1>Skills</h1>
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-item">
                            {skill}
                        </span>
                    ))}
                </div>

                <h1>Notable Projects</h1>
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <p>
                            <strong>Project name:</strong> {project.name}
                        </p>
                        <p>
                            <strong>Description:</strong> {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationAchievements;
