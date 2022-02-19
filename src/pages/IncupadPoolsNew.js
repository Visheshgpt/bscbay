import { useParams } from 'react-router-dom';
import IncupadPoolsBanner from '../components/Banner/IncupadBanner';
import PageNotFound from './PageNotFound/PageNotFound';
import NewRightSection from '../elements/IncupadPoolsNew/NewRightSection';
import { poolData } from '../data';

function IncupadNewPools() {
  const { title } = useParams();
  const activePool = poolData.find(
    (item) => item.title.replaceAll(' ', '-') === title
  );

  return activePool !== undefined ? (
    <>
      <IncupadPoolsBanner activePool={activePool}>
        <NewRightSection />
      </IncupadPoolsBanner>
    </>
  ) : (
    <PageNotFound />
  );
}

export default IncupadNewPools;
