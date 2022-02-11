import { Head } from '../components/Head';
import HomeBanner from '../elements/HomeSections/HomeBanner';
import HomeSectionTwo from '../elements/HomeSections/HomeSectionTwo';
import HomeSectionFour from '../elements/HomeSections/HomeSectionFour';
import HomeSectionThree from '../elements/HomeSections/HomeSectionThree';
import HomeSectionSeven from '../elements/HomeSections/HomeSectionSeven';
import HomeSectionFive from '../elements/HomeSections/HomeSectionFive';
import HomeSectionPartnership from '../elements/HomeSections/HomeSectionPartnership';
import HomeSectionRoadmap from '../elements/HomeSections/HomeSectionRoadmap';
import HomeSectionSix from '../elements/HomeSections/HomeSectionSix';

function Home() {
  return (
    <>
      <Head title='Home' />
      <HomeBanner />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionSeven />
      <HomeSectionFive />
      <HomeSectionPartnership />
      <HomeSectionRoadmap />
      <HomeSectionSix />
    </>
  );
}

export default Home;
