import HeroSection from "@/components/HeroSectionFr";
import EmotionalSection from "@/components/EmotionalSectionFr";
import ProductPresentation from "@/components/ProductPresentationFr";
import PrayerExcerpts from "@/components/PrayerExcerptsFr";
import Testimonials from "@/components/TestimonialsFr";
import PopeFrancisSection from "@/components/PopeFrancisSectionFr";
import GuaranteeSection from "@/components/GuaranteeSectionFr";
import FAQ from "@/components/FAQFr";
import FinalCTA from "@/components/FinalCTAFr";
import MobileFixedCTA from "@/components/MobileFixedCTAFr";

const Fr = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-peace to-white overflow-x-hidden">
      <HeroSection />
      <EmotionalSection />
      <ProductPresentation />
      <PrayerExcerpts />
      <Testimonials />
      <PopeFrancisSection />
      <GuaranteeSection />
      <FAQ />
      <FinalCTA />
      <MobileFixedCTA />
    </div>
  );
};

export default Fr;
