import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TokenSection from '../elements/LockerSection/TokenSection';
import LiquiditySection from '../elements/LockerSection/LiquiditySection';
function Locker() {
  return (
    <section className='bg-color-2 text-white py-5 position-relative '>
      <Container fluid='xxl' className='position-relative mt-5 py-3'>
        <Row className='justify-content-center'>
          <Col lg={6} className='locker mytabs'>
            <div className='text-center p-2 locker-img'>
              <img src='../locker.png' alt='LockerPage' />
            </div>
            <Tab.Container defaultActiveKey='tokenstab'>
              <Col sm={12}>
                <Nav className='flexCenter'>
                  <Nav.Item>
                    <Nav.Link eventKey='tokenstab'>Tokens</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='liquiditytab'>Liquidity</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col
                sm={12}
                className='mt-1 locker-content justify-content-start p-3'>
                <Tab.Content>
                  <Tab.Pane eventKey='tokenstab'>
                    <TokenSection />
                  </Tab.Pane>
                  <Tab.Pane eventKey='liquiditytab'>
                    <LiquiditySection />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Locker;
