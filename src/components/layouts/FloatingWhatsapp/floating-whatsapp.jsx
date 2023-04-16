import React from "react";
import { Link } from "react-router-dom";

import WhatsappIcon from "../../../assets/whatsapp.png";

import "./floating-whatsapp.css";

const FloatingWhatsapp = () => {
  return (
    <Link to="#" className="floating_whatsapp">
      <img src={WhatsappIcon} alt="floating-whatsapp" width={27} />
    </Link>
  );
};

export default FloatingWhatsapp;
