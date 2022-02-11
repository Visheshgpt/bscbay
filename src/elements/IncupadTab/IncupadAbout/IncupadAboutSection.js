import AboutCrossChain from './AboutCrossChain';
import AboutFeature from './AboutFeature';
import AboutPartner from './AboutPartner';

function IncupadAboutSection() {
  return (
    <div className='incupad_tabs_about about text-white text-center'>
      <AboutFeature />
      <AboutCrossChain />
      <AboutPartner />
    </div>
  );
}

export default IncupadAboutSection;
