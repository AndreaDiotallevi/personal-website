import React from "react";

const MenuToggleButton = ({ open, onClick }) => {
  return (
    <button
      className={`toggle-button ${open ? "menu-open" : undefined}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuToggleButton;
