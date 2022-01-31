import IncupadNavBar from "./section/IncupadNavBar";
import IncupadBannerSection from "./section/IncupadBannerSection";
import IncupadFeaturedSection from "./section/IncupadFeaturedSection";
import IncupadPoolsSection from "./section/IncupadPoolsSection";

const IncupadPage = () => {
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
