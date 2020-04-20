import React from "react";

const ProjectOverview = ({ project }) => {
  return (
    <div className="project-overview-container">
      <h3>{project.name}</h3>
      <p>{project.overview}</p>
    </div>
  );
};

export default ProjectOverview;
