import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactComponent as Arrow } from "../../../assets/next.svg";

const IncupadBannerSection = () => {
  return (
    <Container as="section" fluid="xxl" className="incupad-banner-section">
      <Row>
        <Col lg={8} xl={6} >
          <h1>
            Enter The <span>Gateway Of Blockchain</span> Gaming
          </h1>
          <p>
            Bscbay is an Animated Combat NFT Trading Card Game currently
            playable cross platform from Browser, Google Play & Steam
          </p>
          <Button variant="outline-warning" href="#" className="customButton">
            View more <Arrow />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default IncupadBannerSection;
