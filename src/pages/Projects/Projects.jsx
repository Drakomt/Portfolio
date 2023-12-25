// import "./Projects.css";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import Particle from "../../components/Particle";
// import leaf from "../../assets/Projects/leaf.png";
// import emotion from "../../assets/Projects/emotion.png";
// import suicide from "../../assets/Projects/suicide.png";

// import Eshop from "../../assets/Projects/EShopMERN/EShopMERN.png";
// import Eshop2 from "../../assets/Projects/EShopMERN/EShopMERN-2.png";
// import Eshop3 from "../../assets/Projects/EShopMERN/EShopMERN-3.png";
// import Eshop4 from "../../assets/Projects/EShopMERN/EShopMERN-4.png";
// import Eshop5 from "../../assets/Projects/EShopMERN/EShopMERN-5.png";
// import Eshop6 from "../../assets/Projects/EShopMERN/EShopMERN-6.png";
// import Eshop7 from "../../assets/Projects/EShopMERN/EShopMERN-7.png";
// import Eshop8 from "../../assets/Projects/EShopMERN/EShopMERN-8.png";
// import Eshop9 from "../../assets/Projects/EShopMERN/EShopMERN-9.png";

// import NetflixClone from "../../assets/Projects/NetflixClone/NetflixClone.png";
// import NetflixClone2 from "../../assets/Projects/NetflixClone/NetflixClone-2.png";
// import NetflixClone3 from "../../assets/Projects/NetflixClone/NetflixClone-3.png";
// import NetflixClone4 from "../../assets/Projects/NetflixClone/NetflixClone-4.png";
// import NetflixClone5 from "../../assets/Projects/NetflixClone/NetflixClone-5.png";
// import NetflixClone6 from "../../assets/Projects/NetflixClone/NetflixClone-6.png";
// import NetflixClone7 from "../../assets/Projects/NetflixClone/NetflixClone-7.png";

// import SupChat from "../../assets/Projects/SupChat/SupChat.png";
// import SupChat2 from "../../assets/Projects/SupChat/SupChat-2.png";
// import SupChat3 from "../../assets/Projects/SupChat/SupChat-3.png";
// import SupChat4 from "../../assets/Projects/SupChat/SupChat-4.png";
// import SupChat5 from "../../assets/Projects/SupChat/SupChat-5.png";
// import SupChat6 from "../../assets/Projects/SupChat/SupChat-6.png";
// import SupChat7 from "../../assets/Projects/SupChat/SupChat-7.png";




// function Projects() {
//   const EshopImages = [
//     {url: Eshop},
//     {url: Eshop2},
//     {url: Eshop3},
//     {url: Eshop4},
//     {url: Eshop5},
//     {url: Eshop6},
//     {url: Eshop7},
//     {url: Eshop8},
//     {url: Eshop9},
//   ]

//   const NetflixCloneImages = [
//     {url: NetflixClone},
//     {url: NetflixClone2},
//     {url: NetflixClone3},
//     {url: NetflixClone4},
//     {url: NetflixClone5},
//     {url: NetflixClone6},
//     {url: NetflixClone7},
//   ]

//   const SupChatImages = [
//     {url: SupChat},
//     {url: SupChat2},
//     {url: SupChat3},
//     {url: SupChat4},
//     {url: SupChat5},
//     {url: SupChat6},
//     {url: SupChat7},
//   ]

//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               images={EshopImages}
//               // imgPath={Eshop}
//               title="Eshop (Amazon Clone)"
//               description="In this eCommerce project, I meticulously replicated the fundamental features of the renowned Amazon website. The platform encompasses key elements of Amazon's user interface, intuitive navigation, product listings, and a secure checkout process. Not only does it mirror the core functionalities of Amazon, but it also integrates seamless user interactions, secure transactions, and an engaging shopping experience."
//               ghLink="https://github.com/Drakomt/EshopMERN"
//               demoLink="https://eshop-mern-client.vercel.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               images={NetflixCloneImages}
//               // imgPath={NetflixClone}
//               title="Streaming System (Netflix Clone)"
//               description="In this Netflix clone project, I meticulously replicated the foundational features and aesthetics of the widely recognized video streaming platform, Netflix. The project not only mirrors the core functionalities of Netflix but also incorporates my unique enhancements, providing an immersive and user-friendly streaming experience."
//               ghLink="https://github.com/Drakomt/NetflixClone"
//               demoLink="https://netflix-clone-client-two.vercel.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               images={SupChatImages}
//               // imgPath={SupChat}
//               title="SupChat"
//               description="In the SupChat project, I developed a sophisticated chat application reminiscent of WhatsApp. This platform enables users to create group chats, engage in private conversations with both contacts and non-contacts, and share images seamlessly. The application is crafted using state-of-the-art technologies, providing a secure, user-friendly, and real-time communication experience."
//               ghLink="https://github.com/Drakomt/SupChat"
//               // demoLink=""              
//             />
//           </Col>

//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               title="Plant AI"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/"
//               demoLink=""
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/"
//               // demoLink="" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/"
//               // demoLink=""      <--------Please include a demo link here
//             />
//           </Col> */}
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;




import "./Projects.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Particle from "../../components/Particle";
import leaf from "../../assets/Projects/leaf.png";
import emotion from "../../assets/Projects/emotion.png";
import suicide from "../../assets/Projects/suicide.png";

import Eshop from "../../assets/Projects/EShopMERN/EShopMERN.png";
import Eshop2 from "../../assets/Projects/EShopMERN/EShopMERN-2.png";
import Eshop3 from "../../assets/Projects/EShopMERN/EShopMERN-3.png";
import Eshop4 from "../../assets/Projects/EShopMERN/EShopMERN-4.png";
import Eshop5 from "../../assets/Projects/EShopMERN/EShopMERN-5.png";
import Eshop6 from "../../assets/Projects/EShopMERN/EShopMERN-6.png";
import Eshop7 from "../../assets/Projects/EShopMERN/EShopMERN-7.png";
import Eshop8 from "../../assets/Projects/EShopMERN/EShopMERN-8.png";
import Eshop9 from "../../assets/Projects/EShopMERN/EShopMERN-9.png";

import NetflixClone from "../../assets/Projects/NetflixClone/NetflixClone.png";
import NetflixClone2 from "../../assets/Projects/NetflixClone/NetflixClone-2.png";
import NetflixClone3 from "../../assets/Projects/NetflixClone/NetflixClone-3.png";
import NetflixClone4 from "../../assets/Projects/NetflixClone/NetflixClone-4.png";
import NetflixClone5 from "../../assets/Projects/NetflixClone/NetflixClone-5.png";
import NetflixClone6 from "../../assets/Projects/NetflixClone/NetflixClone-6.png";
import NetflixClone7 from "../../assets/Projects/NetflixClone/NetflixClone-7.png";

import SupChat from "../../assets/Projects/SupChat/SupChat.png";
import SupChat2 from "../../assets/Projects/SupChat/SupChat-2.png";
import SupChat3 from "../../assets/Projects/SupChat/SupChat-3.png";
import SupChat4 from "../../assets/Projects/SupChat/SupChat-4.png";
import SupChat5 from "../../assets/Projects/SupChat/SupChat-5.png";
import SupChat6 from "../../assets/Projects/SupChat/SupChat-6.png";
import SupChat7 from "../../assets/Projects/SupChat/SupChat-7.png";
import ImageView from "../../components/ImageView/ImageView";
import ImageSlider from "../../components/ImageSlider/ImageSlider";




function Projects() {
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const openImageView = (images) => {
    setCurrentImages(images);
    setIsViewOpen(true);
  };

  const closeImageView = () => {
    setIsViewOpen(false);
  };

  const projects = [
    {
      images:[
        {url: Eshop},
        {url: Eshop2},
        {url: Eshop3},
        {url: Eshop4},
        {url: Eshop5},
        {url: Eshop6},
        {url: Eshop7},
        {url: Eshop8},
        {url: Eshop9},
      ],
      // imgPath={Eshop}
      title:"Eshop (Amazon Clone)",
      description:"In this eCommerce project, I meticulously replicated the fundamental features of the renowned Amazon website. The platform encompasses key elements of Amazon's user interface, intuitive navigation, product listings, and a secure checkout process. Not only does it mirror the core functionalities of Amazon, but it also integrates seamless user interactions, secure transactions, and an engaging shopping experience.",
      ghLink:"https://github.com/Drakomt/EshopMERN",
      demoLink:"https://eshop-mern-client.vercel.app/",
    },
    {
      images:[
        {url: NetflixClone},
        {url: NetflixClone2},
        {url: NetflixClone3},
        {url: NetflixClone4},
        {url: NetflixClone5},
        {url: NetflixClone6},
        {url: NetflixClone7},
      ],
      // imgPath={NetflixClone}
      title:"Streaming System (Netflix Clone)",
      description:"In this Netflix clone project, I meticulously replicated the foundational features and aesthetics of the widely recognized video streaming platform, Netflix. The project not only mirrors the core functionalities of Netflix but also incorporates my unique enhancements, providing an immersive and user-friendly streaming experience.",
      ghLink:"https://github.com/Drakomt/NetflixClone",
      demoLink:"https://netflix-clone-client-two.vercel.app/",
    },
    {
      images:[
        {url: SupChat},
        {url: SupChat2},
        {url: SupChat3},
        {url: SupChat4},
        {url: SupChat5},
        {url: SupChat6},
        {url: SupChat7},
      ],
      // imgPath={SupChat}
      title:"SupChat",
      description:"In the SupChat project, I developed a sophisticated chat application reminiscent of WhatsApp. This platform enables users to create group chats, engage in private conversations with both contacts and non-contacts, and share images seamlessly. The application is crafted using state-of-the-art technologies, providing a secure, user-friendly, and real-time communication experience.",
      ghLink:"https://github.com/Drakomt/SupChat",
      // demoLink="",    
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Your existing project cards */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                images={project.images}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                onImageClick={() => {openImageView(project.images)}} // Pass the click handler
              />
            </Col>
          ))}
        </Row>
        {isViewOpen && <ImageView images={currentImages} onClose={closeImageView} />}
      </Container>
    </Container>
  );
}

export default Projects;
