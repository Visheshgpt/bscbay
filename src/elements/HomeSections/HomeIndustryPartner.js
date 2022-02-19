import { Col, Container, Row } from 'react-bootstrap';

function HomeIndustryPartner() {
  return (
    <section className='industry_partner bg-color-homepage-section-one'>
      <Container fluid='xxl'>
        <div className='industry_partner_content'>
          <div className='title'>
            <h4>Industry Partners</h4>
          </div>
          <Row className='contents'>
            <Col>
              <div className='box'>
                <img src='./assets/partners/guard.jpg' alt='' />
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src='./assets/partners/sp.png' alt='' />
              </div>
            </Col>
            <Col>
              <div className='box'>
                <img src='./assets/partners/sp.png' alt='' />
              </div>
            </Col>
            <Col>
              <div className='box'>A</div>
            </Col>
          </Row>
        </div>
        <div className='industry_partner_content'>
          <div className='title'>
            <h4>Marketing Partners</h4>
          </div>
          <Row className='contents'>
            <Col>
              <div className='box'>A</div>
            </Col>
            <Col>
              <div className='box'>A</div>
            </Col>
            <Col>
              <div className='box'>A</div>
            </Col>
            <Col>
              <div className='box'>A</div>
            </Col>
            <Col>
              <div className='box'>A</div>
            </Col>
          </Row>
        </div>
        <div className='industry_partner_content'>
          <div className='title'>
            <h4>VC Partners</h4>
          </div>
          <Row className='contents'>
            <Col>
              <div className='box'>A</div>
            </Col>
            <Col>
              <div className='box'>A</div>
            </Col>
            <Col>
              <div className='box'>A</div>
            </Col>
            <Col>
              <div className='box'>A</div>
            </Col>
            <Col>
              <div className='box'>A</div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default HomeIndustryPartner;
