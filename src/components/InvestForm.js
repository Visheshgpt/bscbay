import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

function InvestForm({}) {
  const [value, setValue] = useState('');
  const [btnLoading, setButtonLoading] = useState(false);

  const invest = () => {
    setButtonLoading(true);
    console.log('invest click = ');
  };

  return (
    <div className='invest__wrapper flexCenter w-100 mt-3'>
      <div className='invest_input'>
        <input
          type='text'
          placeholder='Enter Amount'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          className='invest_max'
          // onClick={() => setValue(remainingallocation)}
        >
          Max
        </div>
      </div>

      {btnLoading ? (
        <button
          className='btn btn-primary btn-round'
          variant='primary'
          disabled>
          <Spinner
            as='span'
            animation='border'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          <span className='visually-hidden'>Invest...</span>
        </button>
      ) : (
        <button className='btn btn-primary btn-round' onClick={invest}>
          Invest
        </button>
      )}
    </div>
  );
}

export default InvestForm;
