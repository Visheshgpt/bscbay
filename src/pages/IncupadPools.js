import React from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound/PageNotFound';
import IncupadPoolsBanner from '../elements/IncupadPools/IncupadPoolsBanner';
import IncupadStaticPoolsBanner from '../elements/IncupadPools/IncupadStaticPoolsBanner';
import IncupadPoolsInformation from '../elements/IncupadPools/IncupadPoolsInformation';
import IncupadStaticPoolsInformation from '../elements/IncupadPools/IncupadStaticPoolsInformation';
import { poolData } from '../data';
import { staticData } from '../staticdata';

const IncupadPools = () => {
  const { type, id } = useParams();

  let activePool = [];

  if (type === 'static') {
    activePool = staticData.find((item) => {
      return item.id === Number(id);
    });
  } else {
    activePool = poolData.find((item) => {
      return item.id === Number(id);
    });
  }

  return activePool !== undefined ? (
    <section>
      {type === 'static' ? (
        <>
          <IncupadStaticPoolsBanner activePool={activePool} />
          <IncupadStaticPoolsInformation activePool={activePool} />
        </>
      ) : (
        <>
          <IncupadPoolsBanner activePool={activePool} />
          <IncupadPoolsInformation activePool={activePool} />
        </>
      )}
    </section>
  ) : (
    <PageNotFound />
  );
};

export default IncupadPools;
