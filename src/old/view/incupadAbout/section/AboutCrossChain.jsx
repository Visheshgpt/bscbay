import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutCrossChain = () => {
  return (
    <section className="about-section-cross-chain">
      <Container>
        <Row>
          <Col lg={12}>
            <div>
              <h1>Cross-Chain Integration</h1>
              <h5>
                This integration allows projects to launch their IDO/IGO
                simultaneously on both Solana and Binance Smart Chain for
                example.
              </h5>
            </div>
            <div className=" cross-img-section mb-5 pb-5">
              <img src="./assets/avalanche.svg" alt="avalanche"/>
              <img src="./assets/binance_logo.png" alt="binance_logo"/>
              <img src="./assets/cardano.png" alt="cardano"/>
              <img src="./assets/ethereum_logo.png" alt="ethereum_logo"/>
              <img src="./assets/polygon_logo.png" alt="polygon_logo"/>
              <img src="./assets/solana_logo.svg" alt="solana_logo"/>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default AboutCrossChain;
