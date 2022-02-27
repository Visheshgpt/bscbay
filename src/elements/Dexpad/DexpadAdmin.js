import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import DexpadWhiteList from './DexpadWhiteList';

const data = [
  {
    label: 'Project Name',
    value: '',
  },
  {
    label: 'Admin Address:',
    value: '',
  },
  {
    label: 'Decimals:',
    value: 'JSON',
  },
  {
    label: 'Presale Rates:',
    value: 'API',
  },
  {
    label: 'Launch Rates:',
    value: 'API',
  },
  {
    label: 'No. of LP Tokens:',
    value: 'API',
  },
  {
    label: 'Value of LP Tokens:',
    value: 'API',
  },
];
function DexpadAdmin() {
  const [submit, setSubmit] = useState(false);
  const [showWhitelist, setShowWhitelist] = useState(false);

  const checkWhitelisted = false;

  const handleSubmit = () => {
    setSubmit(true);
  };
  return (
    <Container as='div' fluid='xxl' className='py-5'>
      <Container>
        <Row className='relative'>
          <Col lg={12}>
            <h3 className='text-center mb-4'>Admin Panel</h3>
          </Col>
          <Col lg={12} className=''>
            <div className='card__two'>
              {data.map((item, index) => {
                const justifyend = index % 2 === 0 ? '' : 'justify-content-end';
                return (
                  <div className={`d-flex ${justifyend} `} key={item.label}>
                    <div className='label'>{item.label}</div>
                    <div className='value mx-2 text-primary'>{item.label}</div>
                  </div>
                );
              })}
            </div>

            <div className='mt-4'>
              <div className='d-flex align-items-center'>
                <div className='label'>Whitelist</div>
                <div className='value mx-2'>
                  {checkWhitelisted ? 'YES' : 'NO'}
                </div>
                <span
                  className='btn-sm b-primary btn-outline-primary ml-2'
                  onClick={() => setShowWhitelist(true)}>
                  ENABLE
                </span>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className='flexCenter mt-4'>
              {!submit ? (
                <span className='btn btn-primary' onClick={handleSubmit}>
                  Send Liquidity To Dex & Lock LP Tokens
                </span>
              ) : (
                <div className='text-center'>
                  <span>Unlock LP Tokens</span>
                  <div>
                    Time Remaining:{' '}
                    <span className='text-primary'>0 Days 2 Hours 33 mins</span>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
        {showWhitelist && (
          <DexpadWhiteList
            show={showWhitelist}
            onHide={() => setShowWhitelist(false)}
          />
        )}
      </Container>
    </Container>
  );
}

export default DexpadAdmin;
