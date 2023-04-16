import React from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

export default function DropdownComponent({ menu, pathname }) {
  return (
    <div className="dropdown">
      <li
        className={`dropdown-container ${
          menu.link === pathname ? "active" : ""
        }`}
      >
        <Link to={menu.link} className="menu-title">
          {menu.title}
        </Link>
        {menu.subMenu.length >= 1 && <i className="bx bxs-down-arrow"></i>}
      </li>
      {menu.subMenu.length >= 1 ? (
        <div className="dropdown-submenu">
          {menu.subMenu.map((sub, idx) => (
            <Link className="dropdown-subtitle" key={idx} to={sub.href}>
              {sub.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
