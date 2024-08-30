// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  duration: 0.5,
};

function Home() {
  return (
    <motion.div
      className="page-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Welcome to My Portfolio!</h1>
      <p>Hi, I'm Ian Mount, a passionate web developer based in Hyde Park, Chicago...</p>
      <button className="cta-button"><a href="/projects">View My Projects</a></button>
    </motion.div>
  );
}

export default Home;