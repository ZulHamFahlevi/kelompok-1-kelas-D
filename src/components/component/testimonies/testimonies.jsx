import React from "react";

import { Avatar, Card, Col, Row, Typography } from "antd";

import Container from "../container/container";

import "./testimonies.css";
import { TESTIMONIES } from "./constants";

const Testimonies = () => {
  return (
    <div className="testi_section">
      <Container className="testi_section--container">
        <Typography.Title className="testi_section_title font_roboto">
          Testimoni Pengguna
        </Typography.Title>
        <Row align="middle" justify="center" gutter={[24, 24]}>
          {TESTIMONIES.map((testimony) => (
            <Col xs={24} md={8} key={testimony.id}>
              <Card bodyStyle={{ padding: 0 }} className="test_card">
                <Avatar shape="circle" src={testimony.avatar_url} size={80} />
                <Typography.Text className="story font_mulish">
                  <q>{testimony.story}</q>
                </Typography.Text>
                <Typography.Title level={2} className="name font_roboto">
                  {testimony.name}
                </Typography.Title>
                <Typography.Text className="job font_mulish">
                  <i>{testimony.job}</i>
                </Typography.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonies;
