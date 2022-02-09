import IncupadNavBar from "./section/IncupadNavBar";
import IncupadBannerSection from "./section/IncupadBannerSection";
import IncupadFeaturedSection from "./section/IncupadFeaturedSection";
import IncupadPoolsSection from "./section/IncupadPoolsSection";
import { useEffect } from "react";
import ScrollToTop from '../../components/ScrollToTop'

const IncupadPage = () => {
  

  return (
    <section className="incupad-outer">
      <ScrollToTop />
      <IncupadNavBar />
      <IncupadBannerSection />
      <IncupadFeaturedSection />
      {/* <IncupadPoolsSection /> */}
    </section>
  );
};

export default IncupadPage;
