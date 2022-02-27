import { useParams } from 'react-router-dom';
import { dexpaddata } from '../dexpaddata';
import DexpadPoolBanner from '../elements/Dexpad/DexpadPoolBanner';
import DexpadInformation from '../elements/Dexpad/DexpadInformation';
import DexpadAdmin from '../elements/Dexpad/DexpadAdmin';
function DexpadPools() {
  const { id } = useParams();

  const activePool = dexpaddata.find((item) => {
    return item.id === Number(id);
  });

  return (
    <section className='bg-color-2 text-white relative'>
      <DexpadPoolBanner activePool={activePool} />
      <DexpadInformation activePool={activePool} />
      {/* <DexpadAdmin /> */}
    </section>
  );
}

export default DexpadPools;
