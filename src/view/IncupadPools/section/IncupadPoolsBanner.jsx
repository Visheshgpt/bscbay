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
            <a href={activePool.TwitterLink} target="_blank">  <img src="../assets/twiter.svg" alt="twiter" /> </a>
              {/* <img src="../assets/telegram.png" alt="facebook" /> */}
              {/* <img src="../assets/linked-in.svg" alt="linkedin" /> */}
              {/* <img src="../assets/instagarm.svg" alt="instagram" /> */}
            </div>
          </Col>
          <Col lg={5} md={5}>
            <div className="right-section">
              <div className="upper-right-section">
                <div className="button-section">
                <Button className="upper-right-btn-one">BNB</Button>
                <Button className="upper-right-btn-two">Access Type : Public</Button>
                </div>
                <span>Upcoming</span>
                <h3>1 BNB = TBA BSCB </h3>
                <b style={{ color: 'white' }}>Starts In:</b>
                <p>TBA</p>
              </div>
              <div className="lower-right-section">
                <h5>Total Raise</h5>
                <h4>0 BNB</h4>
                <ProgressBar
                  now={0}
                  className="progress-bar-section"
                  label={`${0}%`}
                />
                <span>Participant : TBA</span>
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
