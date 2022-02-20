import { Container, Row, Col } from 'react-bootstrap';
import { upcomingData } from './Constants';

function IncupadBanner() {
  return (
    <Container as='section' fluid='xxl' className='incupad-banner-section'>
      <Row>
        <Col lg={6} xl={6}>
          <h1>
            Enter The <span>Gateway Of Blockchain</span> Innovation
          </h1>
          <div className='incupad-card'>
            {upcomingData.map((item, index) => (
              <div key={index} className='incupad-upcoming-card'>
                <a
                  href='https://my.forms.app/crptoprojects/bscbaylaunch'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={item.img} alt={item.title} />
                </a>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Col>
        {/* <Col lg={6} xl={6}>
          <div className='w-100'>
            <div className='d-flex justify-content-end '>
              <div className='card-featured'>test</div>
            </div>
          </div>
          <div className='flexCenter flex-column card-featured justify-content-end'>
            <h4 className='text-white mb-5'>Featured Pools</h4>
            <div className='card-1 p-0 w-100'>
              <div className='logos'>
                <img src='../assets/bscbay.png' alt='bscbay' />
              </div>
            </div>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
}

export default IncupadBanner;
