import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutKeyFeartures = () => {
  return (
    <section className="incupad-about-section">
      <Container >
        <Row className="justify-content-center">
          <Col lg={12} xs={12}>
            <div className="about-section-key-feature">
              <h1>
                <span className="text-primary">Bsc</span>Bay Key Features
              </h1>
              <h5>
                Launching hand-picked high-quality projects on the Blockchain
              </h5>
            </div>
          </Col>
          <Col lg={3}>
            <div className="key-features">
              <img src="./assets/is-1.svg" alt="demo-icon" />
              <span>Fair And Transparent</span>
            </div>
          </Col>
          <Col lg={3}>
            <div className="key-features">
              <img src="./assets/is-1.svg" alt="demo-icon" />
              <span>Rug-Proof Mechanisms</span>
            </div>
          </Col>
          <Col lg={3}>
            <div className="key-features">
              <img src="./assets/is-1.svg" alt="demo-icon" />
              <span>Guaranteed Allocations</span>
            </div>
          </Col>
          <Col lg={3}>
            <div className="key-features">
              <img src="./assets/is-1.svg" alt="demo-icon" />
              <span>High-Quality Projects</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutKeyFeartures;
