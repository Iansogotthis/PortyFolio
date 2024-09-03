// src/pages/EducationAchievements.js
import React, { useState } from "react";
import "./EducationAchievements.css";

const EducationAchievements = ({ darkMode }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const educations = [
        {
            degree: "GED",
            institution: "Harper College",
            year: "2009",
            details: "Completed GED program with honors"
        },
        {
            degree: "A+ Certification",
            institution: "Oakton Community College",
            year: "2013-2014",
            details: "Obtained A+ certification for IT professionals"
        },
    ];

    const certifications = [
        {
            name: "HTML, CSS, JavaScript, React Fundamentals",
            institution: "Codecademy.com",
            year: "Ongoing since 2021",
            details: "Completed various web development courses and projects"
        },
        {
            name: "Full Stack Web Development",
            institution: "Lambda School",
            year: "2021",
            details: "Intensive program covering front-end and back-end technologies"
        },
        {
            name: "Full Stack Web Development Junior Web Dev",
            institution: "App Academy",
            year: "Ongoing since 2021",
            details: "Comprehensive program focusing on modern web development practices"
        },
    ];

    const skills = {
        languages: "HTML, CSS, JavaScript, Ruby, Python",
        frameworks: "React, Express, Django",
        databases: "SQL, MongoDB, PostgreSQL, MySQL",
    };

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
                <div className="education-grid">
                    {educations.map((edu, index) => (
                        <div 
                            key={index} 
                            className="education-item"
                            onMouseEnter={() => setHoveredItem(`edu_${index}`)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <h3 style={{ color: 'Gray' }}>{edu.degree}</h3>
                            <p>{edu.institution}</p>
                            <p>{edu.year}</p>
                            {hoveredItem === `edu_${index}` && <p style={{ color: 'black' }}>{edu.details}</p>}
                        </div>
                    ))}
                </div>

                <h1>Certifications</h1>
                <div className="certification-grid">
                    {certifications.map((cert, index) => (
                        <div 
                            key={index} 
                            className="certification-item"
                            onMouseEnter={() => setHoveredItem(`cert_${index}`)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <h3 style={{ color: 'Gray' }}>{cert.name}</h3>
                            <p>{cert.institution}</p>
                            <p>{cert.year}</p>
                            {hoveredItem === `cert_${index}` && <p style={{ color: 'black' }}>{cert.details}</p>}
                        </div>
                    ))}
                </div>

                <h1>Skills</h1>
                <div className="skills-grid">
                    <div 
                        className="skill-item"
                        onMouseEnter={() => setHoveredItem('languages')}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <h3 style={{ color: 'Gray' }}>Programming Languages</h3>
                        {hoveredItem === 'languages' && <p style={{ color: 'black' }}>{skills.languages}</p>}
                    </div>
                    <div 
                        className="skill-item"
                        onMouseEnter={() => setHoveredItem('frameworks')}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <h3 style={{ color: 'Gray' }}>Frameworks</h3>
                        {hoveredItem === 'frameworks' && <p style={{ color: 'black' }}>{skills.frameworks}</p>}
                    </div>
                    <div 
                        className="skill-item"
                        onMouseEnter={() => setHoveredItem('databases')}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <h3 style={{ color: 'Gray' }}>Databases</h3>
                        {hoveredItem === 'databases' && <p style={{ color: 'black' }}>{skills.databases}</p>}
                    </div>
                </div>

                <h1>Notable Projects</h1>
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <p><strong>Project name:</strong> {project.name}</p>
                        <p><strong>Description:</strong> {project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationAchievements;