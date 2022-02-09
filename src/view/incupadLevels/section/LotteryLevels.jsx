import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const LotteryLevels = () => {
  const levelData = [
    {
      title: "CHANCE",
      stakingRequirement: "3000",
      poolWeight: "1x",
      allocationType: "Lottery (20%)",
    },
    {
      title: "PROSPECT",
      stakingRequirement: "6000",
      poolWeight: "2x",
      allocationType: "Lottery (30%)",
    },
    {
      title: "AFFILIATE",
      stakingRequirement: "10000",
      poolWeight: "2x",
      allocationType: "Lottery (50%)",
    },
  ];

  return (
    <section>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="text-center mt-5 pb-5">Lottery Levels</h1>
          </Col>
          {levelData.map((item, index) => (
            <Col lg={4} xs={12} className="mt-5">
              <div key={index} className="lottery-card">
                <h1>{item.title}</h1>
                <div className="lottery-staking">
                  <span>Staking Requirements</span>
                  <div className="d-flex flex-row aligns-item-center">
                  <span>{item.stakingRequirement}</span>
                  <span>TPAD</span>
                  </div>
                </div>
                <span >Pool Weight</span>
                <span>{item.poolWeight}</span>

                <span>Allocation Type</span>
                <span>{item.allocationType}</span>
              </div>
            </Col>
          ))}
          <div className="mb-5 "></div>
        </Row>
      </Container>
    </section>
  );
};

export default LotteryLevels;
