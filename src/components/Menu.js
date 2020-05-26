import React from "react";
import MenuItem from "./MenuItem";
import routes from "../utils/routes";

const Menu = ({ open, onClick, history }) => {
  const renderList = () => {
    if (open) {
      return (
        <div className="menu-component">
          <ul>
            {routes.map((item, index) => (
              <MenuItem
                key={index}
                onClick={onClick}
                item={item}
                history={history}
              />
            ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  };

  return renderList();
};

export default Menu;
