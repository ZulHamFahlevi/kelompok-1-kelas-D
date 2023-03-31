import { Layout } from "antd";
import { kampusMerdeka, people } from "../../../assets";
import { firstData } from "./constants";
import "./kampusMerdeka.css";
export default function IntroSection() {
  const { Content } = Layout;
  return (
    <Content className="firstSection">
      <div className="left-side">
        <img src={kampusMerdeka} alt="Kampus Merdeka" className="logo" />
        <h2>{firstData.title}</h2>
        <p>{firstData.description}</p>
      </div>
      <div className="right-side">
        <img src={people} alt="Gambar Orang" className="image" />
      </div>
    </Content>
  );
}
