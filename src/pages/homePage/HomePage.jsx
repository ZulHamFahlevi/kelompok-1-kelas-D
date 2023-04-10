import book from "../../assets/icons/book.png";
import bookstack from "../../assets/icons/book_stack.png";
import building from "../../assets/icons/building.png";
import flutter from "../../assets/icons/flutter.png";
import graduate from "../../assets/icons/graduate.png";
import project from "../../assets/icons/project.png";
import react from "../../assets/icons/react.png";
import arrow from "../../assets/icons/right-arrow.png";
import spring from "../../assets/icons/spring.png";
import user from "../../assets/icons/user.png";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <div className="hero">
        <div className="hero_title_pad">
          <h1 className="text_white font_roboto ">
            Sudah Siap Kerja <br /> Jadi <span className="text_black">Programmer</span> ?
          </h1>
          <p className="text_white font_mulish ">
            Belajar kapan pun, di mana pun, dari gadget apa pun, dengan Alterra
            Academy!
          </p>
          <div className="pad_button">
            <div className="round_button">
              <a href="#">
                <span className="font_opensans text_white">Mulai Sekarang</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero_title_pad"></div>
      </div>
      {/* end of hero section */}
      {/* benefit section */}
      <div className="benefit_section">
        <h1 className="benefit_section_title text_center text_black font_roboto">
          Kenapa Belajar di Alterra Academy?
        </h1>
        <div className="benefit_card_pad">
          <div className="custom_card text_center">
            <img src={bookstack} alt="book_icon" width={50} />
            <h3 className="text_center font_mulish size_21 text_black font_bold">
              Kapan Saja, Di Mana Saja
            </h3>
            <p className="text_more_black font_mulish size_16 text_left">
              Di kafe atau di rumah, pagi atau malam, mobile atau desktop,
              bebas! Kamu bisa akses Alterra Academy Online Program di mana pun
              dan kapan pun.
            </p>
          </div>
          <div className="custom_card text_center">
            <img src={building} alt="book_icon" width={50} />
            <h3 className="text_center font_mulish size_21 text_black font_bold">
              Materi Standar Industri
            </h3>
            <p className="text_more_black font_mulish size_16 text_left">
              Kami merancang materi dengan tujuan utama membantu kamu untuk
              mendapatkan pekerjaan.
            </p>
            <br />
          </div>
          <br />
        </div>
        <div className="benefit_card_pad">
          <div className="custom_card text_center">
            <img src={user} alt="book_icon" width={50} />
            <h3 className="text_center font_mulish size_21 text_black font_bold">
              Mentor Berpengalaman
            </h3>
            <p className="text_more_black font_mulish size_16 text_left">
              Kami memastikan mentor yang mengajarkanmu adalah mentor yang dapat
              membantu perkembanganmu sebagai programmer.
            </p>
          </div>
          <div className="custom_card text_center">
            <img src={project} alt="book_icon" width={50} />
            <h3 className="text_center font_mulish size_21 text_black font_bold">
              Praktek Dengan Project
            </h3>
            <p className="text_more_black font_mulish size_16 text_left">
              Bukan sekadar teori, kami mau kamu mempraktekkan apa yang kamu
              pelajari dengan mengerjakan project nyata di akhir pelatihan.
            </p>
          </div>
          <br />
        </div>
      </div>
      {/* end of benefit section */}
      {/* partner section */}
      <div className="partner_section">
        <h1 className="partner_section_title text_center text_black font_roboto">
          Tersedia Juga di Partner Kami
        </h1>
        <div className="partner_logo_pad">
          <img
            className="partner_logo"
            src="https://alta.id/wp-content/uploads/2023/01/Logo-Tokopedia.png"
            width={200}
          />
          <img
            className="partner_logo"
            src="https://alta.id/wp-content/uploads/2023/01/Shopee.png"
            width={200}
          />
          <img
            className="partner_logo"
            src="https://alta.id/wp-content/uploads/elementor/thumbs/gokampus-pwnyysyu17nf6bhzh6k8s1z05jajvieekohycxbhts.webp"
            width={200}
          />
          <img
            className="partner_logo"
            src="https://alta.id/wp-content/uploads/2022/10/lumina.svg"
            width={200}
          />
        </div>
        <div className="partner_logo_pad">
          <img
            className="partner_logo"
            src="https://alta.id/wp-content/uploads/2022/10/remortt.png"
            width={200}
          />
          <img
            className="partner_logo"
            src="https://alta.id/wp-content/uploads/2022/10/rumahsiapkerja.svg"
            width={200}
          />
          <img
            className="partner_logo"
            src="https://alta.id/wp-content/uploads/elementor/thumbs/cakapp-pvpf5akv26m3rlbyouujmi4qvlxzrcsawkuvj1dpmo.png"
            width={200}
          />
        </div>
      </div>
      {/* end of benefit sevction */}
      {/* popular section */}
      <div className="popular_section">
        <h1 className="popular_section_title text_center text_black font_roboto">
          Kursus Terpopuler
        </h1>
        <div className="popular_card_pad">
          <div className="popular_card" style={{ borderColor: "#f37524" }}>
            <img
              src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
              width={150}
            />
            <h3 className="font_opensans text_black size_24 font_bold">
              Mastering Back-End Development with Golang
            </h3>
            <p className="font_opensans size_16 text_more_black">
              Perdalam skill Golang-mu dengan belajar Middleware, Unit Testing,
              GraphQL, dan lainnya di kelas ini.
            </p>
            <p className="price_strip font_mulish size_21 text_more_black">
              <del>Rp. 800.000</del>
            </p>
            <h3 className="font_opensans text_black size_27 font_bold">
              Rp. 399.000
            </h3>
            <div className="popular_padder">
              <div className="orange_button ">
                <a href="#">
                  <span className="font_opensans text_white size_15">
                    Lihat Kelas
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="popular_card">
            <br />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png"
              width={80}
            />
            <br />
            <br />
            <h3 className="font_opensans text_black size_24 font_bold">
              Fundamental Quality Engineer
            </h3>
            <p className="font_opensans size_16 text_more_black">
              Kehadiran Quality Engineer penting untuk memastikan software aman
              dan minim gangguan untuk pengguna. Mari mulai!
            </p>
            <p className="price_strip font_mulish size_21 text_more_black">
              <del>Rp. 400.000</del>
            </p>
            <h3 className="font_opensans text_black size_27 font_bold">
              Rp. 199.000
            </h3>
            <div className="popular_padder">
              <div className="orange_button ">
                <a href="#">
                  <span className="font_opensans text_white size_15">
                    Lihat Kelas
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="popular_card">
            <img
              src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
              width={150}
            />
            <h3 className="font_opensans text_black size_24 font_bold">
              Fundamental Backend Engineer
            </h3>
            <p className="font_opensans size_16 text_more_black">
              Saat ini Golang dipakai di Gojek, Xendit, Shopee, Tokopedia, dan
              lainnya. Bahasa ini juga cukup mudah, yuk mulai sekarang!
            </p>
            <p className="price_strip font_mulish size_21 text_more_black">
              <del>Rp. 400.000</del>
            </p>
            <h3 className="font_opensans text_black size_27 font_bold">
              Rp. 199.000
            </h3>
            <div className="popular_padder">
              <div className="orange_button ">
                <a href="#">
                  <span className="font_opensans text_white size_15">
                    Lihat Kelas
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* l */}
        <div className="popular_card_pad">
          <div className="popular_card">
            <img src={spring} width={100} style={{ margin: 30 }} />
            <h3 className="font_opensans text_black size_24 font_bold">
              Mastering Back-End Development with Java
            </h3>
            <p className="font_opensans size_16 text_more_black">
              Pertajam skill Java-mu dengan belajar Spring Boot, Integration
              Testing, Microservices, dan lainnya di kelas ini.
            </p>
            <p className="price_strip font_mulish size_21 text_more_black">
              <del>Rp.1.200.000</del>
            </p>
            <h3 className="font_opensans text_black size_27 font_bold">
              Rp. 599.000
            </h3>
            <div className="popular_padder">
              <div className="orange_button ">
                <a href="#">
                  <span className="font_opensans text_white size_15">
                    Lihat Kelas
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="popular_card">
            <br />
            <img src={flutter} width={80} style={{ margin: 10 }} />
            <br />
            <br />
            <h3 className="font_opensans text_black size_24 font_bold">
              Fundamental Mobile Development
            </h3>
            <p className="font_opensans size_16 text_more_black">
              Mobile Development memiliki potensi besar karena ada sekitar 260
              juta penduduk Indonesia menggunakan Smartphone, maka aplikasi akan
              banyak berkembang di mobile!
            </p>
            <p className="price_strip font_mulish size_21 text_more_black">
              <del>Rp. 400.000</del>
            </p>
            <h3 className="font_opensans text_black size_27 font_bold">
              Rp. 199.000
            </h3>
            <div className="popular_padder">
              <div className="orange_button ">
                <a href="#">
                  <span className="font_opensans text_white size_15">
                    Lihat Kelas
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="popular_card">
            <img src={react} width={80} style={{ margin: 30 }} />
            <h3 className="font_opensans text_black size_24 font_bold">
              Mastering Front-End Development with React JS
            </h3>
            <p className="font_opensans size_16 text_more_black">
              React.JS saat ini banyak dipakai oleh Grab, Bukalapak, BliBli,
              Shopee, dan lainnya. Yuk mulai belajar sekarang!
            </p>
            <p className="price_strip font_mulish size_21 text_more_black">
              <del>Rp. 400.000</del>
            </p>
            <h3 className="font_opensans text_black size_27 font_bold">
              Rp. 199.000
            </h3>
            <div className="popular_padder">
              <div className="orange_button ">
                <a href="#">
                  <span className="font_opensans text_white size_15">
                    Lihat Kelas
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end if popular section  */}
      {/* level section  */}
      <div className="level_section">
        <h1
          className="popular_section_title text_center text_black font_roboto"
          style={{ marginTop: 48 }}
        >
          Tingkatan Kelas
        </h1>
        <div className="level_card_pad">
          <div className="level_card ">
            <div className="level_card_vertical">
              <div className="level_card_vertical_horizontal">
                <img
                  src={book}
                  alt="book_icon"
                  width={90}
                  className=" level_card_vertical_horizontal_item"
                />
                <div className="level_card_vertical_horizontal_title level_card_vertical_horizontal_item">
                  <h2 className="font_mulish size_21 text_black">
                    Fundamental Class
                  </h2>
                  <p className="font_mulish size_18 text_black">
                    Lvl 100 Class
                  </p>
                </div>
                <div className="arrow_level level_card_vertical_horizontal_item">
                  <img src={arrow} alt="arrow_icon" width={40} />
                </div>
              </div>
              <div className="level_card_box">
                <p className="level_card_box_text font_opensans text_black size_16">
                  Fundamental Class merupakan kelas yang cocok bagi kamu yang
                  ingin mulai belajar dari tingkatan dasar.{" "}
                </p>
              </div>
              <div className="black_button_pad">
                <div className="black_button ">
                  <a href="#">
                    <span className="font_opensans text_white size_15">
                      Lihat Kelas
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="level_card ">
            <div className="level_card_vertical">
              <div className="level_card_vertical_horizontal">
                <img
                  src={user}
                  alt="book_icon"
                  width={100}
                  className=" level_card_vertical_horizontal_item"
                />
                <div className="level_card_vertical_horizontal_title level_card_vertical_horizontal_item">
                  <h2 className="font_mulish size_21 text_black">
                    Mastering Class
                  </h2>
                  <p className="font_mulish size_18 text_black">
                    Lvl 200 Class
                  </p>
                </div>
                <div className="arrow_level level_card_vertical_horizontal_item">
                  <img src={arrow} alt="arrow_icon" width={40} />
                </div>
              </div>
              <div className="level_card_box">
                <p className="level_card_box_text font_opensans text_black size_16">
                  Mastering Class merupakan kelas tingkat lanjutan dari
                  Fundamental Class, materinya diperuntukkan kepada programmer
                  dengan level junior.
                </p>
              </div>
              <div className="black_button_pad">
                <div className="black_button ">
                  <a href="#">
                    <span className="font_opensans text_white size_15">
                      Lihat Kelas
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="level_card ">
            <div className="level_card_vertical">
              <div className="level_card_vertical_horizontal">
                <img
                  src={graduate}
                  alt="book_icon"
                  width={80}
                  className=" level_card_vertical_horizontal_item"
                />
                <div className="level_card_vertical_horizontal_title level_card_vertical_horizontal_item">
                  <h2 className="font_mulish size_21 text_black">
                    Advance Class
                  </h2>
                  <p className="font_mulish size_18 text_black">
                    Lvl 300 Class
                  </p>
                </div>
                <div className="arrow_level level_card_vertical_horizontal_item">
                  {/* <img src={arrow} alt="arrow_icon" width={40} /> */}
                </div>
              </div>
              <br />
              <div className="level_card_box">
                <p className="level_card_box_text font_opensans text_black size_16">
                  Advance Class adalah tingkatan lanjutan dari Mastering Class,
                  materinya diperuntukkan kepada programmer dengan level
                  middle-senior.
                </p>
              </div>
              <div className="black_button_pad">
                <div
                  className="black_button "
                  style={{ backgroundColor: "#818a91" }}
                >
                  <a href="#">
                    <span className="font_opensans text_white size_15">
                      Segera Hadir
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of level sectiion */}
      {/* testi_section */}
      <div className="testi_section">
        <h1 className="testi_section_title text_center text_black font_roboto">
          Testimoni Pengguna
        </h1>
        <div className="testi_card_pad">
          <div className="test_card">
            <div className="test_card_img">
              <img src="https://alta.id/wp-content/uploads/2021/12/4x6new-472x708.jpg.webp" />
            </div>
            <p className="text_center size_18 font_mulish text_black text_card_title">
              "Awalnya sih Penasaran tentang pemrograman Golang yang ada cuma di
              alta saja, setelah berjalannya waktu, alhamdulillah dapat
              bimbingan dari mentor, sangat praktis dan mudah dipahami."
            </p>
            <h2
              className="text_center size_21 font_roboto text_bold text_black"
              style={{ marginTop: 24 }}
            >
              Rahmat Amri Fathoni
            </h2>
            <p className="text_center size_15 font_mulish text_black">
              <i>Administrasi Tata Usaha</i>
            </p>
          </div>
          {/* limit */}
          <div className="test_card">
            <div className="test_card_img">
              <img src="https://alta.id/wp-content/uploads/2021/12/circle-cropped-767x767.png.webp" />
            </div>
            <p className="text_center size_18 font_mulish text_black text_card_title">
              "Belajar di alterra academy benar benar dimentori dari dasar dan
              juga membuat kita aktif belajar mandiri dengan task task tugas
              hariannya. meskipun aktif belajar mandiri, kita tetap dipantau
              oleh para mentor jika menemukan hal hal yang kita tidak mengerti."
            </p>
            <h2
              className="text_center size_21 font_roboto text_bold text_black"
              style={{ marginTop: 24 }}
            >
              Muhammad RIkza Afnan
            </h2>
            <p className="text_center size_15 font_mulish text_black">
              <i>Bekerja di Bidang IT</i>
            </p>
          </div>
          {/* limit */}
          <div className="test_card">
            <div className="test_card_img">
              <img src="https://alta.id/wp-content/uploads/2021/12/IRMAN-PAMBUDI-552x577.jpg.webp" />
            </div>
            <p className="text_center size_18 font_mulish text_black text_card_title">
              "Alterra Academy memiliki materi yang terstruktur dan mudah
              dipahami. Mentor dan staf sangat membantu saat proses belajar,
              jangan khawatir ketika kita mengalami kesulitan memahami materi."
            </p>
            <h2
              className="text_center size_21 font_roboto text_bold text_black"
              style={{ marginTop: 24 }}
            >
              Irman Pambudi
            </h2>
            <p className="text_center size_15 font_mulish text_black">
              <i>Pegawai Swasta</i>
            </p>
          </div>
        </div>
      </div>
      {/* end of testi section */}
      {/* langkah_section */}
      <div className="langkah_section">
        <h1 className="size_42 font_roboto text_black">
          Mulai langkahmu hari ini!
        </h1>
        <div className="langkah_button">
          <h2 className="text_white size_21 font_opensans">
            Ambil Kelasmu Sekarang
          </h2>
        </div>
      </div>
      {/* end of lagkah section */}
    </>
  );
};

export default HomePage;
