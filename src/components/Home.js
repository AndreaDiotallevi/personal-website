import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-component">
      <div className="home-container">
        <h1>Hello! My name is Andrea Diotallevi</h1>
        <p>
          Check out my <Link to="/portfolio">latest projects</Link>
        </p>
        <p>
          And my <Link to="/blog">latest articles</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
