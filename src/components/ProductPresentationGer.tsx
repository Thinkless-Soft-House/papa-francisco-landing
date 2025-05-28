import { Button } from "@/components/ui/button";
import { Check, Download, Heart, BookOpen } from "lucide-react";

const ProductPresentationGer = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "30 sorgfältig ausgewählte Gebete",
    "Authentische Worte von Papst Franziskus",
    "Leitfaden zur Stärkung Ihres täglichen Glaubens",
    "Momente des Friedens und der Reflexion",
    "PDF-Format – überall lesbar",
    "Einfache und zugängliche Sprache"
  ];

  return (
    <section className="py-16 sm:py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 break-words">
            Entdecken Sie die transformierende Kraft
            <span className="block text-spiritual-gold">der Gebete von Papst Franziskus</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ein spiritueller Schatz, der Sie in jedem Moment des Gebets und der Reflexion begleitet
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Produkt-Mockup */}
          <div className="flex-1 flex justify-center animate-scale-in w-full">
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-spiritual-gold/20 to-spiritual-lightGold/20 rounded-3xl blur-2xl"></div>
              <img 
                src="/lovable-uploads/popeger-mockup.webp" 
                alt="30 Mächtigste Gebete von Papst Franziskus - eBook" 
                className="relative w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
          {/* Produktinformationen */}
          <div className="flex-1 space-y-6 lg:space-y-8 animate-fade-in w-full">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-spiritual-gold">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-semibold text-sm sm:text-base">Digitales eBook im PDF-Format</span>
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center lg:text-left">
                Was Sie erwartet:
              </h3>
              <div className="grid gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-spiritual-gold/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-spiritual-gold" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 break-words">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-spiritual-warm/30 p-4 sm:p-6 rounded-2xl max-w-md mx-auto lg:max-w-none">
                <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-spiritual-gold flex-shrink-0" />
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Für wen ist dieses eBook:</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 text-center lg:text-left">
                  Christen, die ihren Glauben stärken, eine bedeutungsvolle Andachtsroutine schaffen und Frieden durch die inspirierenden Worte von Papst Franziskus finden möchten.
                </p>
              </div>
              <Button 
                onClick={scrollToOffer}
                size="lg" 
                className="w-full bg-spiritual-gold hover:bg-spiritual-gold/90 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                ICH WILL JETZT ERHALTEN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentationGer;
