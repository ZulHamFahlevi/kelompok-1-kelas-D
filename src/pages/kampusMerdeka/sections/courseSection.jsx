import { Layout, Row, Col } from "antd";
import { secondData } from "./constants";
export default function CourseSection() {
  const { Content } = Layout;
  return (
    <div className="secondSection-container">
      <Content className="secondSection">
        <h2 className="title-second-data">{secondData.title}</h2>
        <Row className="cards" gutter={[16]}>
          {secondData.items.map((item, idx) => (
            <Col span={8} key={idx}>
              <div className="course-card">
                <img src={item.icon} alt={item.title} />
                <div className="detail">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <button>Lihat Kelas</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Content>
    </div>
  );
}
