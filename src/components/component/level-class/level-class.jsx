import React from "react";
import { Link } from "react-router-dom";

import DOMPurify from "isomorphic-dompurify";

import { Button, Col, Row, Typography } from "antd";

import RightArrow from "../../../assets/icons/right-arrow.png";

import { LEVEL_CLASS } from "./constants";

import Container from "../container/container";

import "./level-class.css";

const LevelClass = () => {
  return (
    <div className="level_section">
      <Container className="level_section--container">
        <Typography.Title level={1} className="level_section_title font_roboto">
          Tingkatan Kelas
        </Typography.Title>
        <Row justify="center" gutter={[24, 24]}>
          {LEVEL_CLASS.map((level) => (
            <React.Fragment key={level.id}>
              <Col xs={24} lg={7}>
                <div style={{ position: "relative" }}>
                  <Row align="middle">
                    <img src={level.image_url} alt="book_icon" height={55} />
                    <div className="level_card_wrapper_inner">
                      <Typography.Title level={2} className="title font_mulish">
                        {level.title}
                      </Typography.Title>
                      <Typography.Text className="level font_mulish">
                        {level.level_class}
                      </Typography.Text>
                    </div>
                  </Row>
                  <div
                    className="level_card_box"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(level.description),
                    }}
                  />
                  {level.button_disabled ? (
                    <Button type="ghost" className="level_btn disabled">
                      {level.button_text}
                    </Button>
                  ) : (
                    <Link to={level.button_url}>
                      <Button type="ghost" className="level_btn">
                        {level.button_text}
                      </Button>
                    </Link>
                  )}
                </div>
              </Col>
              {level.isArrowRight ? (
                <div className="arrow_level">
                  <img src={RightArrow} alt="arrow_icon" width={30} />
                </div>
              ) : null}
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LevelClass;
