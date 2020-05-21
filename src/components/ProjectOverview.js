import React from "react";

const ProjectOverview = ({ project }) => {
  return (
    <div className="project-overview-component">
      <h1 className="project-name">{project.name}</h1>
      <p className="project-overview">{project.overview}</p>
      <p>Built with {project.devTechnologies}</p>
      <p>
        Check out the{" "}
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          website
        </a>
        , the{" "}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          code
        </a>{" "}
        or play with the embedded application below.
      </p>
    </div>
  );
};

export default ProjectOverview;
