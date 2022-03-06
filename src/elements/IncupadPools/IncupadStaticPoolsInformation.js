import { Col, Container, Row } from 'react-bootstrap';

import video from '../../assets/video/metatags.mp4';

function IncupadStaticPoolsInformation({ activePool }) {
  const {
    saleDate,
    minAllocation,
    maxAllocation,
    tokenPrice,
    accessType,
    title,
    symbol,
    decimals,
    totalSupply,
    outputTokenaddress,
    videolink,
    youtube,
    investorVestation,
  } = activePool;
  return (
    <Container
      as='section'
      fluid='xxl'
      className='pool-information-section'
      id='poolsinformation'>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Pool Information</h2>
          </Col>
          <Col xs={12} lg={6}>
            <div className='pool-information-card'>
              <div>
                <span>SALE DATE</span>
                <span>{saleDate}</span>
              </div>
              <div>
                <span>MIN. ALLOCATION</span>
                <span>{minAllocation} BNB </span>
              </div>
              <div>
                <span>MAX. ALLOCATION</span>
                <span>{maxAllocation} BNB</span>
              </div>
              <div>
                <span>TOKEN PRICE</span>
                <span>{tokenPrice} BNB</span>
              </div>
              <div>
                <span>ACCESS TYPE</span>
                <span>{accessType}</span>
              </div>
              <div>
                <span>ABc</span>
                <span>Abc</span>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className='pool-information-card'>
              <div>
                <span>NAME</span>
                <span>{title}</span>
              </div>
              <div>
                <span>SYMBOL</span>
                <span>{symbol}</span>
              </div>
              <div>
                <span>DECIMALS</span>
                <span>{decimals}</span>
              </div>
              <div>
                <span>TOTAL SUPPLY</span>
                <span>{totalSupply}</span>
              </div>
              <div>
                <span>ADDRESS</span>
                <span>{outputTokenaddress}</span>
                {/* <span>TBA</span> */}
              </div>
              <div>
                <span>Investor Vestation</span>
                <span>{investorVestation}</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* About The project Section */}
        <Row className='mt-2 pt-2'>
          <Col xs={12} lg={6} className='about-section'>
            <h2>About the Project</h2>
            {activePool.about.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </Col>

          <Col xs={6} lg={6} className='project-video-section'>
            <h2 className='mb-3'>Project Clip</h2>
            <div className='videoContainer mt-2 '>
              {youtube ? (
                <iframe
                  width='100%'
                  height='349'
                  src={videolink}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen></iframe>
              ) : (
                <video
                  className='incupad-pool-video responsive-iframe '
                  src={videolink}
                  controls
                  // frameborder="0"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default IncupadStaticPoolsInformation;
