import { Col } from 'react-bootstrap';

function CardLevel({ data }) {
  return (
    <Col lg={3} xs={12} className='mt-5'>
      <div key={data.title} className='card_levels'>
        <h3>{data.title}</h3>
        <div className='card_levels_staking py-4'>
          <h6>Holding Requirements</h6>
          <div className='d-flex flex-row align-items-end content py-2'>
            <h2 className='mx-2'>{data.stakingRequirement}</h2>
            <h6>BSCB</h6>
          </div>
        </div>
        <div className='card_levels_content'>
          <span>Pool Weight</span>
          <span>{data.poolWeight}</span>
          <span>Allocation Type</span>
          <span>
            {data.allocationType}
            <img src='../assets/check-levels.png' alt='check-icon' />
          </span>
        </div>
      </div>
    </Col>
  );
}

export default CardLevel;
