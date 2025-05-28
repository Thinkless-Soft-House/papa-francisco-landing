import { Button } from "@/components/ui/button";
import { ArrowDown, Heart } from "lucide-react";

const HeroSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-spiritual-heavenly via-spiritual-peace to-spiritual-warm opacity-90"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in max-w-2xl lg:max-w-none">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-spiritual-gold">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">Des paroles qui touchent l'âme</span>
              </div>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight break-words">
                30 Prières les Plus
                <span className="block text-spiritual-gold">Puissantes</span>
                <span className="block">du Pape François</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto lg:mx-0">
                Trouvez le réconfort, la foi et l'espérance dans des paroles qui illuminent le cœur et fortifient l'esprit
              </p>
            </div>
            <div className="space-y-4 lg:space-y-6">
              <Button 
                onClick={scrollToOffer}
                size="lg" 
                className="w-full sm:w-auto bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                <span className="hidden sm:inline">JE VEUX RENFORCER MA FOI MAINTENANT</span>
                <span className="sm:hidden">RENFORCER MA FOI</span>
                <ArrowDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 text-center lg:text-left">
                ✓ Livraison immédiate par e-mail • ✓ Format PDF • ✓ Garantie 7 jours
              </p>
            </div>
          </div>
          {/* Mockup du eBook - imagem igual */}
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
