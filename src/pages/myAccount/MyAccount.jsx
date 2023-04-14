import React, { useState } from "react";
import "./myAccount.css";
import { DownOutlined } from "@ant-design/icons";
import {
  Typography,
  Row,
  Col,
  Space,
  Dropdown,
  Card,
  Progress,
  Button,
  Menu,
  Tabs,
} from "antd";
import { CARD_DATA, DROPDOWN_ITEMS, TAB_ITEMS } from "./constants";

const MyAccount = () => {
  const { Title } = Typography;
  const { Meta } = Card;

  return (
    <>
      <section id="myAccount">
        <Row className="myAccount-container">
          <div className="courses">
            <Row
              className="myAccount-container"
              align={"middle"}
              justify={"space-between"}
            >
              <Title
                level={2}
                style={{
                  margin: 0,
                  fontWeight: "bold",
                  color: "rgba(25, 52, 94, 1)",
                }}
              >
                Enrolled Courses
              </Title>
              <Dropdown
                className="ant-dropdown"
                menu={{
                  DROPDOWN_ITEMS,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Enrolled date (last one)
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <div className="line" />
            </Row>
            <Row>
              <Card
                style={{ width: 270, margin: "0 20px" }}
                cover={<img alt="example" src={CARD_DATA.img} />}
              >
                <a
                  href="#"
                  style={{
                    color: "#19345e",
                    display: "inline-block",
                    marginBottom: 9,
                  }}
                >
                  Kampus Merdeka
                </a>
                <h5 className="title-card">{CARD_DATA.class}</h5>
                <div>
                  <p>{`${CARD_DATA.percentComplete}%`} Complete</p>
                  <Progress
                    percent={CARD_DATA.percentComplete}
                    showInfo={false}
                    strokeColor="#f47522"
                  />
                </div>

                <Button
                  size="large"
                  style={{ width: "100%", marginBottom: 16 }}
                >
                  CONTINUE
                </Button>

                <Meta description={`Started ${CARD_DATA.startDate}`} />
              </Card>
            </Row>
          </div>

          <div className="tabs-one">
            <Row className="myAccount-container">
              {/* Tabs Component */}
              <Tabs
                id="tabs-one"
                defaultActiveKey="home"
                centered
                items={TAB_ITEMS}
              />
            </Row>
          </div>
        </Row>
      </section>
    </>
  );
};

export default MyAccount;
