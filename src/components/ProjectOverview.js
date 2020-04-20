import React from "react";

const ProjectOverview = ({ project }) => {
  return (
    <div className="project-overview-container">
      <h3>{project.name}</h3>
      <p className="project-overview">{project.overview}</p>
      <span>
        <p className="bold">Stack: </p>
        <p className="margin-left">{project.devTechnologies}</p>
      </span>
      <span>
        <p className="bold">External APIs: </p>
        <p className="margin-left">{project.apis}</p>
      </span>
      <span>
        <p className="bold">Testing, CI, CD: </p>
        <p className="margin-left">{project.testingTechnologies}</p>
      </span>
      <span>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </span>
      <span>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </span>
    </div>
  );
};

export default ProjectOverview;
