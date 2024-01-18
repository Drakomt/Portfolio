import "./Introduction.css";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Introduction() {
  return (
    <Container fluid className="intro-section" id="intro">
      <Container>
        <Row>
          <Col md={8} className="intro-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="red"> INTRODUCE </span> MYSELF
            </h1>
            <p className="intro-body">
              Hey, I'm <b className="red"> Matthew </b>, a former <b className="red"> Tank Commander </b> turned <b className="red"> Full-Stack Developer. </b>
              <br />
              <br /> 
              Having navigated diverse terrains, I now navigate the digital landscape with skills in <b className="red"> JavaScript, C#, and Python. </b>
              <br />
              <br />
              My coding journey is a unique blend of <b className="red"> Military Precision </b> and <b className="red"> creative flair, </b> where I transform concepts into <b className="red"> User-Centric</b> digital experiences. 
              <br />
              <br />
              I specialize in crafting <b className="red"> Innovative Solutions </b> that reflect a blend of <b className="red"> Strategic </b> thinking and <b className="red"> Tech Innovation. </b>
              <br />
              <br />
              Ready to embark on a new <b className="red"> Adventure? </b> Let's <b className="red"> Connect </b> and build something <b className="red"> Extraordinary </b> together!
            </p>



            {/* <p className="intro-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="red"> Javascript ,C# and Python. </b>
              </i>
              <br />
              <br />
              My fields of interest include building new &nbsp;
              <i>
                <b className="red">Web Technologies and Products, </b> as well as areas related to{" "}
                <b className="red">
                  AI and Machine Learning.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="red">Node.js</b> and
              <i>
                <b className="red">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="red"> React.js and Next.js</b>
              </i>
            </p> */}
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="intro-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="red">connect </span>with me
            </p>
            <ul className="intro-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Drakomt"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  intro-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  intro-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/matthew-tsiplakov/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  intro-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour intro-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Introduction;