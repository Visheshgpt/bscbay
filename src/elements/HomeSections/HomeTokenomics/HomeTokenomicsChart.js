import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HighCharts from '../../../components/HighCharts';
import MobileHighCharts from '../../../components/MobileHightCharts';

const data = [
  { name: 'Presale', value: '40%' },
  { name: 'Liquidity', value: '40%' },
  { name: 'Marketing & Development', value: '5%' },
  { name: 'Team', value: '5%' },
  { name: 'Exchanges & Partnerships', value: '3%' },
  { name: 'Strategic Advisors', value: '2%' },
  { name: 'Ecosystem', value: '5%' },
];

function HomeTokenomicsChart() {
  const [tokenomics, setTokenomics] = useState('');
  return (
    <Container fluid='xxl'>
      <Row>
        <Col lg={6} className='h-100'>
          <div className='highcharts'>
            <HighCharts setTokenomics={setTokenomics} />
            <MobileHighCharts setTokenomics={setTokenomics} />
          </div>
        </Col>
        <Col lg={6} className='d-flex align-items-center'>
          <Row>
            {data.map((item) => {
              const active =
                item.name === tokenomics ? 'tokenomics_box_active' : '';
              return (
                <Col lg={6}>
                  <div className={`tokenomics_box ${active}`}>
                    <div className='name'> {item.name}</div>
                    <div className='value'> {item.value}</div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeTokenomicsChart;
