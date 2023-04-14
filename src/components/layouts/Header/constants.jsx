export const menuList = [
  {
    title: "Hybrid Classes",
    link: "/hybrid-classes",
    subMenu: [
      { label: "Pra Kerja", link: "/hybrid-classes" },
      {
        label: "Fundamental Class",
        link: "/hybrid-classes",
      },
      {
        label: "Mastering Class",
        link: "/hybrid-classes",
      },
    ],
  },
  {
    title: "Recording Learning",
    link: "/recorded-learning",
    subMenu: [],
  },
  {
    title: "Kampus Merdeka",
    link: "/kampus-merdeka",
    subMenu: new Array(4).fill().map((_, idx) => ({
      label: `Program Kampus Merdeka Batch ${idx + 1}`,
      link: "/kampus-merdeka",
    })),
  },
  {
    title: "My Account",
    link: "/my-account",
    subMenu: [],
  },
];
