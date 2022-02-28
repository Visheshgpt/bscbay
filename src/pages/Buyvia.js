import { Col, Container, Row } from 'react-bootstrap';
function Buyvia() {
  return (
    <section className='py-5 bg-color-homepage-section-one text-white partnerpage'>
      <Container fluid='xxl' className='mt-5'>
        <Row>
          <div className='w-100 flexCenter'>
            <Col lg={4} className='ml-auto'>
              <div id='rubic-widget-root'></div>
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Buyvia;
