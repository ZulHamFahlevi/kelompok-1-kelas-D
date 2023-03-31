import React from "react";
import "./style.css";
import { Card, Col, Row } from "antd";

const RecordedLearning = () => {
  // const { Meta } = Card;

  const styles = {
    fontFamily: '"Catamaran", Sans-serif',
    // fontStyle: 'italic',
    fontWeight: "bold",
    fontSize: "2em",
    color: "rgb(28, 28, 92)",
  };

  return (
    <div className="container-record">
      <h2 style={{ ...styles, marginTop: '40px' }}>Recorded Learning</h2>
      <p style={{ fontFamily: "'Catamaran', sans-serif", marginTop: "2rem" }}>
        Sebuah pelatihan singkat di mana anda akan mempelajari ilmu-ilmu terbaru
        dan relevan dengan industri IT.
      </p>
      <Row gutter={18} style={{ flexWrap: "wrap" }}>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 30,
            }}
            cover={
              <img
                alt="example"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/SMK-Bisa-pwodivvfv3d1xkqt5bzbsw5j3ywfxwwf2w78125zre.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Strategi berkarir di Starup Bermodal Ijazah SMK</h4>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 30,
            }}
            cover={
              <img
                alt="card2"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/2Hackerrank-pwfj6gjgpywiy7nhzi0v0w3nutvqqzsy31wesmnjuy.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Tips and Tricks to Pass Hackerrank Test</h4>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 30,
            }}
            cover={
              <img
                alt="card3"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/aCV-pwfim90ds78lc109zrjmezow2lhn99kpb0ylcgm9my.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Tips and Tricks Pembuatan CV Lulus Panggilan Kerja</h4>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 30,
            }}
            cover={
              <img
                alt="card4"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/aGraphic-pwfisp6ioa2ezpn1c1wh0v3qsrpb2i6eiy3ivt20y2.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Graphic Design for Beginner Workshop</h4>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <br></br>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 60,
            }}
            cover={
              <img
                alt="card4"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/Wordpress-pwfj02907k59xqy0c8h9k07qbfetd5epje2g7u507e.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Company Profile Website with WordPress Workshop</h4>
            <br></br>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 60,
            }}
            cover={
              <img
                alt="card4"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/aaUnicorn-pwfjfzmk0hy6nvt5c4bosziwogwpsimz280mymiuru.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>
              Webinar Tips and Tricks : How to Become a Software Engineer in a
              Unicorn
            </h4>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 60,
            }}
            cover={
              <img
                alt="card4"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/UU-pwfkzokay46sk4wv4oyx1fl3rcemuwqfpvjblty43u.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Get to know what and how to become a UI/UX designer</h4>
            <br></br>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 60,
            }}
            cover={
              <img
                alt="card4"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/Flutterrc-pwflz6wt4ssr5tbzs1jj8gzznddtn9pdxmroa5ap1m.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>
              Flutter Tutorial for Beginners – Build iOS and Android Apps with
              Google’s Flutter
            </h4>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 60,
            }}
            cover={
              <img
                alt="card4"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/Scruma-pwfm7gvnba4ne7b6g4c9ovt3yil6fbkaqlklev0w96.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Introduction to Scrum Framework</h4>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 60,
            }}
            cover={
              <img
                alt="card4"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/Phythons-pwfmctkk8bgfi9ja6xmse16lqi7f99t9t3b4sl36tm.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Story Telling with Data Using Python</h4>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 60,
            }}
            cover={
              <img
                alt="card4"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/Bots-pwfmhf05n5qw9muzcx54kvfqabk0w0213u4l9a9wei.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Create Your First Chatbot Using Python</h4>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 60,
            }}
            cover={
              <img
                alt="card4"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/Andro-pwfmlxm8hhxi26arzdfl28eh1zaivmzle6zla5ksi2.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Build Your First Android App</h4>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 280,
              marginTop: 60,
            }}
            cover={
              <img
                alt="card4"
                src="https://alta.id/wp-content/uploads/elementor/thumbs/uuua-pwfmq5w38npyb05la795a5z5aefzils3z4o90zb0i2.png"
              />
            }
          >
            <p>Recorded Learning</p>
            <h4>Smarter Prototyping with Figma</h4>
            <br></br>
            <hr></hr>
            <br />
            <p style={{ textAlign: "right", textDecoration: "line-through" }}>
              Rp.119.000
            </p>
            <h3 style={{ textAlign: "right" }}>Rp.69.000</h3>
          </Card>
        </Col>
      </Row>

      <button type="button" class="btn-primary" value="LOADMORE">
        LOAD MORE
      </button>
    </div>
  );
};

export default RecordedLearning;
