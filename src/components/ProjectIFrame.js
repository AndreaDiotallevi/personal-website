import React, { useState } from "react";

const ProjectIFrame = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true);

  const hideSpinner = () => {
    console.log("here loaded");
    setIsLoading(false);
  };

  return (
    <div className="project-iframe-component">
      <div className="device-border">
        <div className="responsive">
          {isLoading ? <div className="loading"></div> : null}
          <iframe
            src={project.demoUrl}
            title={project.name}
            onLoad={hideSpinner}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectIFrame;
