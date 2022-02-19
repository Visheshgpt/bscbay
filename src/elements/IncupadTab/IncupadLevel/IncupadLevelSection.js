import LotteryLevel from './LotteryLevel';
// import GuaranteedLevels from './GuaranteedLevels';
function IncupadLevelSection() {
  return (
    <div className='incupad_tabs_levels levels' id='levels'>
      <div className='container text-center text-white'>
        <h1>
          <span className='text-primary'>BSC</span>Bay Levels
        </h1>
        <LotteryLevel />
        {/* <GuaranteedLevels /> */}
      </div>
    </div>
  );
}

export default IncupadLevelSection;
