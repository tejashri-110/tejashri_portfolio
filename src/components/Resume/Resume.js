import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/teju.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Computer Society of India"
              date="June 2020 - August 2020"
              content={[
                "The Computer Society of India is a non-profit professional meet to exchange views and information to learn and share ideas. The wide spectrum of members is committed to the advancement of theory and practice of Computer Engineering and Technology Systems. I worked as a representative of this council for the academic year 2019-2020."
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Front end Website-Developer"
              content={[
                "Worked on few wordpress templates and react based websites."
              ]}
            />
            <Resumecontent
              title="Team Member-Queen Bandits"
              content={[
                "Dance team member of our official college team.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="COMPUTER SCIENCE AND TECHNOLOGY "
              date="2019 - Present"
              content={[`CGPA: 9.2 (Till 3th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD CBSE"
              date="2017 - 2019"
              content={["Precentage: 86%"]}
            />
            <Resumecontent
              title="10TH BOARD CBSE "
              date="2004 - 2017"
              content={["Precentage: 93%"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3> */}
            <Resumecontent
              title=""
              content={[
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
