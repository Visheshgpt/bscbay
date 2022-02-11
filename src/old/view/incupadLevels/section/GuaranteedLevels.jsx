import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const GuaranteedLevels = () => {
  const GuarantedlevelData = [
    {
      title: "MEMBER",
      stakingRequirement: 15000,
      poolWeight: "2x",
      allocationType: "Guaranteed",

      img: "./assets/check-levels.png",
    },
    {
      title: "CLUB",
      stakingRequirement: 24000,
      poolWeight: "3x",
      allocationType: "Guaranteed",
      img: "./assets/check-levels.png",
    },
    {
      title: "ASSOCIATE",
      stakingRequirement: 45000,
      poolWeight: "6x",
      allocationType: "Guaranteed",
      img: "./assets/check-levels.png",
    },
    {
      title: "EXECUTIVE",
      stakingRequirement: 90000,
      poolWeight: "14x",
      allocationType: "Guaranteed",
      img: "./assets/check-levels.png",
    },
    {
      title: "PARTNER",
      stakingRequirement: 150000,
      poolWeight: "22x",
      allocationType: "Guaranteed",
      img: "./assets/check-levels.png",
    },
    {
      title: "ORBIT",
      stakingRequirement: 185000,
      poolWeight: "28x",
      allocationType: "Guaranteed",
      img: "./assets/check-levels.png",
    },
  ];
  const privateGuarantedData = [
    {
      title: "BLACK",
      stakingRequirement: 15000,
      poolWeight: "2x",
      allocationType: "Guaranteed",
      img: "./assets/check-levels.png",
    },
    {
      title: "MEMBER",
      stakingRequirement: 15000,
      poolWeight: "2x",
      allocationType: "Guaranteed",
      img: "./assets/check-levels.png",
    },
  ];
  return (
    <section>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="text-center mt-5 pb-5">Guaranteed Levels</h1>
          </Col>
          {GuarantedlevelData.map((item, index) => (
            <Col lg={4} xs={12} className="mt-5">
              <div key={index} className="guaranteed-card">
                <h1>{item.title}</h1>
                <div className="guaranteed-staking">
                  <span>Staking Requirements</span>
                  <div className="d-flex flex-row aligns-item-center">
                    <span>{item.stakingRequirement}</span>
                    <span>TPAD</span>
                  </div>
                </div>
                <span>Pool Weight</span>
                <span>{item.poolWeight}</span>

                <span>Allocation Type</span>
                <div className="allocation-change">
                  <span>{item.allocationType}</span>
                  <img src={item.img} alt="check-icon" />
                </div>
              </div>
            </Col>
          ))}
          {privateGuarantedData.map((itemm, index) => (
            <Col lg={4} xs={12} className="mt-5 mb-5">
              <div key={index} className="private-guaranteed-card">
                <h1>{itemm.title}</h1>
                <div className="private-guaranteed-staking">
                  <span>Staking Requirements</span>
                  <div className="d-flex flex-row aligns-item-center">
                    <span>{itemm.stakingRequirement}</span>
                    <span>TPAD</span>
                  </div>
                </div>
                <span>Pool Weight</span>
                <span>{itemm.poolWeight}</span>

                <span>Allocation Type</span>
                <div className="allocation-change">
                  <span>{itemm.allocationType}</span>
                  <img src={itemm.img} alt="check-icon" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GuaranteedLevels;
