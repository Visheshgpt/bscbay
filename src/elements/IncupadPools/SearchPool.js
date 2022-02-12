import { useState } from 'react';
import AlertModal from '../../components/AlertModal';

function Search({ show, onHide }) {
  const [value, setValue] = useState('');

  const handleSearch = () => {};
  return (
    <AlertModal show={show} onHide={onHide}>
      <div className='incupad_search'>
        <div>
          <input
            type='text'
            id='html'
            name='search'
            className='input mt-4'
            placeholder='Enter Wallet Address'
            onChange={(e) => setValue(e.target.value)}
          />
          <div className='mb-2'>Custom Message</div>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn_primary mt-2' onClick={handleSearch}>
            Check Whitelist
          </button>
        </div>
      </div>
    </AlertModal>
  );
}

export default Search;
