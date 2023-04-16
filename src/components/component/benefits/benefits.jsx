import React from "react";

import { Badge, Card, Col, Row, Typography } from "antd";

import Container from "../container/container";

import { benefits } from "./constants";

import "./benefits.css";

const Benefits = () => {
  return (
    <Container className="benefit_section">
      <Typography.Title className="benefit_section_title text_center font_roboto">
        Kenapa Belajar di Alterra Academy?
      </Typography.Title>
      <Row gutter={[24, 24]} justify="center">
        {benefits.row1.map((benefit) => (
          <Col xs={24} md={12} key={benefit.id}>
            <Card
              className="custom__card"
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
              <img
                src={benefit.icon}
                alt="book_icon"
                width={50}
                style={{ margin: "auto" }}
              />
              <Typography.Title
                level={3}
                className="title text_center font_mulish"
              >
                {benefit.title}
              </Typography.Title>
              <Typography.Paragraph className="desc">
                {benefit.description}
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
      <Col xs={24} md={0}>
        <div style={{ padding: 12 }} />
      </Col>
      <Col xs={0} md={24}>
        <div style={{ padding: 12, textAlign: "center" }}>
          <Badge color="orange" />
        </div>
      </Col>
      <Row gutter={[24, 24]} justify="center">
        {benefits.row2.map((benefit) => (
          <Col xs={24} md={12} key={benefit.id}>
            <Card
              className="custom__card"
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
              <img
                src={benefit.icon}
                alt="book_icon"
                width={50}
                style={{ margin: "auto" }}
              />
              <Typography.Title
                level={3}
                className="title text_center font_mulish"
              >
                {benefit.title}
              </Typography.Title>
              <Typography.Paragraph className="desc">
                {benefit.description}
              </Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Benefits;
