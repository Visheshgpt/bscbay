import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TimerSection from './TimeSection';
import AnimatedLogo from './AnimatedLogo';

function IncupadCardPool({
  data,
  minAllocation,
  maxAllocation,
  allocationTokens,
  maxDistributionTokens,
  ICOcompletePercentage = 90,
  checkclose = false,
}) {
  let icopercent = -1;

  const {
    accessType,
    description,
    finishTime,
    id,
    type,
    tag,
    title,
    img,
    tiltText,
    soldOut,
    startTime,
    dexpad,
  } = data;

  if (allocationTokens && maxDistributionTokens) {
    icopercent = ((allocationTokens / maxDistributionTokens) * 100).toFixed(2);
  }

  console.log('idc = ', icopercent);
  console.log('mxdt = ', maxDistributionTokens, ' atks = ', allocationTokens);

  const url = type === 'dexpad' ? `/dexpad/${id}` : `/launchpad/${type}/${id}`;

  return (
    <Link to={url} key={id}>
      <div className='incupad-upcoming-pool-card h-100 relative'>
        {tiltText && (
          <div className='dexpad-titltext text-primary text-center'>
            {tiltText}
          </div>
        )}
        <span className='card-tag'>{tag}</span>
        {soldOut && <span className='card-tag soldout'>Sold Out</span>}
        <AnimatedLogo srcimg={img} />
        <span className='card-title'>{title}</span>
        {description && (
          <p className='card-description'>
            {description.substring(0, 120)}
            {description.length > 120 && '...'}
          </p>
        )}
        <div className='card-time'>
          <img src='./assets/is-time-1.svg' alt='time icon' />
        </div>
        {type === 'static' ? (
          <p className='py-2 text-white'>Upcoming</p>
        ) : icopercent !== -1 ? (
          <TimerSection
            startTime={startTime}
            finishTime={finishTime}
            ICOcompletePercentage={icopercent}
          />
        ) : (
          <TimerSection
            startTime={startTime}
            finishTime={finishTime}
            ICOcompletePercentage={ICOcompletePercentage}
          />
        )}

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
            <span>{accessType} </span>
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
