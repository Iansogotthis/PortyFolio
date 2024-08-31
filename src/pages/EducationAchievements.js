// src/pages/EducationAchievements.js
import React, { useContext } from 'react';
import './EducationAchievements.css';

const EducationAchievements = ({ darkMode }) => {
    const education = {
        degree: "Bachelor's",
        fieldOfStudy: "Computer Science",
        university: "ABC University"
    };

    const achievements = [
        {
            name: "Successfully deployed a scalable e-commerce platform",
            description: "The platform handled a high volume of traffic and resulted in a significant increase in sales."
        },
        {
            name: "Developed an AI chatbot",
            description: "Created a chatbot using state-of-the-art NLP techniques that improved customer service efficiency."
        }
    ];

    return (
        <div className={`page-container ${darkMode ? "dark-mode" : "light-mode"}`}>
            <div className="education-achievements">
                <h1>Education</h1>
                <div className="education-item">
                    <p><strong>Degree:</strong> {education.degree}</p>
                    <p><strong>Field of study:</strong> {education.fieldOfStudy}</p>
                    <p><strong>University:</strong> {education.university}</p>
                </div>

                <h1>Achievements</h1>
                <div>
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-item">
                            <p><strong>Achievement name:</strong> {achievement.name}</p>
                            <p><strong>Description:</strong> {achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationAchievements;