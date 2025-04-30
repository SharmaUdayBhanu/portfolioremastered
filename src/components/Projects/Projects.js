import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import school from "../../Assets/Projects/school.png";
import gym from "../../Assets/Projects/gym.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import ai from "../../Assets/Projects/image-enhancer.png";
import node from "../../Assets/Projects/node.png";

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
              imgPath={ai}
              isBlog={false}
              title="AI IMAGE ENHANCER"
              description=" Built with React.js and PicWish API to automatically enhance image quality using AI-based upscaling and noise reduction. Provides a simple interface for users to upload and instantly improve low-resolution or blurry images."
              ghLink="https://github.com/SharmaUdayBhanu/ai-image-enhancer-using-api"
              demoLink="https://ai-image-enhancer-using-api.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="D.M.S. School Website"
              description=" A responsive and informative school website built with HTML, CSS and Javascript to showcase Dayanand Model School's academics, events, and admissions."
              ghLink="https://github.com/SharmaUdayBhanu/school-website"
              demoLink="https://dmskartarpur.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym Management System"
              description="A PHP & MySQL-based web app with an admin portal to manage gym fees, trainers, receptionists, and other staff information efficiently."
              ghLink="https://github.com/SharmaUdayBhanu/gym-management-system"
              demoLink="https://sharmaudaybhanu.github.io/gym-management-system/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={node}
              isBlog={false}
              title="Clearing the Clutter with Node.JS"
              description=" A Node.js script that organizes files by automatically sorting them into folders (e.g., PDFs, images, docs), keeping directories clean and manageable."
              ghLink="https://github.com/SharmaUdayBhanu/Clearing-the-clutter-with-Node.js-miniproject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="Blogging platform"
              description=" A CRUD-based web app where users can create, update, upload, and delete blog posts with a simple and intuitive interface."
              ghLink="https://github.com/SharmaUdayBhanu/basic-bloging-platform"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;