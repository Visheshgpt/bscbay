import { useState } from 'react';
import useInterval from './CustomHooks/useInterval';
const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
};
function Timer({ initialcount }) {
  const [secondsRemaining, setSecondsRemaining] = useState(initialcount);
  const [status, setStatus] = useState(STATUS.STARTED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus();
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );

  return (
    <span className='timer'>
      <div>
        {twoDigits(hoursToDisplay)} hours, {twoDigits(minutesToDisplay)}{' '}
        minutes, {twoDigits(secondsToDisplay)} seconds
      </div>
    </span>
  );
}

export default Timer;

const twoDigits = (num) => String(num).padStart(2, '0');
