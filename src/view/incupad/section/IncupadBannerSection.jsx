import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactComponent as Arrow } from "../../../assets/next.svg";

const IncupadBannerSection = () => {
  return (
    <Container as="section" fluid="xxl" className="incupad-banner-section">
      <Row>
        <Col lg={8} xl={6} >
          <h1>
            Enter The <span>Gateway Of Blockchain</span> Innovation
          </h1>
          <p>
          BSCBAY is the next step in the evolution of DEFI. It combines the previous successful instances and features of DEFI 
          and integrates them to create a new paradigm.<p></p> A Revolution Within An Evolution.
          </p>
          {/* <Button variant="outline-warning" href="#" className="customButton">
            View more <Arrow />
          </Button> */}
        </Col>
      </Row>
    </Container>
  );
};

export default IncupadBannerSection;
