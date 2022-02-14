import { Head } from '../components/Head';
import HomeBanner from '../elements/HomeSections/HomeBanner';
import HomeSectionTwo from '../elements/HomeSections/HomeSectionTwo';
import HomeTokenomicsSection from '../elements/HomeSections/HomeTokenomics/HomeTokenomicsSection';
import HomeFeatureSection from '../elements/HomeSections/HomeFeatureSection';
import HomeSectionSeven from '../elements/HomeSections/HomeSectionSeven';
import HomeSectionFive from '../elements/HomeSections/HomeSectionFive';
import HomeSectionPartnership from '../elements/HomeSections/HomeSectionPartnership';
import HomeSectionRoadmap from '../elements/HomeSections/HomeSectionRoadmap';
import HomeSectionSix from '../elements/HomeSections/HomeSectionSix';
import HomeFaqSection from '../elements/HomeSections/HomeFaqSection';

function Home() {
  return (
    <>
      <Head title='Home' />
      <HomeBanner />
      <HomeSectionTwo />
      <HomeFeatureSection />
      <HomeTokenomicsSection />
      <HomeSectionSeven />
      <HomeFaqSection />
      <HomeSectionFive />
      <HomeSectionPartnership />
      <HomeSectionRoadmap />
      <HomeSectionSix />
    </>
  );
}

export default Home;
