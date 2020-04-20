import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a
        href="https://medium.com/@andreadiotallevi"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-link"
      >
        Blog
      </a>
      <Link to="/" className="navbar-link">
        <p className="navbar-link">Projects</p>
      </Link>
    </div>
  );
};

export default Navbar;
