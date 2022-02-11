import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function AboutCrossChain() {
  return (
    <section className='about_crosschain py-3'>
      <Container>
        <Row>
          <Col lg={12}>
            <div className='mb-5'>
              <h1>Cross-Chain Integration</h1>
              <h6>
                This integration allows projects to launch their IDO/IGO
                simultaneously on both Solana and Binance Smart Chain for
                example.
              </h6>
            </div>
            <div className=' cross-img-section mb-5 pb-5'>
              <img src='../../../../assets/avalanche.svg' alt='avalanche' />
              <img
                src='../../../../assets/binance_logo.png'
                alt='binance_logo'
              />
              <img src='../../../../assets/cardano.png' alt='cardano' />
              <img
                src='../../../../assets/ethereum_logo.png'
                alt='ethereum_logo'
              />
              <img
                src='../../../../assets/polygon_logo.png'
                alt='polygon_logo'
              />
              <img src='../../../../assets/solana_logo.svg' alt='solana_logo' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutCrossChain;
