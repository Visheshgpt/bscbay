import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import IncupadCardPool from '../../components/IncupadCardPool';

const IncupadFeature = () => {
  const poolData = useSelector((state) => state.pooldata);
  const {
    closedPoolData,
    upcomingPoolData,
    ongoingPoolData,
    minAllocation,
    maxAllocation,
    ICOCompletePercentage,
    maxDistributionTokens,
    allocationTokens,
  } = poolData;

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
                <IncupadCardPool
                  item={item}
                  minAllocation={minAllocation[item.id]}
                  maxAllocation={maxAllocation[item.id]}
                  ICOcompletePercentage={ICOCompletePercentage[item.id]}
                  allocationTokens={allocationTokens[item.id]}
                  maxDistributionTokens={maxDistributionTokens[item.id]}
                />
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
                <IncupadCardPool
                  item={item}
                  minAllocation={minAllocation[item.id]}
                  maxAllocation={maxAllocation[item.id]}
                  ICOcompletePercentage={ICOCompletePercentage[item.id]}
                  allocationTokens={allocationTokens[item.id]}
                  maxDistributionTokens={maxDistributionTokens[item.id]}
                />
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
                <IncupadCardPool
                  item={item}
                  minAllocation={minAllocation[item.id]}
                  maxAllocation={maxAllocation[item.id]}
                  ICOcompletePercentage={ICOCompletePercentage[item.id]}
                  allocationTokens={allocationTokens[item.id]}
                  maxDistributionTokens={maxDistributionTokens[item.id]}
                  checkClose={true}
                />
              ))}
          </OwlCarousel>
        </Row>
      </Container>
    </Container>
  );
};

export default IncupadFeature;
