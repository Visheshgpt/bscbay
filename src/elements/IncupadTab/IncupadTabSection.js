import { Tab, Col, Row, Nav } from 'react-bootstrap';

//import IncupadAboutSection from './IncupadAbout/IncupadAboutSection';
import IncupadFeature from './IncupadFeature';
import IncupadLevelSection from './IncupadLevel/IncupadLevelSection';

function IncupadTabSection() {
  return (
    <section className='incupad_tabs mytabs' id='pools'>
      <Tab.Container defaultActiveKey='poolstab'>
        <Row>
          <Col sm={12}>
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey='poolstab' href='#feature'>
                  Pools
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='levels' href='#levels'>
                  Levels
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey='poolstab'>
                <IncupadFeature />
              </Tab.Pane>
              <Tab.Pane eventKey='levels'>
                <IncupadLevelSection />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
}

export default IncupadTabSection;
