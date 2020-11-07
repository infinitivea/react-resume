import { Col, Divider, Row, Typography } from "antd";
import React from "react";

function WorkExperience() {
  const { Text, Title } = Typography;
  return (
    <>
      <Row>
        <Col span={8} style={{ textAlign: "center" }}>
          <Title level={2} style={{ fontStyle: "italic" }}>
            Work Experience
          </Title>
        </Col>
        <Col span={16}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            odio nisl, ultrices eget porttitor ut, finibus nec risus. Nunc porta
            mattis porttitor. Aenean auctor libero lorem, nec tincidunt massa
            laoreet in. Aliquam sollicitudin interdum nisi sed ultrices. Integer
            porta turpis a sapien blandit, vitae vulputate neque laoreet.
            Vivamus et risus vehicula lectus dapibus vulputate at ac lacus. Nunc
            tincidunt tortor sit amet nunc imperdiet, eu ullamcorper lectus
            cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce id arcu felis. Mauris molestie tincidunt lorem, at pretium
            neque. In eget porta massa. Proin eget ullamcorper erat, a ultricies
            augue. Pellentesque vel.
          </Text>
        </Col>
      </Row>
      <Divider />
    </>
  );
}

export default WorkExperience;
