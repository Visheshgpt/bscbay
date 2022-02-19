import { Col, Container, Row, ProgressBar } from 'react-bootstrap';

function HomePrivate() {
  return (
    <Container as='section' fluid='xxl' className='private_feature'>
      <Row>
        <Col
          lg={12}
          className='d-flex align-items-center justify-content-center mb-4'>
          <h4 className='text-primary'>Featured IDO</h4>
        </Col>
        <Col lg={4} md={4} className='col_1 mb-4'>
          <div className='logo_content d-flex align-items-center justify-content-center'>
            <div className='logo_box'>
              <img src='./assets/bscbay.png' alt='logo' height='55px' />
            </div>
            <div className='mx-3'>
              <h1 className='text-primary'>
                BSC<span className='text-white'>Bay</span>
              </h1>
            </div>
          </div>
        </Col>
        <Col lg={4} md={4} className='col_2'>
          <div className='text-white starts_in'>
            Starts in:{' '}
            <span className='fw-600'>0 days 10 Hours 20 Mins 30 Seconds</span>
          </div>

          <div className='pbar'>
            <div className='pbar_top'>
              <h6>Raised: 0/250 BNB</h6>
            </div>
            <ProgressBar now={60} label={`${60}%`} className='progress_bar' />
            <div className='pbar_bottom'>
              <span>Swap Progress</span>
              <span>Participant: 0</span>
            </div>
          </div>
        </Col>
        <Col lg={4} md={4} className='col_3'>
          <div className='btn-section'>
            <div className='btn-sm btn-color text-center'>Private</div>
            <div className='btn-sm btn-color text-center'>BNB</div>
            <div className='btn-sm btn-color text-center'>Upcoming</div>
          </div>
          <div className='view_ppol mt-3'>
            <div className='btn btn-outline btn-outline-primary'>View Pool</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePrivate;
