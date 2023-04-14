import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "./Record.css";
import { Card, Col, Row, Tooltip } from "antd";
import { DATA_RECORDED } from "./constants";

const RecordedLearning = () => {
  const [loadMore, setLoadMore] = useState(false);
  const styles = {
    fontFamily: '"Catamaran", Sans-serif',
    fontWeight: "bold",
    fontSize: "2em",
    color: "rgb(28, 28, 92)",
  };
  const dataMore = loadMore ? DATA_RECORDED.length : 8;

  const handleClick = useCallback((item) => {
    setSelectedClass(item);
    history.push("/PreviewPage");
  }, [history]);

  const handleLoadMore = () => {
    setLoadMore(!loadMore);
  };

  return (
    <div className="container-record">
      <h2 style={{ ...styles, marginTop: "30px" , fontWeight: "bold"}}>Recorded Learning</h2>
      <p style={{ fontFamily: "'Catamaran', sans-serif", marginTop: "2rem" }}>
        Sebuah pelatihan singkat di mana anda akan mempelajari ilmu-ilmu terbaru
        dan relevan dengan industri IT.
      </p>
      <Row gutter={10} style={{ flexWrap: "wrap"}}>
        {DATA_RECORDED.slice(0, dataMore).map((item, index) => {
          return (
            <Col span={6} style={{ display: "flex", alignItems: "stretch"}}>
              <Tooltip title="Alterra Academy">
                <Card
                  key={index}
                  style={{
                    width: 300,
                    marginTop: 30,
                    display: "flex",
                    flexDirection: "column"
                  }}
                  cover={<img alt="img" src={item.image}/>}
                >
                  <div>
                    <p>{item.kelas}</p>
                    <Link to="/PreviewPage" onClick={() => handleClick(item)}>
                      <h3 style={{color:"black"}}>{item.name}</h3>
                    </Link>
                    <hr />
                    <span className="container-harga">
                      <p
                        style={{
                          textAlign: "right",
                          textDecoration: "line-through",
                        }}
                      >
                        {item.price}
                      </p>
                      <h3 style={{ textAlign: "right" }}>{item.harga}</h3>
                    </span>
                  </div>
                </Card>
              </Tooltip>
            </Col>
          );
        })}
      </Row>

      <button type="button" className="btn-primary" onClick={handleLoadMore}>
        {loadMore ? "SHOW LESS" : "LOAD MORE"}
      </button>
    </div>
  );
};

export default RecordedLearning;