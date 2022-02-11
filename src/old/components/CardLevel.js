import { Col } from 'react-bootstrap';

function CardLevel({ data, img = false }) {
  return (
    <Col lg={4} xs={12} className='mt-5'>
      <div key={data.title} className='card_levels'>
        <h3>{data.title}</h3>
        <div className='card_levels_staking py-4'>
          <h6>Staking Requirements</h6>
          <div className='d-flex flex-row align-items-end content py-2'>
            <h2 className='mx-2'>{data.stakingRequirement}</h2>
            <h6>TPAD</h6>
          </div>
        </div>
        <div className='card_levels_content'>
          <span>Pool Weight</span>
          <span>{data.poolWeight}</span>
          <span>Allocation Type</span>
          <span>
            {data.allocationType}
            {img && <img src={data.img} alt='check-icon' />}
          </span>
        </div>
      </div>
    </Col>
  );
}

export default CardLevel;
