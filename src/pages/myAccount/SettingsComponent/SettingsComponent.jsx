import React from "react";
import "./settingsComponent.css";
import { Typography, Space, Tabs, Form, Input, Button } from "antd";

function SettingsComponent() {
  const { Title } = Typography;

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Tab Settings Item
  const TAB_ITEMS = [
    {
      key: "1",
      label: `General`,
      children: (
        <>
          <Title level={2} className="title font_catamaran">
            Email & Password
          </Title>
          <Form
            id="yourProfile"
            name="changeEmailPassword"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Current Password (required to update email or change current password)"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </>
      ),
    },
    {
      key: "2",
      label: `Email`,
      children: "",
    },
    {
      key: "3",
      label: `Profile Visibility`,
      children: "",
    },
    {
      key: "4",
      label: `Export Data`,
      children: "",
    },
    {
      key: "5",
      label: `Delete Account`,
      children: "",
    },
  ];

  return (
    <>
      <section id="settings">
        <Tabs defaultActiveKey="1" items={TAB_ITEMS} />
      </section>
    </>
  );
}

export default SettingsComponent;
