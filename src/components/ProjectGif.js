import React from "react";

const ProjectGif = ({ project }) => {
  return (
    <div className="project-gif-container test">
      <video controls autoPlay loop muted className="project-video">
        <source src={require(`../assets/${project.videoUrl}`)} />
      </video>
    </div>
  );
};

export default ProjectGif;