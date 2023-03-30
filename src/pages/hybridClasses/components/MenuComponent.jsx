import React from "react";
import { Card, Col, Row, Image } from "antd";
import { DATA_FUNDAMENTAL, DATA_MASTERING, DATA_PRAKERJA } from "../constants";
import "./MenuComponent.css";

const MenuComponent = () => {
  return (
    <>
      <Row>
        {DATA_FUNDAMENTAL.map((item, index) => {
          return (
            <Col
              className="container-col"
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <Card
                className="container-card"
                hoverable
                cover={<Image preview={false} src={item.image} />}
              >
                <div>
                  <span>
                    <p className="item-kelas">{item.kelas}</p>
                    <h3>{item.title}</h3>
                  </span>
                  <hr className="garis" />
                  <span className="container-price">
                    <Image preview={false} src={item.member} width={20} />
                    <strong>{item.price}</strong>
                  </span>
                </div>
              </Card>
            </Col>
          );
        })}
        {DATA_PRAKERJA.map((item, index) => {
          return (
            <Col
              className="container-col"
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <Card
                className="container-card-2"
                hoverable
                cover={<Image preview={false} src={item.image} />}
              >
                <div>
                  <span>
                    <p className="item-kelas">{item.kelas}</p>
                    <h3>{item.title}</h3>
                  </span>
                  <hr className="garis" />
                  <span className="container-price">
                    <Image preview={false} src={item.member} width={20} />
                    <p>{item.price}</p>
                  </span>
                </div>
              </Card>
            </Col>
          );
        })}
        {DATA_MASTERING.map((item, index) => {
          return (
            <Col
              className="container-col"
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <Card
                hoverable
                className="container-card-2"
                cover={<Image preview={false} src={item.image} />}
              >
                <div>
                  <span>
                    <p className="item-kelas">{item.kelas}</p>
                    <h3>{item.title}</h3>
                  </span>
                  <hr className="garis" />
                  <span className="container-price">
                    <s>{item.member}</s>
                    <strong>{item.price}</strong>
                  </span>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default MenuComponent;
