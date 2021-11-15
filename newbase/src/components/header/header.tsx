import React from "react";
import { NavLink } from "react-router-dom";
import { headerLabels } from "./header.labels";
import styledHeader from "./header.styles";
import clsx from 'clsx';

const Header = () => {
  const setActive = ({ isActive }: any) =>
    isActive ? (clsx(headerStyled.headerItem, {[headerStyled.headerItemActive]: true})) : (headerStyled.headerItem);
   const headerStyled = styledHeader({color: 'black'});

  return (
    <div className={headerStyled.header}>
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
