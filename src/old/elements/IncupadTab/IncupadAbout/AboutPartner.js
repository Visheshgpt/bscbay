import { Col, Row } from 'react-bootstrap';

function AboutPartner() {
  return (
    <section className='about_partner '>
      <Row>
        <Col lg={12} className='about_partner'>
          <div className='border-secondary py-3'>
            <h1 className='text-center mb-5'>Partners</h1>
            <div className=' partner-img-section'>
              <img src='../../../../assets/pp-icon-2.png' alt='' />
              <img src='../../../../assets/pp-icon-1.png' alt='' />
              <img src='../../../../assets/pp-icon-0.png' alt='' />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default AboutPartner;
