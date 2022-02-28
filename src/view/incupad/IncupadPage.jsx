import { useEffect, useState } from "react";
import { Tabs, Tab } from 'react-bootstrap';

import IncupadNavBar from "./section/IncupadNavBar";
import IncupadBannerSection from "./section/IncupadBannerSection";
import IncupadFeaturedSection from "./section/IncupadFeaturedSection";
import IncupadPoolsSection from "./section/IncupadPoolsSection";
import ScrollToTopOnMount from"../../components/ScrollToTopOnMount";
import IncupadBarSection from "./section/IncupadBarSection";
import IncupadAboutSection from "../incupadAbout/IncupadAboutSection"
import IncupadLevels from "../incupadLevels/IncupadLevels";


const IncupadPage = () => {
  const [key, setKey] = useState('home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="incupad-outer">
    
      {/* <ScrollToTopOnMount/> */}
      <IncupadNavBar />
      <IncupadBannerSection />
      <IncupadBarSection/>
      <IncupadAboutSection/> 
      <IncupadLevels/>
      <IncupadFeaturedSection />  
      <IncupadPoolsSection /> 

    </section>
  );
};

export default IncupadPage;
