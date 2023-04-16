import { Card, Col, Row, Typography } from "antd";

import Container from "../../component/container/container";

import { social } from "./constants";

import "./social.css";

export default function SocialComponent() {
  return (
    <div className="social_media_section">
      <Container className="social_media_section--container">
        <Row>
          {social.map((sm) => (
            <Col xs={24} sm={12} md={8} key={sm.id}>
              <Card bodyStyle={{ padding: 20 }} className="social_media_card">
                <Row align="middle" gutter={[12, 12]}>
                  <div className="social_media_image">
                    <img src={sm.icon} alt={sm.icon_alt} />
                  </div>
                  <div className="social_media_detail">
                    <Typography.Title
                      level={4}
                      className="social_media_title font_mulish"
                    >
                      {sm.title}
                    </Typography.Title>
                    <Typography.Text className="social_media_description font_mulish">
                      {sm.description}
                    </Typography.Text>
                  </div>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
