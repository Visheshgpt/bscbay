import IncupadNavBar from "./section/IncupadNavBar";
import IncupadBannerSection from "./section/IncupadBannerSection";
import IncupadFeaturedSection from "./section/IncupadFeaturedSection";
import IncupadPoolsSection from "./section/IncupadPoolsSection";
import { useEffect } from "react";

const IncupadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="incupad-outer">
      <IncupadNavBar />
      <IncupadBannerSection />
      <IncupadFeaturedSection />
      {/* <IncupadPoolsSection /> */}
    </section>
  );
};

export default IncupadPage;
