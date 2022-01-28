import { Container, Row, Col } from "react-bootstrap";

const UpcommingPoolsInformation = ({ activePool }) => {
  return (
    <Container as="section" fluid="xxl" className="pool-information-section">
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Pools Information</h2>
          </Col>
          <Col xs={12} lg={6}>
            <div className="pool-information-card">
              <div>
                <span>TOKEN DISTRIBUTION</span>
                <span>{activePool.tokenDistribution}</span>
              </div>
              <div>
                <span>MIN. ALLOCATION</span>
                <span>{activePool.minAllocation}</span>
              </div>
              <div>
                <span>MAX. ALLOCATION</span>
                <span>{activePool.maxAllocation}</span>
              </div>
              <div>
                <span>TOKEN PRICE</span>
                <span>{activePool.tokenPrice}</span>
              </div>
              <div>
                <span>ACCESS TYPE</span>
                <span>{activePool.accessType}</span>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="pool-information-card">
              <div>
                <span>NAME</span>
                <span>{activePool.title}</span>
              </div>
              <div>
                <span>SYMBOL</span>
                <span>{activePool.symbol}</span>
              </div>
              <div>
                <span>DECIMALS</span>
                <span>{activePool.decimals}</span>
              </div>
              <div>
                <span>ADDRESS</span>
                <span>{activePool.address}</span>
              </div>
              <div>
                <span>TOTAL SUPPLY</span>
                <span>{activePool.totalSupply}</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* About The project Section */}
        <Row className="about-section">
          <Col xs={12}>
            <h2>About the Project</h2>
          </Col>
          <Col xs={12}>
            {activePool.about.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default UpcommingPoolsInformation;
