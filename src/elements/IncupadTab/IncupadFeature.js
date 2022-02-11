import { useEffect, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

import { poolData } from '../Constants';
import BSCBAYICOabi from '../../shared/BSCBAYICO.json';

function IncupadFeature() {
  const [MaxDistributedTokens, setMaxDistributedTokens] = useState(0);
  const [allocatedToken, setallocatedToken] = useState(0);

  const featuredPoolData = poolData.filter((item) => item.featured === true);
  const ICOcompletePercentage = (
    (allocatedToken / MaxDistributedTokens) *
    100
  ).toFixed(2);

  const options = {
    dots: false,
    loop: false,
    autoplay: true,
    margin: 20,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1200: {
        items: 3,
      },
      1900: {
        items: 3,
      },
    },
  };

  return (
    <Container as='section' fluid='xxl' className='incupad-upcoming-section'>
      <Container>
        <Row>
          <Col xs={12} className='p-2'>
            <h2 className='text-white text-center'>Featured Pools</h2>
          </Col>
          <OwlCarousel options={options}>
            {featuredPoolData.map((item) => (
              <Link to={`/launchpad/${item.title.replaceAll(' ', '-')}`}>
                <div className='incupad-upcoming-pool-card'>
                  <span className='card-tag'>{item.tag}</span>
                  <div class='icon-box-incupad'>
                    <span>
                      <img src={item.img} alt={item.title} />
                    </span>
                  </div>

                  <span className='card-title'>{item.title}</span>
                  <p className='card-description'>{item.description}</p>
                  <div className='card-time'>
                    <img src='./assets/is-time-1.svg' alt='time icon' />
                  </div>
                  {/*  {currentTimeData < StartTime ? (
                    <span className="card-time-status">Upcomming</span>
                  ) : differceTime <= 0 ? (
                    <>
                      <span>{differceTime}</span>
                      <span className="card-time-status">closed</span>
                    </>
                  ) : (
                    <>
                      <span>{differceTime}</span>
                      <span className="card-time-status">remaining</span>
                    </>
                  )}
                  
                  */}
                  {/* <span>{item.time}</span>
                </div>
                <span className="card-time-status">Upcomming</span> */}
                  <div className='incupad-upcoming-pool-card-lower'>
                    <ProgressBar
                      now={ICOcompletePercentage}
                      className='progress-bar-sectionn'
                      label={`${Math.round(ICOcompletePercentage)}%`}
                    />

                    <div className='min-allocation'>
                      <span className='lower-card-name'>Min Allocation</span>
                      {/* <span>{Minallocation}</span> */}
                      <span>TBA</span>
                    </div>
                    <div className='min-allocation'>
                      <span className='lower-card-name'>Max Allocation</span>
                      {/* <span>{Maxallocation}</span> */}
                      <span>TBA</span>
                    </div>
                    <div className='min-allocation'>
                      <span className='lower-card-name'>Access Type</span>
                      <span>{item.accessType}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </OwlCarousel>
        </Row>
      </Container>
    </Container>
  );
}

export default IncupadFeature;
