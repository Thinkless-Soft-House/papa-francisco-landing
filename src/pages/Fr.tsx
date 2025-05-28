import HeroSection from "@/components/HeroSection";
import EmotionalSection from "@/components/EmotionalSection";
import ProductPresentation from "@/components/ProductPresentation";
import PrayerExcerpts from "@/components/PrayerExcerpts";
import Testimonials from "@/components/Testimonials";
import PopeFrancisSection from "@/components/PopeFrancisSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import MobileFixedCTA from "@/components/MobileFixedCTA";

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
