import { Col, Row } from "antd";
import React from "react";
import { GridIcon, ListIcon, SearchIcon } from "../../../assets/";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <Row className="container-header">
      <Col>
        <h1 className="title-header">Courses</h1>
      </Col>
      <Col>
        <div className="container-search">
          <input type="text" className="input-search" />
          <span className="search-icon">
            <img src={SearchIcon} alt="search" width={20} className="search" />
          </span>
        </div>
      </Col>
      <Col>
        <div className="container-sort">
          <span className="sort-by">Sort By:</span>
          <span className="release-date">Release date (newest first)</span>
        </div>
      </Col>
      <Col>
        <div className="container-header-icon">
          <span className="grid-icon">
            <img src={GridIcon} alt="gride icon" style={{ width: 20 }} />
          </span>
          <span className="list-icon">
            <img src={ListIcon} alt="gride icon" style={{ width: 30 }} />
          </span>
        </div>
      </Col>
    </Row>
  );
};

export default HeaderComponent;
