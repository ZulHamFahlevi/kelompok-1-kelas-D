export const menuList = [
  {
    title: "Hybrid Classes",
    link: "/courses",
    subMenu: [
      { label: "Pra Kerja", link: "/courses" },
      { label: "Fundamental Class", link: "/courses" },
      { label: "Mastering Class", link: "/courses" },
    ],
  },
  {
    title: "Record Learning",
    link: "/recorded-learning",
    subMenu: [],
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
