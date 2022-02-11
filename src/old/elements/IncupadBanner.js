import { Container, Row, Col } from 'react-bootstrap';
import { upcomingData } from './Constants';

function IncupadBanner() {
  return (
    <Container as='section' fluid='xxl' className='incupad-banner-section'>
      <Row>
        <Col lg={8} xl={6}>
          <h1>
            Enter The <span>Gateway Of Blockchain</span> Innovation
          </h1>
          <div className='incupad-card'>
            {upcomingData.map((item, index) => (
              <div key={index} className='d-flex justify-content-center '>
                <div className='incupad-upcoming-card'>
                  <a
                    href='https://my.forms.app/crptoprojects/bscbaylaunch'
                    target='_blank'
                    rel='noreferrer'>
                    <img src={item.img} alt={item.title} />
                  </a>
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default IncupadBanner;
