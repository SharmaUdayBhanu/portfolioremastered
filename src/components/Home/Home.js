import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./Home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        
        <svg className="filter-svg" style={{ position: 'absolute' }}>
          <filter id="glow-effect">
            <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken"/>
            <feGaussianBlur stdDeviation="6" result="blurred"/>
            <feFlood floodColor="rgba(255, 255, 255, 0.4)" result="glow-color"/>
            <feComposite in="glow-color" in2="blurred" operator="in" result="soft-glowing"/>
            <feMerge>
              <feMergeNode in="soft-glowing"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </svg>

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* Your existing header content */}
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BHANU UDAY SHARMA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="image-column">
  <div className="image-wrapper">
    <div className="oval-frame">
      <div className="glossy-border"></div>
      <img
        src={homeLogo}
        alt="home pic"
        className="body-glow-image"
        style={{ transform: 'translateY(5%)' }} /* Fine vertical adjustment */
      />
    </div>
  </div>
</Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;