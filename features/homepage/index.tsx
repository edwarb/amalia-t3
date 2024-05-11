import IntroSection from "./components/01IntroSection";
import LandingSection from "./components/02LandingSection";
import IntroFacility from "./components/03IntroFacility";
import FormRegistration from "./components/04FormRegistration";
import TestimoniSection from "./components/05TestimoniSection";
import PartnerSection from "./components/06PartnerSection";
import FacebookPage from "./components/07FacebookPage";

function HomepageComponent() {
  return (
    <>
      <IntroSection />
      <LandingSection />
      <IntroFacility />
      <FormRegistration />
      <TestimoniSection />
      <PartnerSection />
      <FacebookPage />
    </>
  );
}

export default HomepageComponent;
