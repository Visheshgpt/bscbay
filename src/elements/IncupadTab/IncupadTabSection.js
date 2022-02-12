import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

//import IncupadAboutSection from './IncupadAbout/IncupadAboutSection';
import IncupadFeature from './IncupadFeature';
import IncupadLevelSection from './IncupadLevel/IncupadLevelSection';

function IncupadTabSection() {
  const [key, setKey] = useState('pools');
  return (
    <section className='incupad_tabs'>
      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={(k) => setKey(k)}>
        {/*
  <Tab eventKey='about' title='About'>
          <IncupadAboutSection />
        </Tab>
            */}

        <Tab eventKey='pools' title='Pools'>
          <IncupadFeature />
        </Tab>
        <Tab eventKey='levels' title='Levels'>
          <IncupadLevelSection />
        </Tab>
        {/*
        <Tab eventKey='stacking' title='Stacking'>
          Setting
        </Tab>
        */}
      </Tabs>
    </section>
  );
}

export default IncupadTabSection;
