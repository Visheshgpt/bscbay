import { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import AnimatedLogo from '../../components/AnimatedLogo';

const data = [
  {
    label: 'Total Tokens Held By Team',
    value: 'BSCB 40,000,000',
  },
  {
    label: '% Held By Team',
    value: '4.00%',
  },
  {
    label: 'Total Locked Period',
    value: '4 Months',
  },
  {
    label: 'Vesting Schdule',
    value: '25% / Month',
  },
];

const tokenData = [
  {
    token: 'BSCB 10,000,000',
    univ: '176,805.8412',
    month: '1 Month',
    date: '25/03/2022',
    transactionid: '0xA4a6DB60a345e40F389792952149b2d1255B9542',
  },
  {
    token: 'BSCB 10,000,000',
    univ: '176,805.8412',
    month: '2 Months',
    date: '25/04/2022',
    transactionid: '0xA4a6DB60a345e40F389792952149b2d1255B9542',
  },
  {
    token: 'BSCB 10,000,000',
    univ: '176,805.8412',
    month: '3 Months',
    date: '25/05/2022',
    transactionid: '0xA4a6DB60a345e40F389792952149b2d1255B9542',
  },
  {
    token: 'BSCB 10,000,000',
    univ: '176,805.8412',
    month: '4 Months',
    date: '25/06/2022',
    transactionid: '0xA4a6DB60a345e40F389792952149b2d1255B9542',
  },
];
function TokenSection() {
  const [activeId, setActiveId] = useState(0);

  function toggleActive(id) {
    console.log('id = ', id);
    if (activeId === id) setActiveId(null);
    else setActiveId(id);
  }
  return (
    <div className='tokensection py-3 px-4'>
      <div className='flexCenter'>
        <AnimatedLogo />
      </div>
      <h5 className='fw-light text-center mt-3 mb-4'>Teams Tokens Locked</h5>

      {data.map((item, index) => (
        <div className='flexBetween data'>
          <p>{item.label}</p>
          <p>{item.value}</p>
        </div>
      ))}
      <p className='fw-light mt-3'>
        The following is the vesting schedule of locked tokens by the team. The
        transaction ID's are available publicly to be viewed.
      </p>
      <div className='flexBetween p-2 px-3 pt-3'>
        <p>No. Of Tokens</p>
        <p>Unlock Date</p>
      </div>
      <Accordion defaultActiveKey={activeId}>
        {tokenData.map((item, index) => (
          <div key={index}>
            <Accordion.Toggle
              as='div'
              eventKey={index}
              onClick={() => toggleActive(index)}
              className={`accordion-header flexBetween p-2 px-3 cursor-pointer ${
                activeId === index ? 'active' : ''
              }`}>
              <div className='d-flex flex-column '>
                <span className='text-primary'>{item.token}</span>
                <p className='text-muted'>{item.univ} univ2</p>
              </div>
              <div className='d-flex justify-items-end flex-column'>
                <div class='fw-bold d-flex justify-items-end '>
                  in {item.month}
                </div>
                <div className='text-muted'> {item.date} </div>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index}>
              <div className='accordion-content p-3'>
                <div>Transaction # : {item.transactionid}</div>
              </div>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
    </div>
  );
}

export default TokenSection;
