import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import IncupadCardPool from '../../components/IncupadCardPool';
import { checkValue } from '../../utils/helper';

function IncupadFeatureCards({ data, title }) {
  const poolData = useSelector((state) => state.pooldata);
  const {
    minAllocation,
    maxAllocation,
    ICOCompletePercentage,
    maxDistributionTokens,
    allocationTokens,
  } = poolData;

  return (
    <Row className='my-5'>
      <Col xs={12} className='p-2'>
        <h2 className='text-white text-center'> {title} Pools</h2>
      </Col>
      {data.length > 0 &&
        data.map((item) => (
          <Col lg={4} className='mb-4'>
            <IncupadCardPool
              data={item}
              minAllocation={checkValue(minAllocation, item.type, item.id)}
              maxAllocation={checkValue(maxAllocation, item.type, item.id)}
              ICOcompletePercentage={checkValue(
                ICOCompletePercentage,
                item.type,
                item.id
              )}
              allocationTokens={checkValue(
                allocationTokens,
                item.type,
                item.id
              )}
              maxDistributionTokens={checkValue(
                maxDistributionTokens,
                item.type,
                item.id
              )}
              checkclose={true}
            />
          </Col>
        ))}
    </Row>
  );
}

export default IncupadFeatureCards;
