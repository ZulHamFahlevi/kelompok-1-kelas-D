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
} from "antd";
import { DROPDOWN_ITEMS, TAB_ITEMS } from "./constants";

const MyAccount = () => {
  const { Title } = Typography;
  const { Meta } = Card;
  // const { TabPane } = Tabs;

  const [current, setCurrent] = useState("1");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

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
                cover={
                  <img
                    alt="example"
                    src="https://alta.id/wp-content/uploads/elementor/thumbs/React-KM-pklhkyh4e4dv6bf5mm0u3ekdzi7m2loboygwvk5l56.png"
                  />
                }
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
                <h5 className="title-card">
                  How to be an Ideal Top Search React JS Front-End Engineer
                </h5>
                <div>
                  <p>30% Complete</p>
                  <Progress
                    percent={30}
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

                <Meta description="Started February 15, 2023" />
              </Card>
            </Row>
          </div>

          <div className="tabs-one">
            <Row className="myAccount-container">
              <Menu
                onClick={onClick}
                defaultSelectedKeys={["1"]}
                selectedKeys={[current]}
                mode="horizontal"
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
