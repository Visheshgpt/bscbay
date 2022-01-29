import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const IncupadPoolsBanner = ({ activePool }) => {
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
          <Col lg={5} md={5} className="right-section">
            <div>
              <div className="upper-right-section">
                <span>In progress</span>
                <h3>1 BUSD = 20 CCASH </h3>
                <p>0 days | 0 hours | 41 minutes | 48 seconds</p>
              </div>
              <div className="lower-right-section">
                <h5>Total Raise</h5>
                <h4>0 BUSD</h4>
                <ProgressBar now={30} className="progress-bar-section" />
                <span>Participant : 500/Limited</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IncupadPoolsBanner;
