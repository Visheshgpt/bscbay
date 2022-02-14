import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../../assets/next.svg";

const HomeSectionSeven = () => {
  return (
    <section className="py-3 bg-b-1 bg-color-4 text-white">
      <Container fluid="xxl">
       
          <Row className="d-flex  flex-column flex-lg-row align-items-center justify-content-between">
            <Col xs={12} lg={4}>
              <Button
                variant="outline-warning"
                href="https://github.com/solidproof/projects/blob/main/BSCBay/KYC_Certificate_BSCBay.png"
                className="customButtonOne m-auto"
              >
                KYC CERTIFICATE <Arrow />
              </Button>
            </Col>
            <Col xs={12} lg={4}>
              <div className="text-center m-3">
                <img
                  src="./assets/shield_logo.png"
                  width="120px"
                  height="120px"
                  alt="bannerImage"
                ></img>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <Button
                variant="outline-warning"
                href="https://github.com/solidproof/projects/blob/main/BSCBay/SmartContract_Audit_Solidproof_BSCBay.pdf"
                className="customButtonOne m-auto"
              >
                Audit Certificate <Arrow />
              </Button>
            </Col>
          </Row>
          {/* <div className="text-center">
            <div className="heading-primary-2 fw-normal">
              <span className="text-white-2">Are You Ready to</span> <br />{" "}
              <b>Accelerate Your Earning?</b>
            </div>
            
            <div className="px-0 col-10 col-md-4 col-lg-3 col-xxl-2 mx-auto">
              <Link to="/incupad" className="btn-1 button-1 btn-color w-100">
                <span className="ms-2 text-uppercase fw-bold text-small">
                  START NOW
                </span>
                <img
                  className="ms-2"
                  height={13}
                  src="./assets/arrow-2.png"
                  alt="arrow"
                />
              </Link>
            </div>
          </div> */}

      </Container>
    </section>
  );
};

export default HomeSectionSeven;
