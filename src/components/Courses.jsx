import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCards";
import Particle from "./Particle";
import c1 from "../Assets/c1.png";
import c2 from "../Assets/c2.png";
import c3 from "../Assets/c3.png";
// import metaBackend from "../../Assets/meta-backend.png";
// import googleData from "../../Assets/google-data.png";
// import googleUX from "../../Assets/Certificates/google-ux.png";
// import ibmDataScience from "../../Assets/Certificates/ibm-data-science.png";
// import awsCloud from "../../Assets/Certificates/aws-cloud.png";

function Courses() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I've earned to enhance my skills.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c1}
              title="Server side JavaScript with Node.js"
              description="Professional certificate covering Node.js environment , test and debug the basic programs incorporating Node.js "
              certificateLink="https://coursera.org/share/7a25bce4156aa457d4c4008db9ee2b5a"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c2}
              title="C++ Object Basics"
              description="Professional certificate covering : Functions, Recursion, and Objects"
              certificateLink="https://coursera.org/share/a351c5391435d5ed38aeea624106cd40"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={c3}
              title="Cloud Computing"
              description="Professional certificate covering Cloud Computing Concepts by NPTEL ONLINE CERTIFICATION"
              certificateLink="/cc.pdf"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Courses;