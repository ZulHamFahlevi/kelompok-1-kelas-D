import React from "react";
import { Link } from "react-router-dom";

import { Button, Col, Row, Typography } from "antd";

import Container from "../container/container";

import "./steps.css";

const Steps = () => {
  return (
    <div className="langkah_section">
      <Container className="langkah_section--container">
        <Row align="middle" justify="center" gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Typography.Title level={1} className="title font_roboto">
              Mulai langkahmu hari ini!
            </Typography.Title>
          </Col>
          <Col xs={24} lg={12}>
            <Link to="#">
              <Button type="ghost" className="langkah_button">
                Ambil Kelasmu Sekarang
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Steps;
