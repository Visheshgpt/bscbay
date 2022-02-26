import { useParams } from 'react-router-dom';
import { dexpaddata } from '../dexpaddata';
import DexpadPoolBanner from '../elements/Dexpad/DexpadPoolBanner';
import DexpadInformation from '../elements/Dexpad/DexpadInformation';

function DexpadPools() {
  const { id } = useParams();

  const activePool = dexpaddata.find((item) => {
    return item.id === Number(id);
  });

  return (
    <section className='bg-color-2 text-white relative'>
      <DexpadPoolBanner activePool={activePool} />
      <DexpadInformation activePool={activePool} />
    </section>
  );
}

export default DexpadPools;
