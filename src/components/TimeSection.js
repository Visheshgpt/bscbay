import { currentTimeDate } from '../utils/helper';
import Timer from './Timer';

function TimerSection({ startTime, finishTime, ICOcompletePercentage }) {
  return (
    <div className='flexCenter flex-column'>
      {currentTimeDate() < startTime ? (
        <>
          <span className='card-time-status'>Starts in</span>
          <span className='text-white fw-500 mb-4'>
            <Timer initialcount={startTime - currentTimeDate()} />
          </span>
        </>
      ) : currentTimeDate() < finishTime &&
        Number(ICOcompletePercentage) !== 100 ? (
        <>
          <span className='card-time-status'>Closes in</span>
          <span className='text-white fw-500 mb-4'>
            <Timer initialcount={finishTime - currentTimeDate()} />
          </span>
        </>
      ) : (
        <span className='card-time-status card-time-status-1 mb-4'>Closed</span>
      )}
    </div>
  );
}

export default TimerSection;
