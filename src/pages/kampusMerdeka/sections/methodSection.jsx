import { Layout, Row, Col } from "antd";
import { methodData } from "./constants";
export default function MethodSection() {
  const { Content } = Layout;
  return (
    <Content className="methodSection">
      <div className="blue-title">
        <h3>METODE PEMBELAJARAN</h3>
      </div>
      <Row className="methodContainer">
        {methodData.map((method, idx) => (
          <Col span={6} className="methodItem" key={idx}>
            <img src={method.icon} />
            <h5>{method.title}</h5>
            <p>{method.description}</p>
          </Col>
        ))}
      </Row>
    </Content>
  );
}
