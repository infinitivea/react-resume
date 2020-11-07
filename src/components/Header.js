import React from "react";
import profileImg from "../images/codecamp7 v1_201107_1.jpg";
import { Button, Col, Divider, Row, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function Header() {
  const { Text, Title } = Typography;

  return (
    <Row justify="center">
      <Col span={4}>
        <img
          src={profileImg}
          alt="profile"
          width="150px"
          height="150px"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Col>
      <Col span={16}>
        <Title style={{ margin: "0 8px" }}>Nuttawat Rojboonnark</Title>
        <Title level={2} type="secondary" style={{ margin: "0 8px" }}>
          Full Stack Web Developer
        </Title>
      </Col>
      <Col span={4}>
        <Row justify="end">
          <Button type="primary">
            <DownloadOutlined />
            Download as PDF
          </Button>
        </Row>
        <Row justify="end" style={{ wordWrap: "break-word", textAlign: "end" }}>
          <Text>
            Address: 87/458, Bangkruay-sainoi Road, Bang Rak Yai , Bang Bua
            Thong , Nonthaburi, 11110
          </Text>
        </Row>
        <Row justify="end">
          <Text>Email:</Text>
          <a href={"mailto: nuttawat.rojb@gmail.com"}>
            &ensp;nuttawat.rojb@gmail.com
          </a>
        </Row>
        <Row justify="end">
          <Text>Tel: 095-245-4697</Text>
        </Row>
      </Col>
      <Divider />
    </Row>
  );
}

export default Header;
