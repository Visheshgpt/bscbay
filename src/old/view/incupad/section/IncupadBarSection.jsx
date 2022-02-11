import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const IncupadBarSection = () => {
  return (
    <Container as="section" fluid="xxl" className="incupad-bar-section">
      <Row>
        <Col lg={12} xl={6}>
          <div className="bar-section">
            <span>About</span>
            <span>Pools</span>
            <span>Levels</span>
            <span>Staking</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IncupadBarSection;
