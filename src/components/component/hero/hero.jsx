import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import Container from "../container/container";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Container style={{ padding: "110px 12px" }}>
        <div className="hero__container">
          <Typography.Title level={1} style={{ color: "#ffffff" }}>
            Sudah Siap Kerja&nbsp;
            <span style={{ display: "block" }}>
              Jadi&nbsp;<span style={{ fontStyle: "italic" }}>Programmer</span>?
            </span>
          </Typography.Title>

          <Typography.Paragraph className="desc text_white font_mulish">
            Belajar kapan pun, di mana pun, dari gadget apa pun, dengan Alterra
            Academy!
          </Typography.Paragraph>

          <Link to="#">
            <Button className="round_button" type="ghost">
              Mulai Sekarang
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
