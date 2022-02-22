import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import IncupadCardPool from '../../components/IncupadCardPool';
import { useEffect } from 'react';
import { updateICOCompletePercentage } from '../../redux/slices/poolsDataSlice';

const IncupadFeature = () => {
  const poolData = useSelector((state) => state.pooldata);
  const {
    closedPoolData,
    upcomingPoolData,
    ongoingPoolData,
    minAllocation,
    maxAllocation,
    ICOCompletePercentage,
  } = poolData;

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // const random = Math.floor(Math.random(1, 9) * 100);
  //     const payload = {
  //       1: random,
  //     };
  //     dispatch(updateICOCompletePercentage(payload));
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // async function web3apis() {
  //   const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

  //   addressArray.map(async (item, index) => {
  //     const contract = new web3.eth.Contract(BSCBAYICOabi, item.address);
  //     // user MIN allocation
  //     const amnt = await contract.methods.minInvestment().call();
  //     const tokens = web3.utils.toBN(amnt).toString();
  //     const min = Number(web3.utils.fromWei(tokens, 'ether'));
  //     if (min) {
  //       let minallocation = {
  //         [index + 1]: min,
  //       };
  //       setMinallocation((prevState) => ({
  //         ...prevState,
  //         ...minallocation,
  //       }));
  //     }

  //     const amnt2 = await contract.methods.maxInvestment().call();
  //     const tokens2 = web3.utils.toBN(amnt2).toString();
  //     const max = Number(web3.utils.fromWei(tokens2, 'ether'));

  //     if (max) {
  //       let maxallocation = {
  //         [index + 1]: max,
  //       };
  //       setMaxallocation((prevState) => ({
  //         ...prevState,
  //         ...maxallocation,
  //       }));
  //     }

  //     // get DISTRIBUTED TOKENS
  //     const amnt3 = await contract.methods.tokensForDistribution().call();
  //     // console.log("amnt3", amnt3);
  //     const tokens3 = web3.utils.toBN(amnt3).toString();
  //     const alloctoken = Number(web3.utils.fromWei(tokens3, 'ether'));

  //     // get MAX DISTRIBUTED TOKENS
  //     const amnt4 = await contract.methods.maxDistributedTokenAmount().call();
  //     const tokens4 = web3.utils.toBN(amnt4).toString();
  //     const maxdistributed = Number(web3.utils.fromWei(tokens4, 'ether'));

  //     // ICO percentage
  //     const ICOPercentage = ((alloctoken / maxdistributed) * 100).toFixed(2);

  //     if (ICOPercentage) {
  //       let ico = {
  //         [index + 1]: ICOPercentage,
  //       };
  //       setIDOcompletePercentage((prevState) => ({
  //         ...prevState,
  //         ...ico,
  //       }));
  //     }

  //     return null;
  //   });
  // }

  // useEffect(() => {
  //   web3apis();
  // }, []);

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

  // const closedPoolsdData = featuredPoolData.filter((item) => {
  //   if (currentTimeData() > item.finishTime) {
  //     return item;
  //   }
  // });

  // const upcomingpool = featuredPoolData.filter((item) => {
  //   if (currentTimeData() < item.startTime) {
  //     return item;
  //   }
  // });

  // const ongoingpool = featuredPoolData.filter((item) => {
  //   if (
  //     currentTimeData() < item.finishTime &&
  //     currentTimeData() > item.startTime
  //   ) {
  //     return item;
  //   }
  // });

  return (
    <Container
      as='section'
      fluid='xxl'
      className='incupad-upcoming-section'
      id='feature'>
      <Container>
        {/* <Row>
          <Col xs={12} className='p-2'>
            <h2 className='text-white text-center'>Featured Pools</h2>
          </Col>

          <OwlCarousel options={options}>
            {featuredPoolData.map((item) => (
              <Link to={`/launchpad/${item.id}`} key={item.id}>
                <IncupadCardPool
                  item={item}
                  minAllocation={minAllocation}
                  maxAllocation={maxAllocation}
                  ICOcompletePercentage={ICOcompletePercentage}
                />
              </Link>
            ))}
          </OwlCarousel>
        </Row> */}
        <Row>
          <Col xs={12} className='p-2'>
            {ongoingPoolData.length > 0 && (
              <h2 className='text-white text-center'>Ongoing Pools</h2>
            )}
          </Col>
          <OwlCarousel options={options}>
            {ongoingPoolData.length > 0 &&
              ongoingPoolData.map((item) => (
                <Link to={`/launchpad/${item.id}`} key={item.id}>
                  <IncupadCardPool
                    item={item}
                    minAllocation={minAllocation[item.id]}
                    maxAllocation={maxAllocation[item.id]}
                    ICOcompletePercentage={ICOCompletePercentage[item.id]}
                  />
                </Link>
              ))}
          </OwlCarousel>
        </Row>
        <Row className='mt-5'>
          <Col xs={12} className='p-2'>
            {upcomingPoolData.length > 0 && (
              <h2 className='text-white text-center'>Upcoming Pools</h2>
            )}
          </Col>
          <OwlCarousel options={options}>
            {upcomingPoolData.length > 0 &&
              upcomingPoolData.map((item) => (
                <Link to={`/launchpad/${item.id}`} key={item.id}>
                  <IncupadCardPool
                    item={item}
                    minAllocation={minAllocation[item.id]}
                    maxAllocation={maxAllocation[item.id]}
                    ICOcompletePercentage={ICOCompletePercentage[item.id]}
                  />
                </Link>
              ))}
          </OwlCarousel>
        </Row>
        <Row className='mt-5'>
          <Col xs={12} className='p-2'>
            {closedPoolData.length > 0 && (
              <h2 className='text-white text-center'>Closed Pools</h2>
            )}
          </Col>
          <OwlCarousel options={options}>
            {closedPoolData.length > 0 &&
              closedPoolData.map((item) => (
                <Link to={`/launchpad/${item.id}`} key={item.id}>
                  <IncupadCardPool
                    item={item}
                    minAllocation={minAllocation[item.id]}
                    maxAllocation={maxAllocation[item.id]}
                    ICOcompletePercentage={ICOCompletePercentage[item.id]}
                  />
                </Link>
              ))}
          </OwlCarousel>
        </Row>
      </Container>
    </Container>
  );
};

export default IncupadFeature;
