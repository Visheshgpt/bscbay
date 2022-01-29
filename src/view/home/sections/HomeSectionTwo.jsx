import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import video from "../../../assets/Bitcoin.mp4";

const HomeSectionTwo = () => {
  return (
    <section className="bg-b-1">
      <Container fluid="xxl" className="px-0">
        <Container className="py-5 z-10">
          <Row>
            <Col>
              <ScrollAnimation
                animateIn="bounceInLeft"
                animateOut="bounceOutLeft"
                scrollableParentSelector="#scrolly-main"
              >
                <div>
                  <div className="heading-primary-2">
                    <div className="text-light"> DECENTRALIZED</div>
                    <div>PROTOCOLS & SERVICES</div>
                  </div>
                  <p className="px-0 col-lg-9">
                    <p></p>
                    BSCBay is a blockchain innovation hub with a combination of
                    Incupad and Decentralized Launchpad complimenting Solution
                    Partner Tools coupled with Passive Income Tokenomics.<p></p>
                    BSCBAY is the next step in the evolution of DEFI. It
                    combines the previous successful instances and features of
                    DEFI and integrates them to create a new paradigm; a
                    revolution within an evolution.
                  </p>
                </div>
              </ScrollAnimation>
            </Col>
            <Col
              xs={12}
              lg={6}
              className="order-first order-lg-last mb-3 mb-lg-0"
            >
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutRight"
                scrollableParentSelector="#scrolly-main"
              >
                <div>
                  <video
                    className="d-block w-100 h-100 rounded-lg-2 cursor-pointer"
                    src={video}
                    controls
                    poster="./assets/bg-2.png"
                  />
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default HomeSectionTwo;
