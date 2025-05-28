import { Button } from "@/components/ui/button";
import { Check, Download, Heart, BookOpen } from "lucide-react";

const ProductPresentation = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "30 prières soigneusement sélectionnées",
    "Paroles authentiques du Pape François",
    "Guide pour renforcer votre foi au quotidien",
    "Moments de paix et de réflexion",
    "Format PDF à lire partout",
    "Langage simple et accessible"
  ];

  return (
    <section className="py-16 sm:py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 break-words">
            Découvrez le pouvoir transformateur
            <span className="block text-spiritual-gold">des prières du Pape François</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Un trésor spirituel qui vous accompagnera à chaque moment de prière et de réflexion
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 flex justify-center animate-scale-in w-full">
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-spiritual-gold/20 to-spiritual-lightGold/20 rounded-3xl blur-2xl"></div>
              <img 
                src="/lovable-uploads/mockupfr.webp" 
                alt="eBook 30 Prières du Pape François"
                className="relative w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-1 space-y-6 lg:space-y-8 animate-fade-in w-full">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-spiritual-gold">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-semibold text-sm sm:text-base">eBook numérique en PDF</span>
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center lg:text-left">
                Ce que vous allez trouver :
              </h3>
              <div className="grid gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-spiritual-gold flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                onClick={scrollToOffer}
                size="lg"
                className="bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
              >
                <Download className="mr-2 w-5 h-5 flex-shrink-0" />
                J'ACHÈTE MAINTENANT - 9,90 €
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;
