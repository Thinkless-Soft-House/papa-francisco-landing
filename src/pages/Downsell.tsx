
import HeroSection from "@/components/HeroSection";
import EmotionalSection from "@/components/EmotionalSection";
import ProductPresentation from "@/components/ProductPresentation";
import PrayerExcerpts from "@/components/PrayerExcerpts";
import Testimonials from "@/components/Testimonials";
import PopeFrancisSection from "@/components/PopeFrancisSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQ from "@/components/FAQ";
import FinalCTADownsell from "@/components/downsell/FinalCTADownsell";
import MobileFixedCTADownsell from "@/components/downsell/MobileFixedCTADownsell";
import DownsellAlert from "@/components/DownsellAlert";

const Downsell = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-peace to-white overflow-x-hidden">
      <DownsellAlert />
      <div className="pt-20"> {/* Espaço para o alerta fixo */}
        <HeroSection />
        <EmotionalSection />
        <ProductPresentation />
        <PrayerExcerpts />
        <Testimonials />
        <PopeFrancisSection />
        <GuaranteeSection />
        <FAQ />
        <FinalCTADownsell />
        <MobileFixedCTADownsell />
      </div>
    </div>
  );
};

export default Downsell;
