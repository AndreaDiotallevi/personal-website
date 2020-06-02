import React from "react";
import { Link } from "react-router-dom";
import MenuToggleButton from "./MenuToggleButton";
import routes from "../utils/routes";

const Navbar = ({ open, onClick, history }) => {
  const pathname = history.location.pathname;

  const getLinkClassName = (url) => {
    let classes = "";

    if (pathname.includes(url) && url !== "/") {
      classes += " link-active";
    } else if (pathname === "/" && url === "/") {
      classes += " link-active";
    }

    return classes;
  };

  return (
    <div className="navbar-component">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <h1
              id="navbar-title"
              className={`navbar-title ${getLinkClassName()}`}
            >
              Andrea Diotallevi
            </h1>
          </Link>
        </div>
        <ul className="navbar-right">
          {routes.map((route) => (
            <li key={route.menuName}>
              <Link
                to={route.baseUrl}
                className={`navbar-link ${getLinkClassName(route.baseUrl)}`}
              >
                {route.menuName}
              </Link>
            </li>
          ))}
          <MenuToggleButton open={open} onClick={onClick} history={history} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
