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
      title: "CyberTrade",
      tag: "First Phase",
      img: "./assets/is-card-1.svg",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      time: "48 Hours",
      tokenDistribution: "",
      tokenPrice: 456,
      minAllocation: 0.01,
      maxAllocation: 2644.09,
      symbol: "CCASH",
      decimals: 18,
      allocationType: "BUSD",
      totalSupply: 380000,
      accessType: "Private",
      about: ["hjvdlhvgbdfhvb", "ujdhvidbsv"],
      address: "TBA",
    },
    {
      title: "CyberTrade 1",
      tag: "First Phase",
      img: "./assets/is-card-1.svg",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      time: "48 Hours",
      tokenDistribution: "",
      tokenPrice: 456,
      minAllocation: 0.01,
      maxAllocation: 2644.09,
      symbol: "CCASH",
      decimals: 18,
      allocationType: "BUSD",
      totalSupply: 380000,
      accessType: "Private",
      about: ["hjvdlhvgbdfhvb", "ujdhvidbsv"],
      address: "TBA",
    },
    {
      title: "CyberTrade 2",
      tag: "First Phase",
      img: "./assets/is-card-1.svg",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      time: "48 Hours",
      tokenDistribution: "",
      tokenPrice: 456,
      minAllocation: 0.01,
      maxAllocation: 2644.09,
      symbol: "CCASH",
      decimals: 18,
      allocationType: "BUSD",
      totalSupply: 380000,
      accessType: "Private",
      about: ["hjvdlhvgbdfhvb", "ujdhvidbsv"],
      address: "TBA",
    },
    {
      title: "CyberTrade 3",
      tag: "First Phase",
      img: "./assets/is-card-1.svg",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      time: "48 Hours",
      tokenDistribution: "",
      tokenPrice: 456,
      minAllocation: 0.01,
      maxAllocation: 2644.09,
      symbol: "CCASH",
      decimals: 18,
      allocationType: "BUSD",
      totalSupply: 380000,
      accessType: "Private",
      about: ["hjvdlhvgbdfhvb", "ujdhvidbsv"],
      address: "TBA",
    },
    {
      title: "CyberTrade 4",
      tag: "First Phase",
      img: "./assets/is-card-1.svg",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      time: "48 Hours",
      tokenDistribution: "",
      tokenPrice: 456,
      minAllocation: 0.01,
      maxAllocation: 2644.09,
      symbol: "CCASH",
      decimals: 18,
      allocationType: "BUSD",
      totalSupply: 380000,
      accessType: "Private",
      about: ["hjvdlhvgbdfhvb", "ujdhvidbsv"],
      address: "TBA",
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
                    src="./assets/is-time-1.svg"
                    alt="time icon"
                    width="22"
                    height="22"
                  />
                  <span>{item.time}</span>
                </div>
                <span className="card-time-status">remaining</span>

                <div className="incupad-upcoming-pool-card-lower">
                  <div className="min-allocation">
                    <span className="lower-card-name">Min Allocation</span>
                    <span>{item.minAllocation}</span>
                  </div>
                  <div className="min-allocation">
                    <span className="lower-card-name">Max Allocation</span>
                    <span>{item.maxAllocation}</span>
                  </div>
                  <div className="min-allocation">
                    <span className="lower-card-name">Access Type</span>
                    <span>{item.accessType}</span>
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
