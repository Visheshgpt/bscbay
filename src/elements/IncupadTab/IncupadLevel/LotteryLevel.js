import { Col, Row } from 'react-bootstrap';
import { levelData } from '../../Constants';
import CardLevel from '../../../components/CardLevel';

function LotteryLevel() {
  return (
    <section className='level_lottery'>
      {/*   <h2 className='my-3'>Lottery Levels</h2> */}

      <Row>
        {levelData.map((item, index) => (
          <CardLevel data={item} />
        ))}
      </Row>
    </section>
  );
}

export default LotteryLevel;
