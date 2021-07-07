import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.jpg";
import webdevelopment from "../../Assets/Projects/webdevelopment.png";
import suicide from "../../Assets/Projects/suicide.png";


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
              imgPath={webdevelopment}
              isBlog={false}
              title="P-Indicator"
              description="Building a mobile application to give real time Smart Parking that uses technology in an effort to achieve faster, easier and denser parking of vehicles 
              Using React native framework ,Firebase for Database and Razorpay to make payments.
             "
              link="https://github.com/tejashri-110/Parking-space-finder-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Job & Co"
              description="A flutter based mobile application mainly build for the enhancement of jobs for local workers.The app was build for the 2021-Solution Challenge organized by Google Developer Student Clubs.The basic technologies used are Flutter SDK,Firebase and DevTools."
              link="https://github.com/tejashri-110/dsc"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/tejashri-110/Webpage"
            />
          </Col> */}


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Porfolio Site"
              description="This site consists of all my recent records,interests and projects.The main language used is React.js & for the deployment purpose I have used vercel.Vercel is a deployment and collaboration platform for frontend developers."
              link="https://github.com/tejashri-110/Webpage"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/tejashri-110/Webpagen"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
