import { Button } from 'react-bootstrap';

import MyModal from '../../components/MyModal';

function JoinWhitelist({ show, onHide, setWhitelisteddone, setWhiteListOpen }) {
  const handleSubmit = () => {
    onHide();
    setWhitelisteddone(true);
    setWhiteListOpen(false);
  };
  return (
    <MyModal show={show} onHide={onHide} classes='modal-whitelist'>
      <h6 className='text-white'>Join Whitelist Title</h6>
      <div className='flexCenter flex-column w-100 my-3 px-2'>
        <input
          type='text'
          name='address'
          placeholder='enter address'
          className='input-primary'
        />

        <Button
          className='btn btn-outline btn-outline-primary mt-4'
          onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </MyModal>
  );
}

export default JoinWhitelist;
