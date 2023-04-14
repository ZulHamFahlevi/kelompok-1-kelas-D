import Book from "../../../assets/icons/book.png";
import User from "../../../assets/icons/user.png";
import Graduate from "../../../assets/icons/graduate.png";

export const LEVEL_CLASS = [
  {
    id: 1,
    image_url: Book,
    title: "Fundamental Class",
    level_class: "Lvl 100 Class",
    description:
      "<p>Fundamental Class merupakan kelas yang cocok bagi kamu yang ingin mulai belajar dari tingkatan dasar.</p>",
    button_url: "#",
    button_text: "Lihat Kelas",
    button_disabled: false,
    isArrowRight: true,
  },
  {
    id: 2,
    image_url: User,
    title: "Mastering Class",
    level_class: "Lvl 200 Class",
    description:
      "<p>Mastering Class merupakan kelas tingkat lanjutan dari Fundamental Class, materinya diperuntukkan kepada <i>programmer</i> dengan level <i>junior</i>.</p>",
    button_url: "#",
    button_text: "Lihat Kelas",
    button_disabled: false,
    isArrowRight: true,
  },
  {
    id: 3,
    image_url: Graduate,
    title: "Advance Class",
    level_class: "Lvl 300 Class",
    description:
      "<p>Advance Class adalah tingkatan lanjutan dari Mastering Class, materinya diperuntukkan kepada <i>programmer</i> dengan level <i>middle-senior</i>.</p>",
    button_url: "#",
    button_text: "Segera Hadir",
    button_disabled: true,
    isArrowRight: false,
  },
];
