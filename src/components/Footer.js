import React from "react";
import EmailLogo from "../assets/email-logo.png";
import LinkedinLogo from "../assets/linkedin-logo.png";
import GitHubLogo from "../assets/github-logo.png";

const Footer = () => {
  return (
    <div className="footer-component">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-copyright">© 2020, Andrea Diotallevi</p>
        </div>
        <div className="footer-right">
          <a href="mailto: andrea.diotallevi@outlook.com">
            <img id="email-logo" src={EmailLogo} alt="Email"></img>
          </a>
          <a href="https://www.linkedin.com/in/andrea-diotallevi/">
            <img id="linkedin-logo" src={LinkedinLogo} alt="Linkedin"></img>
          </a>
          <a href="https://github.com/AndreaDiotallevi/cv">
            <img id="github-logo" src={GitHubLogo} alt="GitHub"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
