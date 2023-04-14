import React from "react";
import "./notifications.css";
import { CaretDownOutlined } from "@ant-design/icons";
import { Space, Tabs, Dropdown } from "antd";
import { NOTIF_READ_DROPDOWN } from "../constants";

function Notifications() {
  const dropdownReadItem = NOTIF_READ_DROPDOWN;

  const handleSelectionFilter = (e) => {
    e.preventDefault();
  };

  const TAB_ITEMS = [
    {
      key: "1",
      label: `Read`,
      children: (
        <Dropdown
          className="selection-filter"
          menu={{
            NOTIF_READ_DROPDOWN,
          }}
          trigger={["click"]}
        >
          <a onClick={handleSelectionFilter}>
            <Space>
              Filter
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      ),
    },
    {
      key: "2",
      label: `Unread`,
      children: `Content of Tab Pane 2`,
    },
  ];

  return (
    <>
      <section id="notifications">
        <Tabs
          defaultActiveKey="read"
          items={TAB_ITEMS}
          className="notif-tabs"
        />

        {/* <Tabs defaultActiveKey="read" className="notif-tabs">
          <Tabs.TabPane tab="Unread" key="unread" className="notif-tab-item">
            
          </Tabs.TabPane>
          <Tabs.TabPane tab="Read" key="read" className="notif-tab-item">
            Read
          </Tabs.TabPane>
        </Tabs> */}
      </section>
    </>
  );
}

export default Notifications;
