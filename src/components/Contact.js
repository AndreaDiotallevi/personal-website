import React from "react";

const Contact = () => {
  return (
    <div className="contact-component">
      <div className="contact-container">
        <div>
          <h4>Email</h4>
          <a href="mailto: andrea.diotallevi@outlook.com">
            andrea.diotallevi@outlook.com
          </a>
        </div>
        <div>
          <h4>Social</h4>
          <div>
            <p>
              <a
                href="https://www.linkedin.com/in/andrea-diotallevi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              {" / "}
              <a
                href="https://github.com/AndreaDiotallevi/cv"
                target="_blank"
                rel="noopener noreferrer"
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
