import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaCertificate } from "react-icons/fa";

function CertificateCard(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <div style={{ 
        height: "250px",
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
            objectFit: "cover",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease"
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
        <Button
  variant="primary"
  href={props.certificateLink}
  target="_blank"
  rel="noopener noreferrer"
>
  <FaCertificate /> &nbsp;
  View Certificate
</Button>

        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;