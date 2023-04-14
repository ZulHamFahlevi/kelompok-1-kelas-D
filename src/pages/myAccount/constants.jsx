import Notifications from "./Notifications/Notifications";

export const CARD_DATA = {
  img: "https://alta.id/wp-content/uploads/elementor/thumbs/React-KM-pklhkyh4e4dv6bf5mm0u3ekdzi7m2loboygwvk5l56.png",
  class: "How to be an Ideal Top Search React JS Front-End Engineer",
  startDate: "February 15, 2023",
  percentComplete: 30,
};

export const DROPDOWN_ITEMS = [
  {
    label: <a href="#">1st menu item</a>,
    key: "1",
  },
  {
    label: <a href="#">2nd menu item</a>,
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export const TAB_ITEMS = [
  {
    label: "HOME",
    key: "home",
    id: "tab-item-all",
    children: "",
  },
  {
    label: `NOTIFICATIONS 0`,
    key: "notifications",
    id: "tab-item-all",
    children: <Notifications />,
  },
  {
    label: "SETTINGS",
    key: "settings",
    id: "tab-item-all",
    children: "",
  },
];

export const TAB_ITEM_NOTIFICATIONS = [
  {
    label: "Unread",
    key: "unread",
    children: "Unread",
  },
  {
    label: "Read",
    key: "read",
    children: "read",
  },
];

// NOTIFICATIONS DROPDOWN
export const NOTIF_READ_DROPDOWN = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
