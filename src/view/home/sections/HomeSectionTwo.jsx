import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
// import video from "../../../assets/bscbayvideo.mp4";
import video from "../../../assets/video/video.mp4";

const HomeSectionTwo = () => {
  return (
    <section className="bg-b-1">
      <Container fluid="xxl" className="px-0">
        <Container className="py-5 z-10">
          <Row>
            <Col>
              <ScrollAnimation
                animateIn="fadeInLeft"
                scrollableParentSelector="#scrolly-main"
              >
                <div>
                  <div className="heading-primary-2">
                    <div className="text-light"> DECENTRALIZED</div>
                    <div>PROTOCOLS & SERVICES</div>
                  </div>
                  <p className="px-0 col-lg-9">
                    <p></p>
                    Earn{" "}
                    <b style={{ color: "#D1B000" }}>
                      {" "}
                      4% USDT reflections rewards{" "}
                    </b>{" "}
                    every 4 hours automatically into your wallets.<p></p>
                    Unlike volume-based unsustainable projects, we ensure{" "}
                    <b style={{ color: "#D1B000" }}>
                      {" "}
                      Sustainable Passive Income{" "}
                    </b>
                    streams through Launchpad, DexPad and supporting tools whose
                    income directly flows into investor rewards pool. <p></p>
                    BSCBay is a blockchain{" "}
                    <b style={{ color: "#D1B000" }}> innovation hub </b> with a
                    combination of Incupad and Decentralized Launchpad. It
                    combines the previous successful instances and features of
                    DEFI and integrates them to create a new paradigm; a
                    revolution within an evolution. <p></p>
                    We will be launching services including{" "}
                    <b style={{ color: "#D1B000" }}>
                      {" "}
                      LaunchPad, DexPad,{" "}
                    </b>{" "}
                    Lockers, Token Minters, KYC, NFTs and Play to Earn games to
                    ensure the investor pools never die.
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
                animateIn="fadeInRight"
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
