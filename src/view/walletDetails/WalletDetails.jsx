import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const WalletDetails = ({ status }) => {
  return (
    <>
      <div className="ongoing-section-backDrop"></div>
      <Container as="section" className="ongoing-section">
        <Row className="d-flex flex-column justify-content-center">
          <Col xs={12} lg={5} className="ongoing-upper-card">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row align-items-center  justify-content-center ongoing-upper-card-left">
                <span>BNB</span>
                <span style={{ textTransform: "capitalize" }}>{status}</span>
              </div>
              <span className="ongoing-upper-card-right">
                1 BUSD = 100 BSCBay
              </span>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <div className="ongoing-lower-card text-white">
                <div className="d-flex justify-content-center">
                  <span className="text-white">
                    {status !== "closed" ? (
                      status === "ongoing" ? (
                        "End in : 0 Days 10 Hours 20 Mins 30 Seconds"
                      ) : (
                        "Start in : 0 Days 10 Hours 20 Mins 30 Seconds"
                      )
                    ) : (
                      <div className="d-flex flex-column justify-content-center align-items-center  text-white">
                        <span>Closed</span>
                        <span>Total Raised: 500 BNB</span>
                      </div>
                    )}
                  </span>
                </div>
                <div>
                  {status !== "closed" ? (
                    status === "ongoing" ? (
                      <ProgressBar
                        now={5}
                        className="pro-bar-section"
                        label={`${5}%`}
                      />
                    ) : (
                      <ProgressBar
                        now={30}
                        className="pro-bar-section"
                        label={`${30}%`}
                      />
                    )
                  ) : (
                    <ProgressBar
                      now={100}
                      className="pro-bar-section"
                      label={`${100}%`}
                    />
                  )}
                </div>
                <div>
                  {status !== "closed" ? (
                    status === "upcomming" ? (
                      <div className="d-flex flex-row align-items-center justify-content-between ongoing-upper-last-section ">
                        <span>Swap Progress</span>
                        <span>Total Raised :150/500 BNB</span>
                        <span>Participants : 240</span>
                      </div>
                    ) : (
                      <div className="d-flex flex-row align-items-center justify-content-between ongoing-upper-last-section ">
                        <span>Swap Progress</span>
                        <span>Participants : TBA</span>
                      </div>
                    )
                  ) : (
                    <div className="d-flex flex-row align-items-center justify-content-between ongoing-upper-last-section ">
                      <span>Swap Progress</span>
                      <span>Participants : 3240</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={5} className="ongoing-lower-card mt-5">
            {status !== "closed" ? (
              <div className="d-flex flex-column justify-content-between">
                <div className="d-flex flex-column text-white ">
                  <span className="pb-2">Wallet Address:0X12….12Ab1</span>
                  <span className="pb-2">BSCB Balance: 100,000 BSCB</span>
                </div>
                <div className="d-flex flex-row justify-content-between text-white">
                  <span>
                    {" "}
                    Current Tier:{" "}
                    <span className="text-warning ms-1">GOLD(i)</span>
                  </span>
                  <span> BNB Balance: 100 BNB</span>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column text-white ">
                  <span className="pb-2">Wallet Address:0X12….12Ab1</span>
                  <span className="pb-2">BSCB Balance: 100,000 BSCB</span>
                  <span>
                    Current Tier:
                    <span className="text-warning ms-1">GOLD(i)</span>
                  </span>
                </div>
                <div className="d-flex flex-column justify-content-between text-white">
                  <span> BNB Balance: 100 BNB</span>
                  <span>Your Participation: 2 BNB</span>
                  <span className="claim-section">Claim</span>
                </div>
              </div>
            )}

            <div className="ongoing-lower-card-last-section">
              <span>Wallet Eligible to Participate: Yes / No</span>
              <span>Check Eligibility Criterea</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WalletDetails;
