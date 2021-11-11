import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { headerLabels } from "./header.labels";

const Header = () => {
  const setActive = ({ isActive }: any) =>
    isActive ? "header-item active" : "header-item";

  return (
    <div className="header">
      <NavLink to="/" className={setActive}>
        {headerLabels.news}
      </NavLink>
      <NavLink to="/users-info" className={setActive}>
        {headerLabels.profile}
      </NavLink>
    </div>
  );
};

export default Header;
