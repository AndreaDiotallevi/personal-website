import React, { useState } from "react";

const ProjectIFrame = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true);

  const hideSpinner = () => {
    setIsLoading(false);
  };

  return (
    <div className="project-iframe-component">
      <div className="device-border">
        <div className="responsive">
          <iframe
            className={isLoading ? "loading" : ""}
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
