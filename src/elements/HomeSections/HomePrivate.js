import { Col, Container, Row, ProgressBar } from 'react-bootstrap';

function HomePrivate() {
  return (
    <Container as='section' fluid='xxl' className='private_feature'>
      <Row>
        <Col lg={4} className='col_1'>
          <div className='logo_box'>
            <img src='./assets/logo.png' alt='logo' height='55px' />
          </div>
        </Col>
        <Col lg={4} className='col_2'>
          <h5 className='text-primary'>Feature Private Sale</h5>

          <div className='text-white starts_in'>
            Starts in:{' '}
            <span className='fw-600'>0 days 10 Hours 20 Mins 30 Seconds</span>
          </div>

          <div className='progress_bar'>
            <div className='progress_bar_top'>
              <h6>Raised: 0/250 BNB</h6>
            </div>
            <ProgressBar
              now={60}
              label={`${60}%`}
              className='progress-bar-section'
            />
            <div className='progress_bar_bottom'>
              <span>Swap Progress</span>
              <span>Participant: 0</span>
            </div>
          </div>
        </Col>
        <Col lg={4} className='col_3'>
          <div className='btn-section'>
            <div className='btn-sm btn-color text-center'>Private</div>
            <div className='btn-sm btn-color text-center'>BNB</div>
            <div className='btn-sm btn-color text-center'>Upcoming</div>
          </div>
          <div className='view_ppol'>
            <div className='btn btn_outline btn_outline_primary'>View Pool</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePrivate;
