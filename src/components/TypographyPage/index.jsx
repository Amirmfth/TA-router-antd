import { Col, Divider, Row, Space, Typography } from "antd";
const { Title, Text, Link, Paragraph } = Typography;

export function TypographyPage() {
  return (
    <Row>
      <Col span={6}>
        <Title level={3}>Titles:</Title>
      </Col>
      <Col span={18}>
        <Space
          split=":=:"
          size={[30]}
          align="center"
        >
          <Title>h1 Title</Title>
          <Title level={2}>h2 Title</Title>
          <Title level={3}>h3 Title</Title>
          <Title level={4}>h4 title</Title>
          <Title level={5}>h5 title</Title>
        </Space>
      </Col>
      <Divider orientation="right" plain >Title</Divider>
      <Col span={6}>
        <Title level={3}>Text and Link:</Title>
      </Col>
      <Col span={18}>
        <Space
          style={{ marginTop: "25px" }}
          split=":=:"
          size={[30]}
          align="center"
        >
          <Text type="secondary">Secondary</Text>
          <Text type="danger">Danger</Text>
          <Text type="success">Success</Text>
          <Text type="warning">Warning</Text>
          <Text disabled>Disabled</Text>
          <Text mark>Marked</Text>
          <Text code>code</Text>
        </Space>
      </Col>
      <Divider orientation="right" plain >Text and Link</Divider>
      <Col span={6}>
        <Title level={3}>Text and Link:</Title>
      </Col>
      <Col span={18}>
        <Space
          style={{ marginTop: "25px" }}
          split=":=:"
          size={[30]}
          align="center"
        >
          <Text keyboard>KeyBoard</Text>
          <Text underline>UnderLine</Text>
          <Text delete>delete</Text>
          <Text strong>Strong</Text>
          <Text italic>Italic</Text>
          <Link href="#">Link</Link>
        </Space>
      </Col>
      <Divider orientation="right" plain >Text and Link</Divider>
    </Row>
  );
}
