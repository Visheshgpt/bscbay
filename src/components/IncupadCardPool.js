import { ProgressBar } from 'react-bootstrap';
import TimerSection from './TimeSection';

function IncupadCardPool({
  item,
  minAllocation,
  ICOcompletePercentage,
  maxAllocation,
}) {
  return (
    <div className='incupad-upcoming-pool-card h-100 relative'>
      <span className='card-tag'>{item.tag}</span>
      {item.soldOut && <span className='card-tag soldout'>Sold Out</span>}
      <div className='icon-box-incupad'>
        <span>
          <img src={item.img} alt={item.title} />
        </span>
      </div>
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
      <TimerSection
        startTime={item.startTime}
        finishTime={item.finishTime}
        ICOcompletePercentage={ICOcompletePercentage}
      />

      <div className='incupad-upcoming-pool-card-lower'>
        {ICOcompletePercentage && (
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
  );
}

export default IncupadCardPool;
