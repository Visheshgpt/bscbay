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

const IncupadFeature = () => {
  const [receivedBNB, setreceivedBNB] = useState(0);
  const [Minallocation, setMinallocation] = useState(0);
  const [Maxallocation, setMaxallocation] = useState(0);
  const [StartTime, setStartTime] = useState(0);
  const [EndTime, setEndTime] = useState(0);
  const [MaxDistributedTokens, setMaxDistributedTokens] = useState(0);
  const [allocatedToken, setallocatedToken] = useState(0);

  function web3apis() {
    // const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = BSCBAYICOabi;
    var contractAddress = '0x4b803DD894746E5c66812b1EBCaA1b63217c166a';
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    // get BNB balance of ICO
    web3.eth
      .getBalance('0x4b803DD894746E5c66812b1EBCaA1b63217c166a')
      .then((balance) => {
        // console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setreceivedBNB(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // get MAX DISTRIBUTED TOKENS
    contract.methods
      .maxDistributedTokenAmount()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setMaxDistributedTokens(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // get DISTRIBUTED TOKENS
    contract.methods
      .tokensForDistribution()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setallocatedToken(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // user MIN allocation
    contract.methods
      .minInvestment()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setMinallocation(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // user MAX allocation
    contract.methods
      .maxInvestment()
      .call()
      .then((amount) => {
        //  console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setMaxallocation(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // ICO start Time
    contract.methods
      .startTimestamp()
      .call()
      .then((time) => {
        // console.log(time);
        setStartTime(time);
      });

    // ICO End Time
    contract.methods
      .finishTimestamp()
      .call()
      .then((time) => {
        //  console.log("endtime",time);
        setEndTime(time);
      });
  }
  //////////Time section
  // const differceTime = EndTime - StartTime;
  // console.log("diff",differceTime);
  let currentTime = new Date();
  // console.log(currentTime)
  let currentTimeData = Number(Date.parse(currentTime) / 1000);
  // console.log("curr",currentTimeData);

  useEffect(() => {
    web3apis();
  });

  const ICOcompletePercentage = (
    (allocatedToken / MaxDistributedTokens) *
    100
  ).toFixed(2);

  const featuredPoolData = poolData.filter((item) => item.featured === true);

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

  // if (currentTimeData < StartTime) {
  //   console.log("1");
  // }
  // else if (currentTimeData < EndTime) {
  //   console.log("2");
  // }
  // else if (currentTimeData > EndTime) {
  //   console.log("3");
  //   console.log("startTime", StartTime);
  //   console.log("Type",typeof StartTime);
  //   console.log("endTime", EndTime);
  //   console.log("Type",typeof EndTime);
  //   console.log("currTime", currentTimeData);
  //   console.log("Type",typeof currentTimeData);
  // }
  // else {
  //   console.log("4");
  // }

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
              <Link to={`/launchpad/${item.id}`}>
                <div className='incupad-upcoming-pool-card relative'>
                  <span className='card-tag'>{item.tag}</span>

                  {item.soldOut && (
                    <span className='card-tag soldout'>Sold Out</span>
                  )}

                  <div class='icon-box-incupad'>
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
                    Number(ICOcompletePercentage) !== 100 ? (
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
                    <ProgressBar
                      now={ICOcompletePercentage}
                      className='progress-bar-sectionn'
                      label={`${Math.round(ICOcompletePercentage)}%`}
                    />

                    <div className='min-allocation'>
                      <span className='lower-card-name'>Min Allocation</span>
                      <span>{Minallocation} BNB</span>
                      {/* <span>TBA</span> */}
                    </div>
                    <div className='min-allocation'>
                      <span className='lower-card-name'>Max Allocation</span>
                      <span>{Maxallocation} BNB</span>
                      {/* <span>TBA</span> */}
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
