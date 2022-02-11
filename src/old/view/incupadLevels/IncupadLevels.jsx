import React from 'react';
import LotteryLevels from './section/LotteryLevels';
import GuaranteedLevels from './section/GuaranteedLevels';
const IncupadLevels = () => {
  return <div className='levels-section'>
      <h1><span className='text-primary'>Bsc</span>Bay Levels</h1>
      <LotteryLevels/>
      <GuaranteedLevels/>
  </div>;
};

export default IncupadLevels;
