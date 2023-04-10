import { Link } from "react-router-dom";

export const menuList = [
  {
    title: <Link to="/hybrid-classes">Hybrid Classes</Link>,
    link: "/hybrid-classes",
    subMenu: [
      { label: "Pra Kerja", link: "/hybrid-classes" },
      { label: "Fundamental Class", link: "/hybrid-classes" },
      { label: "Mastering Class", link: "/hybrid-classes" },
    ],
  },
  {
    title: <Link to="/recorded-learning">Recorded Learning</Link>,
    subMenu: [],
    link: "/recorded-learning",
  },
  {
    title: <Link to="/kampus-merdeka">Kampus Merdeka</Link>,
    link: "/kampus-merdeka",

    subMenu: new Array(4).fill(null).map((_, idx) => {
      return {
        label: `Program Kampus Merdeka Batch ${idx + 1}`,
        link: "/kampus-merdeka",
      };
    }),
  },
  {
    title: <Link to="/my-account">My Account</Link>,
    link: "/my-account",

    subMenu: [{ label: "Log Out", link: "/my-account" }],
  },
];
