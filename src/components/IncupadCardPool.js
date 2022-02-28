import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TimerSection from './TimeSection';
import AnimatedLogo from './AnimatedLogo';

function IncupadCardPool({
  item,
  minAllocation,
  ICOcompletePercentage,
  maxAllocation,
  allocationTokens,
  maxDistributionTokens,
  dexpad = false,
  staticdata = false,
  // checkClose = false,
}) {
  let icopercent = -1;

  if (allocationTokens && maxDistributionTokens) {
    icopercent = ((allocationTokens / maxDistributionTokens) * 100).toFixed(2);
  }

  const url = dexpad
    ? `/dexpad/${item.id}`
    : staticdata
    ? `/launchpad/static/${item.id}`
    : `/launchpad/dynamic/${item.id}`;

  return (
    <Link to={url} key={item.id}>
      <div className='incupad-upcoming-pool-card h-100 relative'>
        {item.tiltText && (
          <div className='dexpad-titltext text-primary text-center'>
            {item.tiltText}
          </div>
        )}
        <span className='card-tag'>{item.tag}</span>
        {item.soldOut && <span className='card-tag soldout'>Sold Out</span>}
        <AnimatedLogo srcimg={item.img} />
        <span className='card-title'>{item.title}</span>
        {item.description && (
          <p className='card-description'>
            {item.description.substring(0, 120)}
            {item.description.length > 120 && '...'}
          </p>
        )}

        <div className='card-time'>
          <img src='./assets/is-time-1.svg' alt='time icon' />
        </div>

        {staticdata ? (
          <p className='py-2 text-white'>Upcoming</p>
        ) : icopercent !== -1 ? (
          <TimerSection
            startTime={item.startTime}
            finishTime={item.finishTime}
            ICOcompletePercentage={icopercent}
          />
        ) : (
          <TimerSection
            startTime={item.startTime}
            finishTime={item.finishTime}
            ICOcompletePercentage={ICOcompletePercentage}
          />
        )}

        {/* {icopercent !== -1 ? (
          <TimerSection
            startTime={item.startTime}
            finishTime={item.finishTime}
            ICOcompletePercentage={icopercent}
          />
        ) : (
          <TimerSection
            startTime={item.startTime}
            finishTime={item.finishTime}
            ICOcompletePercentage={ICOcompletePercentage}
          />
        )} */}

        {/* <br></br> */}

        <div className='incupad-upcoming-pool-card-lower'>
          {icopercent !== -1 ? (
            <ProgressBar
              now={icopercent}
              className='progress-bar-sectionn'
              label={`${Math.round(icopercent)}%`}
            />
          ) : (
            <ProgressBar
              now={ICOcompletePercentage}
              className='progress-bar-sectionn'
              label={`${Math.round(ICOcompletePercentage)}%`}
            />
          )}

          <div className='min-allocation'>
            <span className='lower-card-name'>Min Allocation</span>
            {minAllocation && <span>{minAllocation} BNB</span>}
          </div>
          <div className='min-allocation'>
            <span className='lower-card-name'>Max Allocation</span>
            {maxAllocation && <span>{maxAllocation} BNB</span>}
          </div>
          <div className='min-allocation'>
            <span className='lower-card-name'>Access Type</span>
            <span>{item.accessType} </span>
          </div>

          <div className='d-flex align-items-ceter justify-content-center mt-3'>
            <div className='btn  btn-outline-primary'>View Pool</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default IncupadCardPool;
