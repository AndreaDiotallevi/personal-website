import React, { useEffect } from "react";
import ProjectOverview from "./ProjectOverview";
import ProjectIFrame from "./ProjectIFrame";
import projects from "../utils/projects";

const ProjectList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderList = () => {
    return projects.map((project) => (
      <div className="project-list-item" key={project.name}>
        <ProjectOverview project={project} />
        <ProjectIFrame project={project} />
      </div>
    ));
  };

  return (
    <div className="project-list-component">
      <div className="project-list-container">{renderList()}</div>
    </div>
  );
};

export default ProjectList;
