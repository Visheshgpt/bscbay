import React from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound/PageNotFound';
import IncupadPoolsBanner from '../elements/IncupadPools/IncupadPoolsBanner';
import IncupadPoolsInformation from '../elements/IncupadPools/IncupadPoolsInformation';
import { poolData } from '../data';

const IncupadPools = () => {
  const { title } = useParams();

  console.log('t = ', title);
  const activePool = poolData.find((item) => {
    console.log('id = ', item.id);
    return item.id === Number(title);
  });

  console.log('t = ', activePool);

  return activePool !== undefined ? (
    <section>
      <IncupadPoolsBanner activePool={activePool} />
      <IncupadPoolsInformation activePool={activePool} />
    </section>
  ) : (
    <PageNotFound />
  );
};

export default IncupadPools;
