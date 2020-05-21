import React from "react";

const ProjectIFrame = ({ project }) => {
  return (
    <div className="project-iframe-component">
      <div className="device-border">
        <div className="responsive">
          <iframe src={project.demoUrl} title={project.name}></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectIFrame;
