import {
  faMagnifyingGlass,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logoOne } from "../../../assets";
import DropdownComponent from "../../component/dropdown/dropdown";
import { menuList } from "./constants";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import Container from "../../component/container/container";
import HeaderComponentMobile from "./HeaderComponentMobile";

export default function HeaderComponent() {
  const location = useLocation();

  const [isOpenMobilemMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <React.Fragment>
      {isOpenMobilemMenu && <HeaderComponentMobile />}
      <header className="header">
        <Container className="header__container">
          <Row align="middle" justify="space-between">
            <Col lg={4}>
              <Row align="middle">
                <Link to="/">
                  <img src={logoOne} alt="Logo One" className="logo" />
                </Link>
                <div className="searchCircle">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="searchLogo"
                  />
                </div>
              </Row>
            </Col>
            <Col lg={0}>
              <FontAwesomeIcon
                icon={isOpenMobilemMenu ? faClose : faBars}
                style={{ fontSize: 22 }}
                onClick={() => setIsOpenMobileMenu(!isOpenMobilemMenu)}
              />
            </Col>
            <Col xs={0} lg={15}>
              <nav>
                <ul
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  {menuList.map((menu, idx) => (
                    <React.Fragment key={idx}>
                      <DropdownComponent
                        menu={menu}
                        pathname={location.pathname}
                      />
                    </React.Fragment>
                  ))}
                </ul>
              </nav>
            </Col>
            <Col xs={0} lg={5}>
              <Link to="/">
                <Button className="btn__login" type="ghost">
                  Login or Register
                </Button>
              </Link>
            </Col>
          </Row>
          <Col xs={24} lg={0}>
            <Link to="/">
              <Button className="btn__login" block type="ghost">
                Login or Register
              </Button>
            </Link>
          </Col>
        </Container>
      </header>
    </React.Fragment>
  );
}
