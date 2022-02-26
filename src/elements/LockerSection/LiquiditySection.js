import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import AnimatedLogo from '../../components/AnimatedLogo';

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

function LiquiditySection() {
  const [activeId, setActiveId] = useState(0);

  function toggleActive(id) {
    console.log('id = ', id);
    if (activeId === id) setActiveId(null);
    else setActiveId(id);
  }
  return (
    <div className='tokensection py-3 px-4'>
      <div className='flexCenter'>
        <span className='small px-2'>Pancakeswap V2 pair :</span>
        <span className='small address py-1 px-3'>0xc...Ee0</span>
      </div>
      <div className='d-flex flex-column items-center py-3 mb-2'>
        <div>1 WBNB = 125.53 B BabyDoge </div>
        <div>1 BabyDoge = 0.000000000007966037 WBNB</div>
      </div>
      <div className='flexCenter'>Locked Liquidity</div>
      <div className='flexBetween'>
        <div className='d-flex flex-column'>
          <div className='circleradius mb-2'>
            <img src='../coin1.png' alt='' />
          </div>
          <h6 className='py-1'>WBNB</h6>
          <div className='d-flex items-center mb-1'>
            <div>
              <img src='../locker.png' alt='' width='20px' height='20px' />{' '}
            </div>
            <div>
              <img
                src='../coin1.png'
                alt=''
                width='24px'
                height='18px'
                className='px-1'
              />
            </div>
            <div className='text-primary'>42,291.22</div>
          </div>
          <div className='d-flex items-center mb-1'>
            <div>
              <img src='../locker.png' alt='' width='20px' height='20px' />{' '}
            </div>
            <div>
              <img
                src='../coin1.png'
                alt=''
                width='24px'
                height='18px'
                className='px-1'
              />
            </div>
            <div>69,132.68 (1.2%)</div>
          </div>
        </div>
        <div className=''>
          <div className=''>
            <AnimatedLogo />
          </div>
        </div>
        <div className='d-flex flex-column align-items-end'>
          <div className='circleradius mb-2'>
            <img src='../coin2.png' alt='' />
          </div>
          <h6 className='py-1'>BobyDoge</h6>
          <div className='d-flex items-center mb-1'>
            <div>
              <img src='../locker.png' alt='' width='20px' height='20px' />{' '}
            </div>
            <div>
              <img
                src='../coin1.png'
                alt=''
                width='24px'
                height='18px'
                className='px-1'
              />
            </div>
            <div className='text-primary'>42,291.22</div>
          </div>
          <div className='d-flex items-center mb-1'>
            <div>
              <img src='../locker.png' alt='' width='20px' height='20px' />{' '}
            </div>
            <div>
              <img
                src='../coin1.png'
                alt=''
                width='24px'
                height='18px'
                className='px-1'
              />
            </div>
            <div>69,132.68 (1.2%)</div>
          </div>
        </div>
      </div>

      <div className='flexCenter py-2'>
        <span className='text-primary'>$28,250,424 </span> / $46,180,443
      </div>
      <div className='d-flex flex-column text-muted mb-4'>
        <div className='flexBetween'>
          <span>Total LP tokens </span>
          <span> 656,681.1467 </span>
        </div>
        <div className='flexBetween'>
          <span>Total LP tokens </span>
          <span> 656,681.1467 </span>
        </div>
      </div>

      <div className='d-flex flex-column '>
        <h3 className='fw-light'>Liquidity Locks</h3>
        <p className='text-muted'>
          Please be aware only the univ2 tokens are locked. Not the actual
          dollar value. This changes as people trade. More liquidity tokens are
          also minted as people add liquidity to the pool.
        </p>
      </div>

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

export default LiquiditySection;
