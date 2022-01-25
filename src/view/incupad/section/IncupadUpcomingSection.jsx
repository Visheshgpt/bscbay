import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const IncupadUpcomingSection = () => {
  const upcomingData = [
    { title: "Apply as a project", img: "./assets/is-1.svg" },
    { title: "Buy on Pancakeswap", img: "./assets/is-2.svg" },
    { title: "Buy on Kucoin", img: "./assets/is-3.svg" },
    { title: "Buy on Gate.io", img: "./assets/is-4.svg" },
  ];
  const upcomingPoolData = [
    {
      tag: "First Phase",
      img: "./assets/is-card-1.svg",
      title: "CyberTrade",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      timeImg: "./assets/is-time-1.svg",
      time: "48 Hours",
      timeStatus: "remaining",
      allocation: "0.01",
      maximun: "TBA",
      access: "Private",
    },
    {
      tag: "First Phase",
      img: "./assets/is-card-1.svg",
      title: "CyberTrade",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      timeImg: "./assets/is-time-1.svg",
      time: "48 Hours",
      timeStatus: "remaining",
      allocation: "0.01",
      maximun: "TBA",
      access: "Private",
    },
    {
      tag: "First Phase",
      img: "./assets/is-card-1.svg",
      title: "CyberTrade",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      timeImg: "./assets/is-time-1.svg",
      time: "48 Hours",
      timeStatus: "remaining",
      allocation: "0.01",
      maximun: "TBA",
      access: "Private",
    },
    {
      tag: "First Phase",
      img: "./assets/is-card-1.svg",
      title: "CyberTrade",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      timeImg: "./assets/is-time-1.svg",
      time: "48 Hours",
      timeStatus: "remaining",
      allocation: "0.01",
      maximun: "TBA",
      access: "Private",
    },
    {
      tag: "First Phase",
      img: "./assets/is-card-1.svg",
      title: "CyberTrade",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      timeImg: "./assets/is-time-1.svg",
      time: "48 Hours",
      timeStatus: "remaining",
      allocation: "0.01",
      maximun: "TBA",
      access: "Private",
    },
  ];
  return (
    <Container as="section" fluid="xxl" className="incupad-upcoming-section">
      <Container>
        <Row>
          {upcomingData.map((item, index) => (
            <Col xs={6} lg={3} key={index}>
              <div className="incupad-upcoming-card">
                <img src={item.img} alt={item.title} />
                <span>{item.title}</span>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12} className="p-5 mt-5">
            <h2 className="text-white text-center">Upcomming Pools</h2>
          </Col>
          {upcomingPoolData.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="incupad-upcoming-pool-card">
                <span className="card-tag">{item.tag}</span>
                <img src={item.img} alt={item.title} />
                <span className="card-title">{item.title}</span>
                <p className="card-description">{item.description}</p>
                <div className="card-time">
                  <img
                    src={item.timeImg}
                    alt="time icon"
                    width="22"
                    height="22"
                  />
                  <span>{item.time}</span>
                </div>
                <span className="card-time-status">{item.timeStatus}</span>

                <div className="incupad-upcoming-pool-card-lower">
                  <div className="min-allocation">
                    <span className="lower-card-name">Min Allocation</span>
                    <span>{item.allocation}</span>
                  </div>
                  <div className="min-allocation">
                    <span className="lower-card-name">Maximum</span>
                    <span>{item.maximun}</span>
                  </div>
                  <div className="min-allocation">
                    <span className="lower-card-name">Access</span>
                    <span>{item.access}</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default IncupadUpcomingSection;
