import { Button, Col, Divider, Row, Space, Typography } from "antd";
const { Text, Title } = Typography;

export function Buttons() {
  return (
    <Row>
      <Col span={6}>
        <Title level={3}>Button Types:</Title>
      </Col>
      <Col span={18}>
        <Space style={{marginTop: "25px"}} split=":=:" size={[30]} align="center">
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="default">Default</Button>
          <Button type="link">Link</Button>
          <Button type="text">Text</Button>
          <Button type="ghost">Ghost</Button>
        </Space>
      </Col>
      <Divider orientation="right" plain >Button Types</Divider>
      <Col span={6}>
        <Title level={3}>Button Sizes and Modes: </Title>
      </Col>
      <Col span={18}>
        <Space style={{marginTop: "25px"}} split=":=:" size={[30]} align="center">
          <Button type="primary" size="large" >Large</Button>
          <Button type="primary">Default</Button>
          <Button type="primary" size="small">Small</Button>
          <Button type="primary" loading>Loading</Button>
          <Button type="primary" danger >Danger</Button>
          <Button type="primary" disabled >Disabled</Button>
          
        </Space>
      </Col>
      <Divider orientation="right" plain >Button Sizes and Modes</Divider>
    </Row>
  );
}
