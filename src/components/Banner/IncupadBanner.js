import { Container, Row, Col } from 'react-bootstrap';
import LeftSection from './LeftSection';

function Banner({ activePool, children }) {
  return (
    <Container as='section' fluid='xxl' className='incupad_banners'>
      <Container>
        <Row className='relative align-items-center'>
          <LeftSection activePool={activePool} />
          <Col lg={5} md={5}>
            {children}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Banner;
