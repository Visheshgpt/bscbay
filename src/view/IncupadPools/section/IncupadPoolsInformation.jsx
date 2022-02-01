import { Container, Row, Col } from "react-bootstrap";

const IncupadPoolsInformation = ({ activePool }) => {
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
                <span>TOTAL SUPPLY</span>
                <span>{activePool.totalSupply}</span>
              </div>
              <div>
                <span>ADDRESS</span>
                <span>{activePool.inputTokenaddress}</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* About The project Section */}
        <Row className="mt-5 pt-5">
          <Col xs={12} lg={6} className="about-section">
            <h2>About the Project</h2>

            {activePool.about.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </Col>

          <Col xs={6} lg={6}>
            <h2>Project Clip</h2>

            <div className="videoContainer mt-2">
              <iframe
                className="d-block rounded-lg-2 cursor-pointer incupad-pool-video responsive-iframe"
                src="https://www.youtube.com/"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </Col>
          <Col xs={12}></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IncupadPoolsInformation;
