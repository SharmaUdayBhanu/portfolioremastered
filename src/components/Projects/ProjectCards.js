import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <div style={{ 
        height: "250px", // Increased from 200px
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0",
        backgroundColor: "transparent"
      }}>
        <img 
          src={props.imgPath} 
          alt="card-img" 
          style={{ 
            height: "100%",
            width: "100%",
            objectFit: "cover", // Changed from contain to cover
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease" // Added hover effect
          }} 
          className="project-card-img"
        />
      </div>
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>
        <div>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;