import { Col, Divider, Row, Space, Typography } from "antd";

const { Title } = Typography;

export function GridPage() {
  return (
    <Row>
      <Col span={6}>
        <Title level={3}>Basic Grid:</Title>
      </Col>
      <Col span={18}>
        <Space direction="vertical" style={{width: "100%"}} size={30}>
          <Row>
            <Col style={{ backgroundColor: "blue", color: "white" }} span={24}>
              col
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: "blue", color: "white" }} span={12}>
              col
            </Col>
            <Col
              style={{ backgroundColor: "skyblue", color: "white" }}
              span={12}
            >
              col
            </Col>
          </Row>
          <Row>
            <Col
              style={{ backgroundColor: "skyblue", color: "white" }}
              span={8}
            >
              col
            </Col>
            <Col style={{ backgroundColor: "blue", color: "white" }} span={8}>
              col
            </Col>
            <Col
              style={{ backgroundColor: "skyblue", color: "white" }}
              span={8}
            >
              col
            </Col>
          </Row>
          <Row>
            <Col style={{ backgroundColor: "blue", color: "white" }} span={6}>
              col
            </Col>
            <Col
              style={{ backgroundColor: "skyblue", color: "white" }}
              span={6}
            >
              col
            </Col>
            <Col style={{ backgroundColor: "blue", color: "white" }} span={6}>
              col
            </Col>
            <Col
              style={{ backgroundColor: "skyblue", color: "white" }}
              span={6}
            >
              col
            </Col>
          </Row>
        </Space>
      </Col>
      <Divider orientation="right" plain>
        Basic Grid
      </Divider>
    </Row>
  );
}
