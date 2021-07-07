import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">TEJASHRI MITBAVKAR </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />Currently pursuing B.tech in Usha Mittal Institute of Technology, Mumbai.
            I find myself very curious person to learn about new technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travel & Explore
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading novels
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(183, 201, 19)" }}>
            "Paint your own sky..."{" "}
          </p>
          <footer className="blockquote-footer">Tejashri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
