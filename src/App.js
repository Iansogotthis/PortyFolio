// src/App.js
import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import "./styles.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const EducationAchievements = lazy(
    () => import("./pages/EducationAchievements"),
);

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Router>
            <div className={`app ${darkMode ? "dark-mode" : ""}`}>
                <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home darkMode={darkMode} />}
                        />
                        <Route
                            path="/about"
                            element={<About darkMode={darkMode} />}
                        />
                        <Route
                            path="/projects"
                            element={<Projects darkMode={darkMode} />}
                        />
                        <Route
                            path="/contact"
                            element={<Contact darkMode={darkMode} />}
                        />
                        <Route
                            path="/education-achievements"
                            element={
                                <EducationAchievements darkMode={darkMode} />
                            }
                        />
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
