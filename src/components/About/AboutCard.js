import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "1.2em" }}>
              Hello everyone, I am <span className="purple">Bhanu Uday Sharma</span>.
              <br />
              I am from <span className="purple">Jalandhar, India.</span>
              <br />
              I am currently pursuing B.Tech in Computer Science and Engineering at Lovely Professional University.
              <br />
              I am passionate about full stack development and constantly working to enhance my skills.
            </span>
          </p>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Code with passion, create with purpose!"{" "}
          </p>
          <footer className="blockquote-footer">Bhanu Uday Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
