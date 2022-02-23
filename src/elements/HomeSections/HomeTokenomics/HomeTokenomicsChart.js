import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HighCharts from '../../../components/HighCharts';
import MobileHighCharts from '../../../components/MobileHightCharts';

const data = [
  { name: 'Presale', value: '42%' },
  { name: 'Liquidities and Burn', value: '43%' },
  { name: 'Marketing & Development', value: '4%' },
  { name: 'Team', value: '4%' },
  { name: 'Exchanges & Partnerships', value: '2%' },
  { name: 'Strategic Advisors', value: '1%' },
  { name: 'Ecosystem', value: '4%' },
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
