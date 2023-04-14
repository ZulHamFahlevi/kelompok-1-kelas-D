import { Link } from "react-router-dom";

import { Col, Layout, Row, Typography } from "antd";

import { footerLogo } from "../../../assets";
import { footerData, icons } from "./constants";

import Container from "../../component/container/container";

import "./footer.css";

const { Footer } = Layout;

export default function FooterComponent() {
  return (
    <Footer className="footer_section">
      <Container className="footer_section--container">
        <Row>
          <Col xs={24} md={8}>
            <img
              src={footerLogo}
              alt="Alterra Academy"
              className="footer_logo"
            />
            <div style={{ paddingTop: 32 }} />
            <Row align="middle">
              <Link className="footer_link font_opensans" to="#">
                Kebijakan Privasi
              </Link>
              <Link className="footer_link font_opensans" to="#">
                Izin Usaha
              </Link>
            </Row>
            <div style={{ paddingTop: 32 }} />
            <Typography.Text className="footer_credit">
              &#169; 2002 Alterra. All rights reserved
            </Typography.Text>
          </Col>
          <Col xs={24} md={8}>
            <ul className="footer_ulist">
              {footerData.map((item, idx) => (
                <li key={idx} className="footer_list">
                  <Link to="#" className="footer_link font_opensans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={24} md={8}>
            <Typography.Title level={4} className="font_mulish footer_contact">
              Hubungi Kami
            </Typography.Title>
            <Typography.Text className="font_mulish footer_address">
              Jalan Raya Tidar, Nomor 23, Karangbesuki, <br /> Kota Malang, Jawa
              Timur. 65146.
            </Typography.Text>

            <Row align="middle" style={{ paddingTop: 20, gap: 20 }}>
              {icons.map((icon) => (
                <Link className="footer_social_media">
                  <i
                    className={icon}
                    style={{ color: "white", fontSize: 22 }}
                  />
                </Link>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
}
