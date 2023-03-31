import { Layout, Row, Col } from "antd";
import { classData } from "./constants";
export default function ClassSection() {
  const { Content } = Layout;
  return (
    <Content className="classSection">
      <div className="blue-title">
        <h3>3 JENIS KELAS</h3>
      </div>
      <Row className="classContainer">
        {classData.map((method, idx) => (
          <Col span={8} className="classItem" key={idx}>
            <h5>{method.title}</h5>
            <p>{method.description}</p>
            <div className="features">
              {method.feature.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <i
                    className={
                      feature === "live" ? "bx bxs-video" : "bx bx-play-circle"
                    }
                    style={{ fontSize: 21, color: "#f37524" }}
                  />
                  <span>
                    {feature === "live" ? "Live Class" : "Recorded Learning"}
                  </span>
                </div>
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </Content>
  );
}
