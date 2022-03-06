import React from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound/PageNotFound';
import IncupadPoolsBanner from '../elements/IncupadPools/IncupadPoolsBanner';
import IncupadStaticPoolsBanner from '../elements/IncupadPools/IncupadStaticPoolsBanner';
import IncupadPoolsInformation from '../elements/IncupadPools/IncupadPoolsInformation';
import IncupadStaticPoolsInformation from '../elements/IncupadPools/IncupadStaticPoolsInformation';
import { poolsData } from '../data';

const IncupadPools = () => {
  const { type, id } = useParams();

  const activePool = poolsData.find((item) => {
    return item.id === Number(id) && item.type === type;
  });

  return activePool !== undefined ? (
    <section>
      {type === 'static' ? (
        <>
          <IncupadStaticPoolsBanner activePool={activePool} />
          <IncupadStaticPoolsInformation activePool={activePool} />
        </>
      ) : (
        <>
          <IncupadPoolsBanner activePool={activePool} type={type} />
          <IncupadPoolsInformation activePool={activePool} type={type} />
        </>
      )}
    </section>
  ) : (
    <PageNotFound />
  );
};

export default IncupadPools;
