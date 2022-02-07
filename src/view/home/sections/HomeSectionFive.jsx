import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

const HomeSectionFive = () => {
  const dataArr = [
    { number: "15", title: "Years of Experience" },
    { number: "10K", title: "Business Partners" },
    { number: "25M", title: "Products Installed" },
    { number: "22", title: "Countries World Wide" },
    { number: "5", title: "Industry Awards" },
  ];

  return (
    <section className="bg-color-homepage-section-five text-white py-5">
      <Container fluid="xxl" className="px-0 position-relative">
        <img
          className="position-absolute end-0"
          src="./assets/bg-8.png"
          alt=".."
        />
        <Container className="pt-lg-5">
          <Row className="border-bottom border-secondary pb-5">
            <Col>
              <ScrollAnimation
                animateIn="bounceInLeft"
                animateOut="bounceOutLeft"
                scrollableParentSelector="#scrolly-main"
                
              >
                <div className="position-relative">
                  <div className="bg-testing-2" />
                  <img
                    className="d-block w-auto-sm-100"
                    src="./assets/bc-image-1.png"
                    alt=".."
                  />
                </div>
              </ScrollAnimation>
            </Col>
            <Col lg={6} className="py-4 py-lg-0">
              <ScrollAnimation
                animateIn="fadeInRight"
                // animateOut="bounceOutRight"
                scrollableParentSelector="#scrolly-main"
              >
                <div>
                  <div className="heading-primary-2 mb-2">
                    The <span className="text-primary">BSC</span> Ecosystem
                  </div>
                  <p className="mb-0 text-white-2">
                    <ul className="nav flex-column">
                      <li className="py-2">
                        <img
                          className="pe-3"
                          height={10}
                          src="./assets/check.svg"
                          alt=".."
                        />
                        <span>
                          We Provide a{" "}
                          <b>plethora of tools for BSC Ecosystem</b> enabling
                          Investors and Projects Owners power to use the BSC
                          network to its fullest
                        </span>
                      </li>
                      <li className="py-2">
                        <img
                          className="pe-3"
                          height={10}
                          src="./assets/check.svg"
                          alt=".."
                        />
                        <span>
                          Our contracts are built on technology that{" "}
                          <b>ensures each investor is incentivized</b> on every
                          transaction, trade, or use of service.
                        </span>
                      </li>
                      <li className="py-2">
                        <img
                          className="pe-3"
                          height={10}
                          src="./assets/check.svg"
                          alt=".."
                        />
                        <span>
                          These{" "}
                          <b>Rewards are distributed in terms of $USDT,</b> sent
                          automatically directly to your wallet.
                        </span>
                      </li>
                      <li className="py-2">
                        <img
                          className="pe-3"
                          height={10}
                          src="./assets/check.svg"
                          alt=".."
                        />
                        <span>
                          The project owners who avail of our services{" "}
                          <b>get a wide array of trusted tools</b> to use and
                          open gates to a vast array of investors.
                        </span>
                      </li>
                      <li className="py-2">
                        <img
                          className="pe-3"
                          height={10}
                          src="./assets/check.svg"
                          alt=".."
                        />
                        <span>
                          The Trustless - DYOS technology enables{" "}
                          <b>contactless transactions across the platform</b>{" "}
                          building additional trust in the BSCBay Ecosystem
                        </span>
                      </li>
                    </ul>
                  </p>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
          <ScrollAnimation
            animateIn="fadeInLeft"
            // animateOut="bounceOutRight"
            scrollableParentSelector="#scrolly-main"
          >
            {/* <div className='py-5 my-lg-5 text-center'>
              <div className='heading-secondary mb-4'>
                We Take Pride in Our Numbers
              </div>
              <Row className='justify-content-center' style={{ gap: 15 }}>
                {dataArr.map((data) => (
                  <div className='box-3 border border-secondary'>
                    <span className='text-number-1 text-uppercase'>
                      {data.number}
                    </span>
                    <span className='text-small text-white-3'>
                      {data.title}
                    </span>
                  </div>
                ))}
              </Row>
            </div> */}
          </ScrollAnimation>
          {/* <div className="border-top border-bottom border-secondary py-4">
            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutRight"
              scrollableParentSelector="#scrolly-main"
            >
              <Row
                className="justify-content-center align-items-center"
                style={{ gap: 30 }}
              >
                {imagesArr.map((data, i) => (
                  <div style={{ width: 90 }} key={i}>
                    <img
                      className="w-100"
                      src={`/assets/bb-icon-${i}.svg`}
                      alt={data.key}
                    />
                  </div>
                ))}
              </Row>
            </ScrollAnimation>
          </div> */}
        </Container>
      </Container>
    </section>
  );
};

export default HomeSectionFive;
