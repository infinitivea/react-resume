import { Col, Row, Table, Typography } from "antd";
import React from "react";

function Languages() {
  const { Text, Title } = Typography;

  const columns = [
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
      responsive: ["xs", "md", "lg"],
    },
    {
      title: "Listening",
      dataIndex: "listening",
      key: "listening",
      responsive: ["xs", "md", "lg"],
    },
    {
      title: "Writing",
      dataIndex: "writing",
      key: "writing",
      responsive: ["xs", "md", "lg"],
    },
    {
      title: "Reading",
      dataIndex: "reading",
      key: "reading",
      responsive: ["xs", "md", "lg"],
    },
    {
      title: "Speaking",
      dataIndex: "speaking",
      key: "speaking",
      responsive: ["xs", "md", "lg"],
    },
  ];

  const data = [
    {
      key: "1",
      language: "Thai",
      listening: "Native",
      writing: "Native",
      reading: "Native",
      speaking: "Native",
    },
    {
      key: "2",
      language: "English",
      listening: "Fair",
      writing: "Fair",
      reading: "Average",
      speaking: "Fair",
    },
    {
      key: "3",
      language: "Japanese",
      listening: "Basic",
      writing: "Basic",
      reading: "Basic",
      speaking: "Basic",
    },
  ];

  return (
    <Row style={{ marginTop: 8 }}>
      <Col span={12}>
        <Table
          columns={columns}
          dataSource={data}
          showHeader={true}
          pagination={false}
          title={() => <Title level={3}>Languages</Title>}
        />
      </Col>
    </Row>
  );
}

export default Languages;
