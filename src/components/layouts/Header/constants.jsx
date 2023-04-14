import { Link } from "react-router-dom";

export const menuList = [
  {
    title: "Hybrid Classes",
    link: "/hybrid-classes",
    subMenu: [
      { label: "Pra Kerja", link: "/hybrid-classes" },
      { label: "Fundamental Class", link: "/hybrid-classes" },
      { label: "Mastering Class", link: "/hybrid-classes" },
    ],
  },
  {
    title: "Recorded Learning",
    subMenu: [],
    link: "/recorded-learning",
  },
  {
    title: "Kampus Merdeka",
    link: "/kampus-merdeka",

    subMenu: new Array(4).fill(null).map((_, idx) => {
      return {
        label: `Program Kampus Merdeka Batch ${idx + 1}`,
        link: "/kampus-merdeka",
      };
    }),
  },
  {
    title: "My Account",
    link: "/my-account",

    subMenu: [{ label: "Log Out", link: "/my-account" }],
  },
];
