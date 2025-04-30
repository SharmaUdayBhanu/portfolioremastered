import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { motion } from "framer-motion";
import "./Education.css"; // Custom styles for the timeline

const educationData = [
  {
    title: "Matriculation",
    school: "Dayanand Model School, Kartarpur",
    result: "96%",
  },
  {
    title: "Intermediate",
    school: "Dayanand Model Senior Secondary School, Jalandhar",
    result: "90.6%",
  },
  {
    title: "B.Tech (Current 3rd Year)",
    school: "Lovely Professional University",
    result: "CGPA: 7.34",
  },
];

function Education() {
  return (
    <section>
      <Container fluid className="home-section" id="education">
        <Particle />
        <Container className="home-content">
          <h1 className="heading" style={{ textAlign: "center", paddingBottom: "30px" }}>
            <strong className="main-name">EDUCATION</strong>
          </h1>
          <Row className="timeline">
            <Col md={12}>
              {educationData.map((edu, index) => (
                <motion.div
                  className="timeline-item"
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>{edu.title}</h3>
                    <p>{edu.school}</p>
                    <p>{edu.result}</p>
                  </div>
                </motion.div>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Education;
