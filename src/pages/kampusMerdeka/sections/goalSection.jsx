import { Layout, Row, Col } from "antd";
import { goalData } from "./constants";
export default function GoalSection() {
  const { Content } = Layout;
  return (
    <Content className="goalSection">
      <Row className="container">
        {goalData.map((item, index) => (
          <Col span={12} key={index} className="item">
            <div className="blue-title">
              <h3>{item.title}</h3>
            </div>
            <div className="list">
              {item.items.map((cur, idx) => (
                <div key={idx} className="goal">
                  <i
                    className="bx bxs-check-circle"
                    style={{ fontSize: 21, color: "#f37524" }}
                  />
                  <p>{cur}</p>
                </div>
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </Content>
  );
}
