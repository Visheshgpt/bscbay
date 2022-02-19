import { Modal } from 'react-bootstrap';

function MyModal({ show, onHide, classes = '', children }) {
  return (
    <Modal centered show={show} onHide={onHide} contentClassName='border-0'>
      <section
        className={`flexCenter flex-column text-center text-white bg-secondary p-4 ${classes}`}>
        {children}
      </section>
    </Modal>
  );
}

export default MyModal;
