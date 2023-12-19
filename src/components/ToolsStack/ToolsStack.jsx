import "./ToolsStack.css";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiDocker ,
  SiMicrosoftazure
} from "react-icons/si";

function ToolsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tools-icon">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tools-icon">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tools-icon">
        <SiDocker  />
      </Col>
      <Col xs={4} md={2} className="tools-icon">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tools-icon">
        <SiMicrosoftazure />
      </Col>
    </Row>
  );
}

export default ToolsStack;
