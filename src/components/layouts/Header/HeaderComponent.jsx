import { Menu, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { logoOne } from "../../../assets";
import DropdownComponent from "../../component/dropdown/dropdown";
import { menuList } from "./constants";
import Link from "../../../router/Link";
import "./header.css";
import { useEffect, useState } from "react";
export default function HeaderComponent() {
  const [location, setLocation] = useState("/");

  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  return (
    <div className="header">
      <Link href="/">
        <img src={logoOne} alt="Logo One" className="logo" />
      </Link>
      <div className="searchCircle">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchLogo" />
      </div>
      <Row style={{ marginLeft: "auto" }}>
        {menuList.map((menu, idx) => (
          <DropdownComponent
            key={idx}
            title={menu.title}
            submenu={menu.subMenu}
            link={menu.link}
            location={location}
            setLocation={setLocation}
          />
        ))}
      </Row>
    </div>
  );
}
