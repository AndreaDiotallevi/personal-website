import React from "react";
import profilePhoto from "../assets/profile-photo.jpg";

const Contact = () => {
  return (
    <div className="contact-component">
      <div className="contact-container">
        <img className="profile-photo" src={profilePhoto} alt="Profile"></img>
        <div className="contact-overview-container">
          <p>I am a full-stack software engineer based in London.</p>
          <p>
            I have expertise in designing, implementing, and maintaining
            full-stack applications with proficiency in Node, React, Python,
            Git, CI/CD, and RESTful APIs.
          </p>
          <p>
            I have also experience collaborating in modern software
            methodologies like test-driven development, pair programming, code
            reviews and AGILE.
          </p>
          <p className="line-separator">------</p>
          <p>Email</p>
          <a
            className="email-anchor"
            href="mailto: andrea.diotallevi@outlook.com"
          >
            andrea.diotallevi@outlook.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
