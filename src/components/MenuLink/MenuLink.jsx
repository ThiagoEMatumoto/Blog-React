import React from "react";
import styles from "./MenuLink.module.css";
import { NavLink } from "react-router-dom";

const MenuLink = ({ children, to }) => {
  return (
    <NavLink
      className={({ isActive }) => `
    ${styles.link}
    ${isActive ? styles.link_Destaque: ""}
`}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default MenuLink;
