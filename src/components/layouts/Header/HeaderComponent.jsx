import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logoOne } from "../../../assets";
import DropdownComponent from "../../component/dropdown/dropdown";
import { menuList } from "./constants";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function HeaderComponent() {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <img src={logoOne} alt="Logo One" className="logo" />
      </Link>
      <div className="searchCircle">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchLogo" />
      </div>
      <ul style={{ marginLeft: "auto" }}>
        {menuList.map((menu, idx) => (
          <React.Fragment key={idx}>
            <DropdownComponent menu={menu} pathname={location.pathname} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
