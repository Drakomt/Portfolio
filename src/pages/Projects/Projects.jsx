import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Particle from "../../components/Particle";
import leaf from "../../assets/Projects/leaf.png";
import emotion from "../../assets/Projects/emotion.png";
import suicide from "../../assets/Projects/suicide.png";
import SupChat from "../../assets/Projects/SupChat.png";
import NetflixClone from "../../assets/Projects/NetflixClone.png";
import Eshop from "../../assets/Projects/EShopMERN.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eshop}
              title="Eshop (Amazon Clone)"
              description="In this eCommerce project, I meticulously replicated the fundamental features of the renowned Amazon website. The platform encompasses key elements of Amazon's user interface, intuitive navigation, product listings, and a secure checkout process. Not only does it mirror the core functionalities of Amazon, but it also integrates seamless user interactions, secure transactions, and an engaging shopping experience."
              ghLink="https://github.com/Drakomt/EshopMERN"
              demoLink="https://eshop-mern-client.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetflixClone}
              title="Streaming System (Netflix Clone)"
              description="In this Netflix clone project, I meticulously replicated the foundational features and aesthetics of the widely recognized video streaming platform, Netflix. The project not only mirrors the core functionalities of Netflix but also incorporates my unique enhancements, providing an immersive and user-friendly streaming experience."
              ghLink="https://github.com/Drakomt/NetflixClone"
              demoLink="https://netflix-clone-client-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SupChat}
              title="SupChat"
              description="In the SupChat project, I developed a sophisticated chat application reminiscent of WhatsApp. This platform enables users to create group chats, engage in private conversations with both contacts and non-contacts, and share images seamlessly. The application is crafted using state-of-the-art technologies, providing a secure, user-friendly, and real-time communication experience."
              ghLink="https://github.com/Drakomt/SupChat"
              // demoLink=""              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
