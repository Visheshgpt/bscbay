import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const IncupadCompleteSection = () => {
  const completedPoolData = [
    {
      tag: "Completed",
      img: "./assets/is-comp-1.svg",
      title: "SYN CITY",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      timeImg: "./assets/is-time-1.svg",
      rise1: "189999.44 BUSD",
      rise2: "1 BUSD = 50 SYNR",
      maximun: "1713.02 BUSD",
      maxPraticipate: "4339",
      access: "Public",
      synr: "9499971.85/9500000",
    },
    {
      tag: "Completed",
      img: "./assets/is-comp-1.svg",
      title: "SYN CITY",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      timeImg: "./assets/is-time-1.svg",
      rise1: "189999.44 BUSD",
      rise2: "1 BUSD = 50 SYNR",
      maximun: "1713.02 BUSD",
      maxPraticipate: "4339",
      access: "Public",
      synr: "9499971.85/9500000",
    },
    {
      tag: "Completed",
      img: "./assets/is-comp-1.svg",
      title: "SYN CITY",
      description:
        " CyberTrade is an upcoming open-world MMO RPG game built on Binance Smart Chain.",
      timeImg: "./assets/is-time-1.svg",
      rise1: "189999.44 BUSD",
      rise2: "1 BUSD = 50 SYNR",
      maximun: "1713.02 BUSD",
      maxPraticipate: "4339",
      access: "Public",
      synr: "9499971.85/9500000",
    },
  ];

  return (
    <Container as="section" fluid="xxl" className="incupad-completed-section ">
      <Container>
        <Row>
          <Col xs={12} className="p-5 mt-5">
            <h2 className="text-white text-center">Completed Pools</h2>
          </Col>
          {completedPoolData.map((item, index) => (
            <Col md={6} lg={6} key={index}>
              <div className="incupad-completed-pool-card">
                <span className="card-tag">{item.tag}</span>
                <img src={item.img} alt={item.title} />
                <span className="card-title">{item.title}</span>
                <p className="card-description">{item.description}</p>
                <div className="incupad-completed-pool-card-lower">
                  <div className="lower-section">
                    <span className="lower-card-name">Total Raise</span>
                    <span>{item.rise1}</span>
                  </div>
                  <div className="lower-section">
                    <span className="lower-card-name">Total Raise</span>
                    <span>{item.rise2}</span>
                  </div>
                  <div className="lower-section">
                    <span className="lower-card-name">Maximum</span>
                    <span>{item.maximun}</span>
                  </div>
                  <div className="lower-section">
                    <span className="lower-card-name">Max Participants</span>
                    <span>{item.maxPraticipate}</span>
                  </div>
                  <div className="lower-section">
                    <span className="lower-card-name">Access</span>
                    <span>{item.access}</span>
                  </div>
                  <div className="lower-section">
                    <span className="lower-card-name">SYNR</span>
                    <span>{item.synr}</span>
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

export default IncupadCompleteSection;
