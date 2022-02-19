import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

const renderTooltip = (props) => (
  <Tooltip id='button-tooltip' {...props}>
    $BSCB tokens can be claimed on 24th Feb '22 post launch on Pancakeswap.
  </Tooltip>
);

function Tooltips() {
  return (
    <>
      <OverlayTrigger
        placement='bottom'
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}>
        <Button className='btn-tooltip'>i</Button>
      </OverlayTrigger>
    </>
  );
}

export default Tooltips;
