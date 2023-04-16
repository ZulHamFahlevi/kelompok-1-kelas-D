import React from "react";
import { Link } from "react-router-dom";

import { Button, Card, Col, Row, Typography } from "antd";

import { POPULAR_COURSES } from "./constants";
import { currencyFormatter } from "../../../helpers/currencyFormatter";

import Container from "../container/container";

import "./popular-courses.css";

const PopularCourses = () => {
  return (
    <div className="popular_section">
      <Container className="popular_section--container">
        <Typography.Title
          level={1}
          className="popular_section_title text_center font_roboto"
        >
          Kursus Terpopuler
        </Typography.Title>
        <Row align="middle" justify="center" gutter={[24, 24]}>
          {POPULAR_COURSES.map((popular) => (
            <Col xs={24} sm={12} md={8} key={popular.id}>
              <Card
                className={`popular_card ${popular.id === 1 ? "orange" : ""}`}
                bordered
                bodyStyle={{ padding: 10 }}
              >
                <div className="popular_image_wrapper">
                  <img src={popular.image_courses} />
                </div>
                <Typography.Title level={3} className="title font_opensans">
                  {popular.title}
                </Typography.Title>
                <Typography.Paragraph className="desc font_opensans">
                  {popular.description}
                </Typography.Paragraph>
                <Typography.Text className="price font_mulish">
                  <del>{currencyFormatter("Rp.", popular.price)}</del>
                </Typography.Text>
                <Typography.Text className="price_disc font_opensans">
                  {currencyFormatter("Rp.", popular.price_disc)}
                </Typography.Text>
                <Link to={popular.link}>
                  <Button type="ghost" className="popular_btn font_opensans">
                    Lihat Kelas
                  </Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PopularCourses;
