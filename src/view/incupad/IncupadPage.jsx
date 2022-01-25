import IncupadNavBar from "./section/IncupadNavBar";
import IncupadBannerSection from "./section/IncupadBannerSection";
import IncupadUpcomingSection from "./section/IncupadUpcomingSection";
import IncupadCompleteSection from "./section/IncupadCompleteSection";

const IncupadPage = () => {
  return (
    <section className="incupad-outer">
      <IncupadNavBar />
      <IncupadBannerSection />
      <IncupadUpcomingSection />
      <IncupadCompleteSection />
    </section>
  );
};

export default IncupadPage;
