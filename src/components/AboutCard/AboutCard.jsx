import "./AboutCard.css";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Matthew Tsiplakov </span>
            from <span className="purple"> Israel.</span>
            <br />
            I am a Full-Stack developer, looking for my next job opportunity.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Models
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p className="blockquote-text">
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Matthew</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
