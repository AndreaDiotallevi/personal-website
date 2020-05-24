import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-component">
      <div className="home-container">
        <h1>Hello! My name is Andrea Diotallevi</h1>
        <p>
          I am a full-stack software engineer based in London with expertise in
          designing, implementing, and maintaining full-stack applications with
          proficiency in Node, React, Python, Git, CI/CD, and RESTful APIs.
        </p>
        <p>
          Check out my <Link to="/portfolio">latest projects.</Link>
        </p>
        <p>
          And my <Link to="/blog">latest articles.</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
