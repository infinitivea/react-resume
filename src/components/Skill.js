import { Col, Divider, Progress, Row, Tag, Typography } from "antd";
import React from "react";
import Languages from "./Languages";

function Skill() {
  const { Text, Title } = Typography;

  return (
    <>
      <Row>
        <Col span={8} style={{ textAlign: "center" }}>
          <Title level={2} style={{ fontStyle: "italic" }}>
            Skill
          </Title>
        </Col>
        <Col span={16}>
          <Row>
            <Title level={3}>Programming</Title>
          </Row>
          <Row>
            <Col span={2}>
              <Text strong>HTML/CSS</Text>
            </Col>
            <Col span={10}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={98}
                size="small"
                showInfo={false}
              />
            </Col>
          </Row>
          <Row>
            <Col span={2}>
              <Text strong>Javascript</Text>
            </Col>
            <Col span={10}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={96}
                size="small"
                showInfo={false}
              />
            </Col>
          </Row>
          <Row>
            <Col span={2}>
              <Text strong>React</Text>
            </Col>
            <Col span={10}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={75}
                size="small"
                showInfo={false}
              />
            </Col>
          </Row>
          <Row>
            <Col span={2}>
              <Text strong>Java</Text>
            </Col>
            <Col span={10}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={70}
                size="small"
                showInfo={false}
              />
            </Col>
          </Row>
          <Row>
            <Col span={2}>
              <Text strong>SQL</Text>
            </Col>
            <Col span={10}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={60}
                size="small"
                showInfo={false}
              />
            </Col>
          </Row>
          <Languages />
        </Col>
      </Row>
      <Divider />
    </>
  );
}

export default Skill;
