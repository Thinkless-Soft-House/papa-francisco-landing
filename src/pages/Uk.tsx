import { Helmet } from "react-helmet-async";
import HeroSectionUk from "@/components/HeroSectionUk";
import EmotionalSectionUk from "@/components/EmotionalSectionUk";
import ProductPresentationUk from "@/components/ProductPresentationUk";
import PrayerExcerptsUk from "@/components/PrayerExcerptsUk";
import TestimonialsUk from "@/components/TestimonialsUk";
import PopeFrancisSectionUk from "@/components/PopeFrancisSectionUk";
import GuaranteeSectionUk from "@/components/GuaranteeSectionUk";
import FAQUk from "@/components/FAQUk";
import FinalCTAUk from "@/components/FinalCTAUk";
import MobileFixedCTAUk from "@/components/MobileFixedCTAUk";

const Uk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-peace to-white overflow-x-hidden">
      <Helmet>
        <script type="text/javascript" src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/cpsales.js"></script>
      </Helmet>
      <HeroSectionUk />
      <EmotionalSectionUk />
      <ProductPresentationUk />
      <PrayerExcerptsUk />
      <TestimonialsUk />
      <PopeFrancisSectionUk />
      <GuaranteeSectionUk />
      <FAQUk />
      <FinalCTAUk />
      <MobileFixedCTAUk />
    </div>
  );
};

export default Uk;
