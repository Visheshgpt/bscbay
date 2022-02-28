import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import IncupadCardPool from '../../components/IncupadCardPool';
import { getStaticDataByType } from '../../utils/helper';

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

  const staticUpcomingData = getStaticDataByType('upcoming');

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
          <Col lg={4}>
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
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col xs={12} className='p-2'>
            {(upcomingPoolData.length > 0 || staticUpcomingData.length > 0) && (
              <h2 className='text-white text-center'>Upcoming Pools</h2>
            )}
          </Col>
          <Col lg={4}>
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
            {staticUpcomingData.length > 0 &&
              staticUpcomingData.map((item) => (
                <IncupadCardPool
                  item={item}
                  minAllocation={item.minAllocation}
                  maxAllocation={item.maxAllocation}
                  ICOcompletePercentage={item.ICOcompletePercentage}
                  allocationTokens={item.allocationTokens}
                  maxDistributionTokens={item.maxDistributionTokens}
                  staticdata={true}
                />
              ))}
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col xs={12} className='p-2'>
            {closedPoolData.length > 0 && (
              <h2 className='text-white text-center'>Closed Pools</h2>
            )}
          </Col>

          {closedPoolData.length > 0 &&
            closedPoolData.map((item) => (
              <Col lg={4}>
                <IncupadCardPool
                  item={item}
                  minAllocation={minAllocation[item.id]}
                  maxAllocation={maxAllocation[item.id]}
                  ICOcompletePercentage={ICOCompletePercentage[item.id]}
                  allocationTokens={allocationTokens[item.id]}
                  maxDistributionTokens={maxDistributionTokens[item.id]}
                  checkClose={true}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
};

export default IncupadFeature;
