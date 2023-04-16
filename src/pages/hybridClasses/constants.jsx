import MemberIcon from "../../assets/praKerja/member.png";
import FigmaImg from "../../assets/fundamental/figma.png";
import GolangImg from "../../assets/fundamental/golang.png";
import SpringImg from "../../assets/fundamental/spring.png";
import QAImg from "../../assets/fundamental/qa.png";
import FlutterImg from "../../assets/fundamental/flutter.png";
import ReactImg from "../../assets/fundamental/react.png";
import GolangImg2 from "../../assets/praKerja/golang.png";
import VueImg2 from "../../assets/praKerja/vue.png";
import SpringImg2 from "../../assets/praKerja/spring.png";
import QAImg2 from "../../assets/praKerja/qa.png";
import FlutterImg2 from "../../assets/praKerja/flutter.png";
import ReactImg2 from "../../assets/praKerja/react.png";
import FigmaImg2 from "../../assets/praKerja/figma.png";
import FigmaImg3 from "../../assets/mastering/figma.png";
import FlutterImg3 from "../../assets/mastering/flutter.png";
import GolangImg3 from "../../assets/mastering/golang.png";
import QAImg3 from "../../assets/mastering/qa.png";
import ReactImg3 from "../../assets/mastering/react.png";
import SpringImg3 from "../../assets/mastering/spring.png";
import TsImg from "../../assets/mastering/ts.png";
import VueImg3 from "../../assets/mastering/vue.png";
import { currencyFormatter } from "../../helpers/currencyFormatter";

const DATA_FUNDAMENTAL = [
  {
    image: SpringImg,
    kelas: "Fundamental Class",
    title: "Fundamental Java Spring Boot",
    member: "",
    price: currencyFormatter("Rp", "199000"),
  },
  {
    image: QAImg,
    kelas: "Fundamental Class",
    title: "Fundamental Quality Engineer",
    member: "",
    price: currencyFormatter("Rp", "199000"),
  },
  {
    image: FlutterImg,
    kelas: "Fundamental Class",
    title: "Fundamental Mobile Development",
    member: "",
    price: currencyFormatter("Rp", "199000"),
  },
  {
    image: FigmaImg,
    kelas: "Fundamental Class",
    title: "Fundamental UI/UX",
    member: "",
    price: currencyFormatter("Rp", "199000"),
  },
  {
    image: GolangImg,
    kelas: "Fundamental Class",
    title: "Fundamental Back-End Engineer with Golang",
    member: "",
    price: currencyFormatter("Rp", "199000"),
  },
  {
    image: ReactImg,
    kelas: "Fundamental Class",
    title: "Fundamental Front-End Engineer with React",
    member: "",
    price: currencyFormatter("Rp", "199000"),
  },
];

const DATA_PRAKERJA = [
  {
    image: GolangImg2,
    kelas: "Pra Kerja",
    title: "Belajar Golang untuk menjadi Backend Engineer (Fordigi)",
    member: MemberIcon,
    price: "Members Only",
  },
  {
    image: VueImg2,
    kelas: "Pra Kerja",
    title: "Berkarir sebagai Front-end Engineer dengan Vue",
    member: MemberIcon,
    price: "Members Only",
  },
  {
    image: SpringImg2,
    kelas: "Pra Kerja",
    title: "Berkarir Sebagai Back-end Engineer dengan Java Spring Boot",
    member: MemberIcon,
    price: "Members Only",
  },
  {
    image: QAImg2,
    kelas: "Pra Kerja",
    title: "Berkarir Sebagai Quality Assurance & Bangun Aplikasi Tanpa Bug",
    member: MemberIcon,
    price: "Members Only",
  },
  {
    image: GolangImg2,
    kelas: "Pra Kerja",
    title: "Berkarir Sebagai Backend Engineer dengan Golang",
    member: MemberIcon,
    price: "Members Only",
  },
  {
    image: FlutterImg2,
    kelas: "Pra Kerja",
    title: "Berkarir Sebagai Mobile Developer (iOS and Android) dengan Flutter",
    member: MemberIcon,
    price: "Members Only",
  },
  {
    image: ReactImg2,
    kelas: "Pra Kerja",
    title: "Berkarir Sebagai Front-end Web Engineer dengan React",
    member: MemberIcon,
    price: "Members Only",
  },
  {
    image: FigmaImg2,
    kelas: "Pra Kerja",
    title: "Berkarir sebagai UI/UX Designer",
    member: MemberIcon,
    price: "Members Only",
  },
  {
    image: GolangImg2,
    kelas: "Pra Kerja",
    title: "Belajar Golang untuk menjadi Backend Engineer",
    member: MemberIcon,
    price: "Members Only",
  },
];

const DATA_MASTERING = [
  {
    image: GolangImg3,
    kelas: "Mastering Class",
    title: "Mastering Back-End Engineering with Golang",
    member: currencyFormatter("Rp", "800000"),
    price: currencyFormatter("Rp", "399000"),
  },
  {
    image: ReactImg3,
    kelas: "Mastering Class",
    title: "Mastering Front-End Development with React JS",
    member: currencyFormatter("Rp", "800000"),
    price: currencyFormatter("Rp", "399000"),
  },
  {
    image: SpringImg3,
    kelas: "Mastering Class",
    title: "Mastering Back-End Development with Java Spring Boot",
    member: currencyFormatter("Rp", "800000"),
    price: currencyFormatter("Rp", "399000"),
  },
  {
    image: FigmaImg3,
    kelas: "Mastering Class",
    title: "Mastering UI/UX Designer",
    member: currencyFormatter("Rp", "800000"),
    price: currencyFormatter("Rp", "399000"),
  },
  {
    image: QAImg3,
    kelas: "Mastering Class",
    title: "Mastering Quality Engineer",
    member: currencyFormatter("Rp", "800000"),
    price: currencyFormatter("Rp", "399000"),
  },
  {
    image: FlutterImg3,
    kelas: "Mastering Class",
    title: "Mastering Mobile Development with Flutter",
    member: currencyFormatter("Rp", "800000"),
    price: currencyFormatter("Rp", "399000"),
  },
  {
    image: TsImg,
    kelas: "Mastering Class",
    title: "Typescript with React JS",
    member: currencyFormatter("Rp", "800000"),
    price: currencyFormatter("Rp", "399000"),
  },
  {
    image: VueImg3,
    kelas: "Mastering Class",
    title: "Mastering Front-End Development with Vue JS",
    member: currencyFormatter("Rp", "800000"),
    price: currencyFormatter("Rp", "399000"),
  },
];

export { DATA_FUNDAMENTAL, DATA_PRAKERJA, DATA_MASTERING };
