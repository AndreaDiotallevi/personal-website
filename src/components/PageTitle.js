import React from "react";
import routes from "../utils/routes";

const PageTitle = ({ history }) => {
  const pathname = history.location.pathname;

  const getPageTitle = () => {
    const baseUrl = "/" + pathname.split("/")[1];
    const route = routes.filter((route) => route.baseUrl === baseUrl)[0];
    return route.pageTitle;
  };

  return (
    <div className="page-title-component">
      <div className="page-title-container">
        <h2 className="page-title">{getPageTitle()}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
