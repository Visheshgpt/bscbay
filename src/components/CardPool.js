import { Col } from 'react-bootstrap';

function CardPool({ data }) {
  return (
    <Col lg={4}>
      <div className='card_pool'>
        <div className='card_pool_tag'>{data.tag}</div>
        <div class='card_pool_icon'>
          <span>
            <img src={data.img} alt={data.title} />
          </span>
        </div>
      </div>
    </Col>
  );
}

export default CardPool;
