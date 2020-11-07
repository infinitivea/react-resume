import { Col, Divider, Row, Typography } from "antd";
import React from "react";

function Education() {
  const { Text, Title } = Typography;

  return (
    <>
      <Row>
        <Col span={8} style={{ textAlign: "center" }}>
          <Title level={2} style={{ fontStyle: "italic" }}>
            Education
          </Title>
        </Col>
        <Col span={16}>
          <Row>
            <Title level={3}>Thammasart University</Title>
          </Row>
          <Row>
            <Title level={5} type="secondary">
              2015 - 2019
            </Title>
          </Row>
          <Row>
            <Text>Bachelor’s Degree of Science (Computer Science)</Text>
          </Row>
        </Col>
      </Row>
      <Divider />
    </>
  );
}

export default Education;
