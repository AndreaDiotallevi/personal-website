import React from "react";

const pageTitles = {
  "/": "My Software Development Projects",
  "/about": "About Me",
};

const PageTitle = ({ history }) => {
  return (
    <div className="page-title-component">
      <h2 className="page-title">{pageTitles[history.location.pathname]}</h2>
    </div>
  );
};

export default PageTitle;
