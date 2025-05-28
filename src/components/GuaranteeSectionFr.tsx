import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const GuaranteeSection = () => {
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
            <div className="flex-shrink-0 animate-scale-in">
              <img 
                src="/lovable-uploads/7daysfr.webp" 
                alt="Garantie 7 jours"
                className="w-48 h-48 md:w-64 md:h-64 drop-shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="flex-1 space-y-6 lg:space-y-8 animate-fade-in w-full overflow-hidden">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-spiritual-gold flex-shrink-0" />
                  <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 break-words">
                    Garantie Totale de
                    <span className="block text-spiritual-gold">7 Jours</span>
                  </h2>
                </div>
                <div className="space-y-4 text-base sm:text-lg text-gray-700">
                  <p className="leading-relaxed break-words">
                    Nous croyons tellement au pouvoir transformateur de ces prières que nous offrons une <strong>garantie inconditionnelle de 7 jours</strong>.
                  </p>
                  <p className="leading-relaxed break-words">
                    Si pour une raison quelconque vous estimez que l'eBook n'a pas répondu à vos attentes spirituelles, nous vous remboursons <strong>100% de votre investissement</strong>, sans questions ni complications.
                  </p>
                  <div className="bg-spiritual-warm/30 p-4 sm:p-6 rounded-2xl">
                    <p className="font-semibold text-gray-800 mb-2 break-words">Pourquoi offrons-nous cette garantie ?</p>
                    <p className="text-gray-700 break-words">
                      Parce que nous savons que ces prières du Pape François ont le pouvoir de toucher les cœurs et de renforcer la foi. Nous voulons que vous soyez totalement serein dans votre décision de grandir spirituellement.
                    </p>
                  </div>
                </div>
                <Button
                  onClick={scrollToOffer}
                  size="lg"
                  className="bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
                >
                  <ArrowRight className="mr-2 w-5 h-5 flex-shrink-0" />
                  J'ESSAIE SANS RISQUE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
