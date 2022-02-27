import { Button } from 'react-bootstrap';

import MyModal from '../../components/MyModal';

function DexpadWhiteList({ show, onHide }) {
  const handleSubmit = () => {
    onHide();
  };

  return (
    <MyModal show={show} onHide={onHide} classes='modal-whitelist'>
      <h6 className='text-white mb-5'>Add Whitelist</h6>
      <div className='d-flex align-items-start flex-column w-100'>
        <input
          type='text'
          name='address'
          placeholder='[0X12323, 0X21321]'
          className='input-primary w-100'
        />
        <span className='small mt-1'>
          USE THIS FORMAT TO UPLOAD WL [ADDRESS, ADDRESS, ADDRESS]
        </span>
      </div>
      <Button
        className='btn btn-outline btn-outline-primary mt-4'
        onClick={handleSubmit}>
        Confirm Whitelist
      </Button>
    </MyModal>
  );
}

export default DexpadWhiteList;
