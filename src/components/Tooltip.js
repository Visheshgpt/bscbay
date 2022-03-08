import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

const renderTooltip = (props) => (

<Tooltip id='button-tooltip' {...props}>
  {props}
  </Tooltip>
);



function Tooltips(props) {
  // console.log("props",props.message);
  return (
    <>
      <OverlayTrigger
        placement='bottom'
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip(props.message)}>
        <Button className='btn-tooltip'>i</Button>
      </OverlayTrigger>
    </>
  );
}

export default Tooltips;
