import {
  seleminum,
  figma,
  golang,
  react,
  flutter,
  userTie,
  filePen,
  fileVideo,
  businessTime,
} from "../../../assets";
const firstData = {
  title: "Program Studi Independen Bersertifikat oleh Alterra Academy",
  description:
    "Alterra Academy dipercaya sebagai salah satu mitra untuk program Studi Independen Bersertifikat (SIB) Kampus Merdeka oleh Kemendikbud, di mana mahasiswa akan mendapatkan pembelajaran dan practical knowledge dari mentor-mentor professional yang telah berkecimpung di industri IT. Program ini dikembangkan sedemikian rupa agar semua mahasiswa yang mengikuti dapat mendapatkan ilmu-ilmu yang relevan dengan dunia kerja, sehingga bisa segera berkarir setelah menyelesaikan studinya.",
};

const secondData = {
  title: "Paket Program Studi Kampus Merdeka Batch 3",
  items: [
    {
      icon: figma,
      title: "Becoming Professional UI/UX Designer",
      description: "Rp36.000.000",
    },
    {
      icon: seleminum,
      title: "Be The Best Top Search Quality Engineer",
      description: "Rp36.000.000",
    },
    {
      icon: react,
      title: "How to be an Ideal Top Search React JS Front-End Engineer",
      description: "Rp36.000.000",
    },
    {
      icon: golang,
      title: "Become a Master of Golang Programme​r",
      description: "Rp36.000.000",
    },
    {
      icon: flutter,
      title: "Become a Flutter Master, From Zero to Hero",
      description: "Rp36.000.000",
    },
  ],
};

const goalData = [
  {
    title: "TUJUAN DARI PROGRAM",
    items: [
      "Memberikan pendidikan tech berbasis industri bagi semua latar belakang bidang pendidikan​",
      "Mendukung lahirnya para entrepreneur muda di bidang teknologi",
      "Mendukung persiapan karir dan mendukung upaya peningkatan jenjang karir peserta bibit unggul di dunia IT",
    ],
  },
  {
    title: "TARGET PESERTA",
    items: [
      "Mahasiswa aktif dari perguruan tinggi dengan total 100 peserta per program",
    ],
  },
];

const methodData = [
  {
    icon: userTie,
    title: "Mentor Berpengalaman",
    description:
      "Setiap mentor akan bertanggung jawab pada keberhasilan 20 siswa.",
  },
  {
    icon: fileVideo,
    title: "Metode Belajar",
    description: "Live Session, Video Recording & Reference",
  },
  {
    icon: businessTime,
    title: "Waktu Belajar",
    description: "Senin-Jumat (Live Class dengan Mentor)",
  },
  {
    icon: filePen,
    title: "Sertifikat & Raport",
    description:
      "Sertifikat Kelulusan Program dan Raport beserta feedback untuk peserta",
  },
];

const classData = [
  {
    title: "Technical Skill Class\n(Software Development)",
    description:
      "Peserta program mengikuti kelas intensif yang akan berfokus pada penguasaan keterampilan seputar fundamental software engineering dan cara mengaplikasikannya pada sisi Backend dan Frontend.",
    feature: ["live", "record"],
  },
  {
    title: "Professional Skill Class\n(Non-Technical)",
    description:
      "Kelas ini bertujuan untuk memberi pandangan dalam berkarir di dunia teknologi serta, cara kita untuk memulai dan melewati prosesnya serta skill non-technical yang dibutuhkan oleh para profesional.",
    feature: ["live"],
  },
  {
    title: "Capstone Project",
    description:
      "Produk teknologi yang akan dibuat didasari dari produk apa yang sedang menjadi kebutuhan di industri atau produk teknologi yang sedang di develop oleh Alterra Group.",
    feature: ["live"],
  },
];
export { firstData, secondData, goalData, methodData, classData };
