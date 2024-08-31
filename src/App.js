// src/App.js
import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import "./styles.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const EducationAchievements = lazy(() => import("./pages/EducationAchievements"));

function App() {
    useEffect(() => {
        const socket = new WebSocket('wss://gryndev.replit.app:3000/ws');

        socket.addEventListener('open', () => {
            console.log('WebSocket is connected.');
        });

        socket.addEventListener('message', event => {
            console.log('Message from server:', event.data);
        });

        socket.addEventListener('close', () => {
            console.log('WebSocket is closed.');
        });

        socket.addEventListener('error', event => {
            console.error('WebSocket error observed:', event);
        });

        return () => {
            socket.close();
        };
    }, []);

    return (
        <Router>
            <div className="app-container">
                <Nav />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/education-achievements" element={<EducationAchievements />} />
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </Router>
    );
}

export default App;