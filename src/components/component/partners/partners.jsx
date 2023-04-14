import { Col, Row, Typography } from "antd";
import React from "react";
import Container from "../container/container";
import { PARTNERS } from "./constants";

import "./partners.css";

const Partners = () => {
  return (
    <div className="partner_section">
      <Container className="partner_section--container">
        <Typography.Title
          level={2}
          className="partner_section_title text_center font_roboto"
        >
          Tersedia Juga di Partner Kami
        </Typography.Title>
        <Row
          className="partner_logo_pad"
          align="middle"
          justify="center"
          gutter={[24, 24]}
        >
          {PARTNERS.map((partner) => (
            <Col xs={12} sm={5} key={partner.id}>
              <img src={partner.image_url} alt={partner.alt_text} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Partners;
