import Benefits from "../../components/component/benefits/benefits";
import Hero from "../../components/component/hero/hero";
import LevelClass from "../../components/component/level-class/level-class";
import Partners from "../../components/component/partners/partners";
import PopularCourses from "../../components/component/popular-courses/popular-courses";
import Testimonies from "../../components/component/testimonies/testimonies";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Partners />
      <PopularCourses />
      <LevelClass />
      <Testimonies />

      {/* <div className="langkah_section">
        <h1 className="size_42 font_roboto text_black">
          Mulai langkahmu hari ini!
        </h1>
        <div className="langkah_button">
          <h2 className="text_white size_21 font_opensans">
            Ambil Kelasmu Sekarang
          </h2>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
