import { Layout } from "antd";
import { footerLogo } from "../../../assets";
import { footerData, icons } from "./constants";
import "./footer.css";
export default function FooterComponent() {
  const { Footer } = Layout;
  return (
    <Footer className="container">
      <div className="leftContainer">
        <img src={footerLogo} alt="Alterra Academy" className="footerLogo" />
        <div style={{ paddingBottom: 16 }}>
          <a className="link" style={{ marginRight: 15 }}>
            Kebijakan Privasi
          </a>
          <a className="link">Izin Usaha</a>
        </div>
        <p className="credit">&#169; 2002 Alterra. All rights reserved</p>
      </div>

      <div className="midContainer">
        <ul>
          {footerData.map((item, idx) => (
            <li key={idx}>
              <a href="#" key={idx} className="link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="rightContainer">
        <h4>Hubungi Kami</h4>
        <p className="address">
          {
            "Jalan Raya Tidar, Nomor 23, Karangbesuki,\nKota Malang, Jawa Timur. 65146."
          }
        </p>
        <ul className="icons">
          {icons.map((icon, idx) => (
            <li key={idx}>
              <div className="icon">
                <i className={icon} style={{ color: "white", fontSize: 22 }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Footer>
  );
}
