import { Col, Row } from 'react-bootstrap';
import { GuarantedlevelData, privateGuarantedData } from '../../Constants';
import CardLevel from '../../../components/CardLevel';

function GuaranteedLevels() {
  return (
    <section className='level_gurantee'>
      <h2 className='my-3 mt-5'>Guaranteed Levels</h2>
      <Row>
        {GuarantedlevelData.map((item, index) => (
          <CardLevel data={item} />
        ))}
        {privateGuarantedData.map((item, index) => (
          <CardLevel data={item} />
        ))}
      </Row>
    </section>
  );
}

export default GuaranteedLevels;
