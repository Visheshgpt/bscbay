import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import IncupadCardPool from '../components/IncupadCardPool';

function Dexpad() {
  const dexpaddata = useSelector((state) => state.dexpaddata);
  const {
    dexpadData,
    minAllocation,
    maxAllocation,
    ICOCompletePercentage,
    maxDistributionTokens,
    allocationTokens,
  } = dexpaddata;

  return (
    <section className='bg-color-2 text-white py-5 position-relative '>
      <Container fluid='xxl' className='position-relative mt-5 py-3'>
        <Row>
          {dexpadData.length > 0 &&
            dexpadData.map((item) => (
              <Col lg='4'>
                <IncupadCardPool 
                  item={item}
                  minAllocation={minAllocation[item.id]}
                 
                  maxAllocation={maxAllocation[item.id]}
                  
                  ICOcompletePercentage={ICOCompletePercentage[item.id]}
              
                  allocationTokens={allocationTokens[item.id]}
                  maxDistributionTokens={maxDistributionTokens[item.id]}
                  checkClose={true}
                  dexpad={true}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}

export default Dexpad;
