import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import Github from "../../components/Github";
import Aboutcard from "../../components/AboutCard/AboutCard";
import AboutImage from "../../assets/AboutImage.png";
import SkillsStack from "../../components/SkillsStack/SkillsStack";
import ToolsStack from "../../components/ToolsStack/ToolsStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className="about-img"
          >
            <img src={AboutImage} alt="about" className="img-fluid"/>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <SkillsStack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <ToolsStack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
