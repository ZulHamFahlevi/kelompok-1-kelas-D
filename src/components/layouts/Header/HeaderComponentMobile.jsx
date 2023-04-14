import React from "react";
import { useLocation } from "react-router-dom";

import DropdownComponent from "../../component/dropdown/dropdown";

import { menuList } from "./constants";

import "./header-mobile.css";

const HeaderComponentMobile = () => {
  const location = useLocation();

  return (
    <nav className="nav-mobile">
      <ul>
        {menuList.map((menu, idx) => (
          <React.Fragment key={idx}>
            <DropdownComponent menu={menu} pathname={location.pathname} />
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderComponentMobile;
