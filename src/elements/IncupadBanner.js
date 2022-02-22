import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { upcomingData } from './Constants';
import TimerSection from '../components/TimeSection';

function IncupadBanner({ id }) {
  const poolData = useSelector((state) => state.pooldata);
  const { featuredData, ICOCompletePercentage } = poolData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  const ICOcompletePercentage = 90;

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
        {featuredData && featuredData.length > 0 && (
          <Col lg={6} xl={6}>
            <div className='w-100 d-flex justify-content-end '>
              <div className='card-featured text-center'>
                <h4 className='text-white mb-2 py-3'>Featured Pools</h4>
                <Slider {...settings}>
                  {featuredData.map((item) => (
                    <div key={item.id}>
                      <div className='card-1 w-100 h-auto text-white'>
                        <div className='icon-box-incupad logos'>
                          <img src={item.img} alt={item.title} />
                        </div>
                        <h4 className='mt-4 mb-2'>{item.title}</h4>
                        <TimerSection
                          startTime={item.startTime}
                          finishTime={item.finishTime}
                          ICOcompletePercentage={ICOCompletePercentage[item.id]}
                        />
                        {ICOcompletePercentage && (
                          <ProgressBar
                            now={ICOCompletePercentage[item.id]}
                            className='card-featured-bar'
                            label={`${Math.round(
                              ICOCompletePercentage[item.id]
                            )}%`}
                          />
                        )}

                        <Link to={`/launchpad/${item.id}`} key={item.id}>
                          <div
                            aria-label='button'
                            className='btn btn-sm btn-outline-primary mt-2'>
                            View Pool
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default IncupadBanner;
