import React from "react";

const ProjectGif = ({ project }) => {
  return (
    <div className="project-gif-container">
      <video controls loop muted className="project-video">
        <source src={require(`../assets/${project.videoUrl}`)} />
      </video>
    </div>
  );
};

export default ProjectGif;
