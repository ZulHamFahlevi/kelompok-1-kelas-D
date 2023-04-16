import React from "react";
import "./notificationsComponent.css";
import { CaretDownOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Space, Tabs, Dropdown } from "antd";
import { NOTIF_READ_DROPDOWN } from "../constants";

function NotificationsComponent() {
  const TAB_ITEMS = [
    {
      key: "1",
      label: `Unread`,
      children: (
        <>
          <Dropdown
            className="selection-filter"
            menu={{
              NOTIF_READ_DROPDOWN,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Filter
                <CaretDownOutlined />
              </Space>
            </a>
          </Dropdown>

          <div className="feedback-msg">
            <ExclamationCircleFilled size={20} className="exclamation-icon" />
            <span style={{ paddingLeft: 16, fontStyle: "italic" }}>
              You have no unread notifications.
            </span>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: `Read`,
      children: (
        <>
          <Dropdown
            className="selection-filter"
            menu={{
              NOTIF_READ_DROPDOWN,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Filter
                <CaretDownOutlined />
              </Space>
            </a>
          </Dropdown>

          <div className="feedback-msg">
            <ExclamationCircleFilled size={20} className="exclamation-icon" />
            <span style={{ paddingLeft: 16, fontStyle: "italic" }}>
              You have no notifications.
            </span>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <section id="notifications">
        <Tabs defaultActiveKey="1" items={TAB_ITEMS} />
      </section>
    </>
  );
}

export default NotificationsComponent;
