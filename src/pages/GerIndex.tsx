import { Helmet } from "react-helmet-async";
import HeroSectionGer from "@/components/HeroSectionGer";
import EmotionalSectionGer from "@/components/EmotionalSectionGer";
import ProductPresentationGer from "@/components/ProductPresentationGer";
import PrayerExcerptsGer from "@/components/PrayerExcerptsGer";
import TestimonialsGer from "@/components/TestimonialsGer";
import PopeFrancisSectionGer from "@/components/PopeFrancisSectionGer";
import GuaranteeSectionGer from "@/components/GuaranteeSectionGer";
import FAQGer from "@/components/FAQGer";
import FinalCTAGer from "@/components/FinalCTAGer";
import MobileFixedCTAGer from "@/components/MobileFixedCTAGer";

const GerIndex = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-peace to-white overflow-x-hidden">
      <Helmet>
        <script type="text/javascript" src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/cpsales.js"></script>
      </Helmet>
      <HeroSectionGer />
      <EmotionalSectionGer />
      <ProductPresentationGer />
      <PrayerExcerptsGer />
      <TestimonialsGer />
      <PopeFrancisSectionGer />
      <GuaranteeSectionGer />
      <FAQGer />
      <FinalCTAGer />
      <MobileFixedCTAGer />
    </div>
  );
};

export default GerIndex;
