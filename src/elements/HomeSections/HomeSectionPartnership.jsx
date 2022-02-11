import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

const HomeSectionPartnership = () => {
  const imagesArr = [{ key: 0 }, { key: 1 }, { key: 2 }];

  return (
    <section className="py-5 bg-color-homepage-section-one text-white">
      <Container fluid="xxl">
        <Row>
          <Col lg={12}>
            <div className="border-secondary py-4">
              <ScrollAnimation
                animateIn="bounceInLeft"
                animateOut="bounceOutRight"
                scrollableParentSelector="#scrolly-main"
              >
                <Row
                  className="justify-content-center align-items-center"
                  style={{ gap: 30 }}
                >
                  <h1 className="text-center">Partnership</h1>
                  {imagesArr.map((data, i) => (
                    <div style={{ width: 110 }} key={i}>
                      <img
                        className="w-100"
                        src={`/assets/pp-icon-${i}.png`}
                        alt={data.key}
                      />
                    </div>
                  ))}
                </Row>
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSectionPartnership;
