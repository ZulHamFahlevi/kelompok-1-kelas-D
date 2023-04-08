import { Link } from "react-router-dom";

export const menuList = [
  {
    title: <Link to="/hybrid-classes">Hybrid Classes</Link>,
    subMenu: [
      { label: "Pra Kerja" },
      { label: "Fundamental Class" },
      { label: "Mastering Class" },
    ],
  },
  {
    title: <Link to="/recorded-learning">Recorded Learning</Link>,
    subMenu: [],
  },
  {
    title: <Link to="/kampus-merdeka">Kampus Merdeka</Link>,
    subMenu: new Array(4).fill(null).map((_, idx) => {
      return {
        label: `Program Kampus Merdeka Batch ${idx + 1}`,
        link: "/kampus-merdeka",
      };
    }),
  },
  {
    title: <Link to="/my-account">My Account</Link>,
    subMenu: [{ label: "Log Out", link: "/my-account" }],
  },
];
