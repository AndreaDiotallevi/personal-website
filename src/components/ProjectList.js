import React from "react";
import ProjectGif from "./ProjectGif";
import ProjectOverview from "./ProjectOverview";
import projects from "../utils/projects";

const ProjectList = () => {
  const renderList = () => {
    return projects.map((project) => (
      <div className="project-list-item flex" key={project.name}>
        <div>
          <ProjectGif project={project} />
        </div>
        <div>
          <ProjectOverview project={project} />
        </div>
      </div>
    ));
  };

  return <div className="project-list-container">{renderList()}</div>;
};

export default ProjectList;
