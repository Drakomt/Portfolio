import "./SkillsStack.css";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiAngularSimple ,
} from "react-icons/di";
import {
  SiTypescript ,
  SiJavascript ,
  SiDotnet ,
  SiExpress ,
  SiSqlite ,
} from "react-icons/si";
import { TbBrandCSharp, TbSql, TbBrandBootstrap } from "react-icons/tb";

function SkillsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="skills-icon">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <SiDotnet  />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <SiJavascript  />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <SiSqlite  />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <TbSql  />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <TbBrandBootstrap />
      </Col>
      <Col xs={4} md={2} className="skills-icon">
        <DiGit />
      </Col>
    </Row>
  );
}

export default SkillsStack;
