import React from "react";
import "./notifications.css";

import { Tabs } from "antd";
import { TAB_ITEM_NOTIFICATIONS } from "../constants";

function Notifications() {
  const { TabPane } = Tabs;
  return (
    <>
      <Tabs defaultActiveKey="read" className="notif-tabs">
        <TabPane tab="Unread" key="unread" className="notif-tab-item">
          Unread
        </TabPane>
        <TabPane tab="Read" key="read" className="notif-tab-item">
          Read
        </TabPane>
      </Tabs>
    </>
  );
}

export default Notifications;
