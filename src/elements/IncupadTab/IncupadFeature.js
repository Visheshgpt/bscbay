import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import IncupadFeatureCards from './IncupadFeatureCards';

const IncupadFeature = () => {
  const poolData = useSelector((state) => state.pooldata);
  const { closedData, upcomingData, ongoingData } = poolData;

  return (
    <Container
      as='section'
      fluid='xxl'
      className='incupad-upcoming-section'
      id='feature'>
      <Container>
        {ongoingData && ongoingData.length > 0 && (
          <IncupadFeatureCards data={ongoingData} title='Ongoing' />
        )}
          {upcomingData && upcomingData.length > 0 && (
          <IncupadFeatureCards data={upcomingData} title='Upcoming' />
        )} 
        {closedData && closedData.length > 0 && (
          <IncupadFeatureCards data={closedData} title='Closed' />
        )}
      </Container>
    </Container>
  );
};

export default IncupadFeature;
