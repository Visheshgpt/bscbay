import { useEffect, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { poolData } from '../../data';
import BSCBAYICOabi from '../../shared/BSCBAYICO.json';
import Timer from '../../components/Timer';

import { getAddress, getFeaturedPoolsData } from '../../utils/helper';
  
const IncupadFeature = () => {

  let currentTime = new Date();
  let currentTimeData = Number(Date.parse(currentTime) / 1000);

  let featuredPoolData = getFeaturedPoolsData();

  const [minAllocation, setMinallocation] = useState({});
  const [maxAllocation, setMaxallocation] = useState({});
  const [ICOcompletePercentage, setIDOcompletePercentage] = useState({});

  const addressArray = getAddress();

  async function web3apis() {
    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    addressArray.map(async (item, index) => {
      const contract = new web3.eth.Contract(BSCBAYICOabi, item);
      // user MIN allocation
      const amnt = await contract.methods.minInvestment().call();
      const tokens = web3.utils.toBN(amnt).toString();
      const min = Number(web3.utils.fromWei(tokens, 'ether'));
      if (min) {
        let minallocation = {
          [index + 1]: min,
        };
        setMinallocation((prevState) => ({
          ...prevState,
          ...minallocation,
        }));
      }

      const amnt2 = await contract.methods.maxInvestment().call();
      const tokens2 = web3.utils.toBN(amnt2).toString();
      const max = Number(web3.utils.fromWei(tokens2, 'ether'));

      if (max) {
        let maxallocation = {
          [index + 1]: max,
        };
        setMaxallocation((prevState) => ({
          ...prevState,
          ...maxallocation,
        }));
      }


        // get DISTRIBUTED TOKENS
      const amnt3 =  await contract.methods.tokensForDistribution().call()
      // console.log("amnt3", amnt3);
      const tokens3 = web3.utils.toBN(amnt3).toString();
      const alloctoken = (Number(web3.utils.fromWei(tokens3, 'ether')));
      
      
      // get MAX DISTRIBUTED TOKENS
     const amnt4 = await contract.methods.maxDistributedTokenAmount().call()
     const tokens4 = web3.utils.toBN(amnt4).toString();
     const maxdistributed = (Number(web3.utils.fromWei(tokens4, 'ether')));
      
     
     // ICO percentage
     const ICOPercentage = (
      (alloctoken / maxdistributed) *
      100
    ).toFixed(2);
 
       
    if (ICOPercentage) {
      let ico = {
        [index + 1]: ICOPercentage,
      };
      setIDOcompletePercentage((prevState) => ({
        ...prevState,
        ...ico,
      }));
    }     


      return null;
    });
  }

  useEffect(() => {
    web3apis();
  }, []);

  // const ICOcompletePercentage = (
  //   (allocatedToken / MaxDistributedTokens) *
  //   100
  // ).toFixed(2);

  const options = {
    dots: false,
    loop: false,
    autoplay: true,
    margin: 20,
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

  var returnElapsedTime = function (epoch) {
    //We are assuming that the epoch is in seconds
    console.log('seconds = ', epoch);
    var hours = epoch / 3600,
      minutes = (hours % 1) * 60,
      seconds = (minutes % 1) * 60;
    return (
      Math.floor(hours) +
      ' hours, ' +
      Math.floor(minutes) +
      ' minutes, ' +
      Math.round(seconds) +
      ' seconds'
    );
    // return Math.floor(hours) + " hours, " + Math.floor(minutes) + " minutes ";
  };

  return (
    <Container
      as='section'
      fluid='xxl'
      className='incupad-upcoming-section'
      id='feature'>
      <Container>
        <Row>
          <Col xs={12} className='p-2'>
            <h2 className='text-white text-center'>Featured Pools</h2>
          </Col>
          <OwlCarousel options={options}>
            {featuredPoolData.map((item) => (
              <Link to={`/launchpad/${item.id}`} key={item.id}>
                <div className='incupad-upcoming-pool-card relative'>
                  <span className='card-tag'>{item.tag}</span>

                  {item.soldOut && (
                    <span className='card-tag soldout'>Sold Out</span>
                  )}

                  <div className='icon-box-incupad'>
                    <span>
                      <img src={item.img} alt={item.title} />
                    </span>
                  </div>
                  {/* <div class="icon-box-incupad  icon-box-incupad-1">
                    <span>
                      <img src={item.img} alt={item.title} />
                    </span>
                  </div>
                  <div class="icon-box-incupad icon-box-incupad-2">
                    <span>
                      <img src={item.img} alt={item.title} />
                    </span>
                  </div>
                  <div class="icon-box-incupad icon-box-incupad-3">
                    <span>
                      <img src={item.img} alt={item.title} />
                    </span>
                  </div> 
                  <div class="icon-box-incupad icon-box-incupad-4">
                    <span>
                      <img src={item.img} alt={item.title} />
                    </span>
                  </div> */}

                  <span className='card-title'>{item.title}</span>
                  <p className='card-description'>{item.description}</p>
                  <div className='card-time'>
                    <img src='./assets/is-time-1.svg' alt='time icon' />
                  </div>
                  {currentTimeData < item.startTime ? (
                    <>
                      <span className='card-time-status'>Starts in</span>
                      <span className='text-white fw-500 mb-4'>
                        <Timer
                          initialcount={item.startTime - currentTimeData}
                        />
                      </span>
                    </>
                  ) : currentTimeData < item.finishTime &&
                    Number(item.ICOcompletePercentage) !== 100 ? (
                    <>
                      <span className='card-time-status'>Closes in</span>
                      <span className='text-white fw-500 mb-4'>
                        <Timer
                          initialcount={item.finishTime - currentTimeData}
                        />
                      </span>
                    </>
                  ) : (
                    <>
                      {/* <span>{differceTime}</span> */}
                      <span className='card-time-status card-time-status-1 mb-4'>
                        Closed{' '}
                      </span>
                    </>
                  )}
                  {/* <span>{item.time}</span>
                  </div>
                  <span className="card-time-status">Upcomming</span> */}
                  <div className='incupad-upcoming-pool-card-lower'>
                    {ICOcompletePercentage[item.id] && (
                      <ProgressBar
                        now={ICOcompletePercentage[item.id]}
                        className='progress-bar-sectionn'
                        label={`${Math.round(ICOcompletePercentage[item.id])}%`}
                      />
                    )}

                    <div className='min-allocation'>
                      <span className='lower-card-name'>Min Allocation</span>

                      {minAllocation && (
                        <span>{minAllocation[item.id]} BNB</span>
                      )}
                    </div>
                    <div className='min-allocation'>
                      <span className='lower-card-name'>Max Allocation</span>
                      {maxAllocation && (
                        <span>{maxAllocation[item.id]} BNB</span>
                      )}
                    </div>
                    <div className='min-allocation'>
                      <span className='lower-card-name'>Access Type</span>
                      <span>{item.accessType} </span>
                    </div>

                    <div className='d-flex align-items-ceter justify-content-center mt-3'>
                      <div className='btn  btn-outline-primary'>View Pool</div>
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
};

export default IncupadFeature;
