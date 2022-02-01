import { useState } from "react";
import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap";
import LaunchStepThree from "../../launch-steps/LaunchStepThree";

const IncupadPoolsBanner = ({ activePool }) => {
  const [showConnect, setShowConnect] = useState(false);

  const onHideHandler = () => {
    setShowConnect(false);
  };

  return (
    <Container as="section" fluid="xxl" className="upcoming-pool-banner">
      <Container>
        <Row>
          <Col lg={7} md={7} className="left-section">
            <img src={`../../${activePool.img}`} alt={activePool.title} />
            <h2>{activePool.title}</h2>
            <p>{activePool.description}</p>
            <div>
              <img src="../assets/twiter.svg" alt="twiter" />
              <img src="../assets/facebook.svg" alt="facebook" />
              <img src="../assets/linked-in.svg" alt="linkedin" />
              <img src="../assets/instagarm.svg" alt="instagram" />
            </div>
          </Col>
          <Col lg={5} md={5}>
            <div className="right-section">
              <div className="upper-right-section">
                <div className="button-section">
                <Button className="upper-right-btn-one">BNB</Button>
                <Button className="upper-right-btn-two">Access Type : private</Button>
                </div>
                <span>In progress</span>
                <h3>1 BUSD = 20 CCASH </h3>
                <p>0 days | 0 hours | 41 minutes | 48 seconds</p>
              </div>
              <div className="lower-right-section">
                <h5>Total Raise</h5>
                <h4>0 BUSD</h4>
                <ProgressBar
                  now={30}
                  className="progress-bar-section"
                  label={`${30}%`}
                />
                <span>Participant : 500/Limited</span>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                className="btn connect-btn"
                onClick={() => setShowConnect(true)}
              >
                Connect To Wallet
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <LaunchStepThree show={showConnect} onHide={onHideHandler} />
    </Container>
  );
};

export default IncupadPoolsBanner;
