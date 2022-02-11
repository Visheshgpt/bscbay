import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const AboutPartner = () => {
  return (
    <section className="py-5 bg-color-homepage-section-one text-white">
      <Container fluid="xxl">
        <Row>
          <Col lg={12} className="about-partner-section">
            <div className="border-secondary py-3">
              <h1 className="text-center pb-3">Partners</h1>
              <div className=" partner-img-section">
                <img src="./assets/pp-icon-2.png" />
                <img src="./assets/pp-icon-1.png" />
                <img src="./assets/pp-icon-0.png" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPartner;
