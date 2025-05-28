import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const GuaranteeSectionGer = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Garantiesiegel */}
            <div className="flex-shrink-0 animate-scale-in">
              <img 
                src="/lovable-uploads/selo_7_tage_garantie.webp" 
                alt="7-Tage-Garantie" 
                className="w-48 h-48 md:w-64 md:h-64 drop-shadow-xl"
                loading="lazy"
              />
            </div>
            {/* Garantie-Inhalt */}
            <div className="flex-1 space-y-6 lg:space-y-8 animate-fade-in w-full overflow-hidden">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-spiritual-gold flex-shrink-0" />
                  <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 break-words">
                    Volle Garantie
                    <span className="block text-spiritual-gold">7 Tage</span>
                  </h2>
                </div>
                <div className="space-y-4 text-base sm:text-lg text-gray-700">
                  <p className="leading-relaxed break-words">
                    Wir glauben so sehr an die transformierende Kraft dieser Gebete, dass wir eine <strong>bedingungslose 7-Tage-Garantie</strong> anbieten.
                  </p>
                  <p className="leading-relaxed break-words">
                    Sollten Sie aus irgendeinem Grund das Gefühl haben, dass das eBook Ihre spirituellen Erwartungen nicht erfüllt, erstatten wir Ihnen <strong>100% Ihres Investments</strong> – ohne Fragen und ohne Komplikationen.
                  </p>
                  <div className="bg-spiritual-warm/30 p-4 sm:p-6 rounded-2xl">
                    <p className="font-semibold text-gray-800 mb-2 break-words">Warum bieten wir diese Garantie an?</p>
                    <p className="text-gray-700 break-words">
                      Weil wir wissen, dass diese Gebete von Papst Franziskus die Kraft haben, Herzen zu berühren und den Glauben zu stärken. Wir möchten, dass Sie völlige Sicherheit bei Ihrer Entscheidung für spirituelles Wachstum haben.
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={scrollToOffer}
                  size="lg"
                  className="w-full sm:w-auto bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-normal break-words text-center"
                >
                  ICH WILL MEINE REISE JETZT BEGINNEN
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSectionGer;
