import React from "react";
import "./style.css";
import { DATA_PREVIEW } from "../constants";

const PreviewPage = () => {
  return (
    <div className="parentContainer">
      <div className="container1">
        {DATA_PREVIEW.map((item, index) => (
          <div className="classcontainer" key={index}>
            <h1 className="h1">{item.kelas}</h1>
            <span className="subContainer">
              <img src={item.image} style={{ width: 40 }} alt="" />
              <div className="pull-left-text">
                <p>{item.name}</p>
                <p>{item.altr}</p>
              </div>
              <div style={{ marginLeft: 100 }}>
                <p>{item.categ}</p>
                <p>{item.record}</p>
              </div>
            </span>
            <span>
              <hr />
              <button className="box" style={{ backgroundColor: "#fff" }}>
                <p>{item.desc}</p>
              </button>
              <button className="box" style={{ backgroundColor: "#f0f4fa" }}>
                <p>{item.curr}</p>
              </button>
              <button className="box" style={{ backgroundColor: "#f0f4fa" }}>
                <p>{item.rev}</p>
              </button>
            </span>
            <br></br>
            <img
              src={item.imagee}
              className="gambarImg"
              style={{ width: 720 }}
              alt=""
            />
            <br></br>
            <h1 className="latar">{item.latar}</h1>
            <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
              {item.welcome}
            </h3>
            <p
              style={{
                fontSize: "15px",
                marginBottom: "20px",
              }}
            >
              {item.hack}
            </p>
            <p style={{ fontSize: "15px", marginBottom: "10px" }}>
              {item.sesi}
            </p>
            <p style={{ fontSize: "15px", marginBottom: "10px" }}>
              {item.karir}
            </p>
            <h1 className="materiPapar">{item.materi}</h1>
            <ul className="ul">
              <li>{item.items}</li>
              <li>{item.items1}</li>
              <li>{item.items2}</li>
              <li>{item.items3}</li>
              <li>{item.items4}</li>
            </ul>
            <div style={{ padding: "10px" }}>
              <h3 className="fasilitasPapar">{item.fasilitas}</h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#31708f",
                  paddingLeft: "10px",
                }}
              >
                {item.fas}
              </p>
            </div>
            <ul className="ul" style={{}}>
              <li className=" li">{item.cert}</li>
              <li>{item.unli}</li>
              <li>{item.study}</li>
              <li>{item.self}</li>
              <li>{item.study1}</li>
            </ul>
            <p style={{ fontSize: "14px", marginTop: "26px" }}>{item.syarat}</p>
          </div>
        ))}
      </div>
      <div className="container2">
        <div className="wishlist">
          <img
            className="heartSvg"
            src="/src/assets/svg/heart-regular.svg"
            alt=""
          />
          <p>Add to Wishlist</p>
        </div>

        <div className="boxPrice">
          <h1 style={{ color: "white" }}>GET COURSE</h1>
          <div className="price">
            <p className="normalPrice">Rp.119.000</p>
            <p className="discPrice">Rp.69.000</p>
          </div>
        </div>

        <div className="twoCol">
          <p>
            Enrolled: 37 students
            <span>
              <img
                className="svgUsers"
                src="/src/assets/svg/users-solid.svg"
                alt=""
              />
            </span>
          </p>
          <div className="garis"></div>
          <p>
            Lectures: 2{" "}
            <span>
              <img className="lectures" src="/src/assets/lectures.svg" alt="" />
            </span>
          </p>
        </div>

        <div className="featureContainer">
          <div className="iconFeature">
            <img src="/src/assets/credit-card-solid.svg" alt="" />
            <span>Beragam Metode Pembayaran</span>
          </div>
          <div className="iconFeature">
            <img src="/src/assets/play-circle-solid.svg" alt="" />
            <span>Full Akses ke Video & Materi</span>
          </div>
          <div className="iconFeature">
            <img src="/src/assets/clock-solid.svg" alt="" />
            <span>Waktu Belajar yang fleksibel</span>
          </div>
          <div className="iconFeature">
            <img src="/src/assets/question-circle-solid.svg" alt="" />
            <span>Sesi Tanya Jawab dengan Mentor*</span>
          </div>
          <div className="iconFeature">
            <img src="/src/assets/thumbs-up-solid.svg" alt="" />
            <span>Grup Diskusi dengan Mentor*</span>
          </div>
          <div className="iconFeature">
            <img src="/src/assets/certificate-solid.svg" alt="" />
            <span>Sertifikasi Online dan Terverifikasi</span>
          </div>
          <p style={{ fontStyle: "italic" }}>*Berlaku untuk Hybrid Class</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
