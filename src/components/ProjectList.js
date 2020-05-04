import React from "react";
import ProjectGif from "./ProjectGif";
import ProjectOverview from "./ProjectOverview";
import projects from "../utils/projects";

const ProjectList = () => {
  const renderList = () => {
    return projects.map((project) => (
      <div className="project-list-item" key={project.name}>
        <ProjectOverview project={project} />
        <ProjectGif project={project} />
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
