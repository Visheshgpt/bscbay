import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactComponent as Arrow } from "../../../assets/next.svg";

const IncupadBannerSection = () => {
  const upcomingData = [
    { title: "Apply as a project", img: "./assets/is-1.svg" },
    { title: "Buy on Pancakeswap", img: "./assets/is-2.svg" },
    // { title: "Buy on Kucoin", img: "./assets/is-3.svg" },
    // { title: "Buy on Gate.io", img: "./assets/is-4.svg" },
  ];

  return (
    <Container as="section" fluid="xxl" className="incupad-banner-section">
      <Row>
        <Col lg={8} xl={6}>
          <h1>
            Enter The <span>Gateway Of Blockchain</span> Innovation
          </h1>
          {/* <p>
            BSCBAY is the next step in the evolution of DEFI. It combines the
            previous successful instances and features of DEFI and integrates
            them to create a new paradigm.<p></p> A Revolution Within An
            Evolution.
          </p> */}
          {/* <Button variant="outline-warning" href="#" className="customButton">
            View more <Arrow />
          </Button> */}
          <div className="incupad-card">
          {upcomingData.map((item, index) => (
            <div key={index} className="d-flex justify-content-center ">
              <div className="incupad-upcoming-card">
                <a
                  href="https://my.forms.app/crptoprojects/bscbaylaunch"
                  target="_blank"
                >
                  <img src={item.img} alt={item.title} />
                </a>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
          </div>
        </Col>
       
      </Row>
    </Container>
  );
};

export default IncupadBannerSection;
