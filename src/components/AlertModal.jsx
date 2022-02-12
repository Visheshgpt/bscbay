import { Button, Modal } from 'react-bootstrap';

function AlertModal(props) {
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <div className='alert_modal'>
        <div className='close_btn'>
          <Button
            type='button'
            class='close mybutton'
            aria-label='Close'
            onClick={props.onHide}>
            <span aria-hidden='true'>&times;</span>
          </Button>
        </div>
        <div className='content'>
          {props.children} 
        </div>
      </div>
    </Modal>
  );
}

export default AlertModal;