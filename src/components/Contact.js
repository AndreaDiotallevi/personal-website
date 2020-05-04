import React from "react";

const Contact = () => {
  return (
    <div className="contact-component">
      <div className="contact-container">
        <h1>Let's Talk</h1>
        <div>
          <h4>Email</h4>
          <a
            className="social-media-anchor"
            href="mailto: andrea.diotallevi@outlook.com"
          >
            andrea.diotallevi@outlook.com
          </a>
        </div>
        <div>
          <h4>Social</h4>
          <div className="social-media-links-container">
            <p>
              <a
                className="social-media-anchor"
                href="https://www.linkedin.com/in/andrea-diotallevi/"
              >
                Linkedin
              </a>
              {" / "}
              <a
                className="social-media-anchor"
                href="https://github.com/AndreaDiotallevi/cv"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
