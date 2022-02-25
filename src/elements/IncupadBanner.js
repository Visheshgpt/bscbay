import { useEffect, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Web3 from 'web3';
import BSCBAYICOabi from '../shared/BSCBAYICO.json';
import { upcomingData } from './Constants';
import TimerSection from '../components/TimeSection';
import {
  addMaxDistributionTokens,
  addAllocationTokens,
} from '../redux/slices/poolsDataSlice';

function IncupadBanner() {
  const poolData = useSelector((state) => state.pooldata);
  const { address, featuredData, maxDistributionTokens, allocationTokens } =
    poolData;
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  function progressbarApis() {
    address.map((item) => {
      const web3 = new Web3(item.chainUrl);
      const contract = new web3.eth.Contract(BSCBAYICOabi, item.address);

      contract.methods
        .maxDistributedTokenAmount()
        .call()
        .then((amount) => {
          const tokens = web3.utils.toBN(amount).toString();
          const mxdt = Number(web3.utils.fromWei(tokens, 'ether'));
          const payload = {
            [item.id]: mxdt,
          };
          dispatch(addMaxDistributionTokens(payload));
        });

      contract.methods
        .tokensForDistribution()
        .call()
        .then((amount) => {
          var tokens = web3.utils.toBN(amount).toString();
          const at = Number(web3.utils.fromWei(tokens, 'ether'));
          const payload = {
            [item.id]: at,
          };
          dispatch(addAllocationTokens(payload));
        });
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      progressbarApis();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'>
                  <img src={item.img} alt={item.title} />
                  <span>{item.title}</span>
                </a>
              
              </div>
            ))}
          </div>
        </Col>
        {featuredData && featuredData.length > 0 && (
          <Col lg={6} xl={6}>
            <div className='w-100 d-flex justify-content-end '>
              <div className='card-featured text-center'>
                {/* <h4 className='text-white mb-2 py-3'>Featured Pools</h4> */}
                <Slider {...settings}>
                  {featuredData.map((item) => {
                    const icopercent = (
                      (allocationTokens[item.id] /
                        maxDistributionTokens[item.id]) *
                      100
                    ).toFixed(2);
                    return (
                      <div key={item.id} className='pt-4'>
                        <div className='card-1 w-100 h-auto text-white'>
                          <div className='icon-box-incupad logos'>
                            <img src={item.img} alt={item.title} />
                          </div>
                          <h4 className='mt-4 mb-2'>{item.title}</h4>
                          <TimerSection
                            startTime={item.startTime}
                            finishTime={item.finishTime}
                            ICOcompletePercentage={icopercent}
                          />
                          {icopercent && (
                            <ProgressBar
                              now={icopercent}
                              className='card-featured-bar'
                              label={`${Math.round(icopercent)}%`}
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
                    );
                  })}
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
