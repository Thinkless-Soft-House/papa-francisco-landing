import { Button } from "@/components/ui/button";
import { ArrowDown, Heart } from "lucide-react";

const HeroSectionGer = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hintergrund mit sanftem Farbverlauf */}
      <div className="absolute inset-0 bg-gradient-to-br from-spiritual-heavenly via-spiritual-peace to-spiritual-warm opacity-90"></div>
      {/* Subtiles Hintergrundmuster */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Textinhalt */}
          <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in max-w-2xl lg:max-w-none">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-spiritual-gold">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">Worte, die die Seele berühren</span>
              </div>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight break-words">
                30 Kraftvollste Gebete
                <span className="block text-spiritual-gold">von Papst Franziskus</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto lg:mx-0">
                Finden Sie Trost, Glauben und Hoffnung in Worten, die das Herz erleuchten und den Geist stärken
              </p>
            </div>
            <div className="space-y-4 lg:space-y-6">
              <Button 
                onClick={scrollToOffer}
                size="lg" 
                className="w-full sm:w-auto bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                <span className="hidden sm:inline">ICH WILL MEINEN GLAUBEN STÄRKEN</span>
                <span className="sm:hidden">MEINEN GLAUBEN STÄRKEN</span>
                <ArrowDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 text-center lg:text-left">
                ✓ Sofortige Lieferung per E-Mail • ✓ PDF-Format • ✓ 7 Tage Garantie
              </p>
            </div>
          </div>
          {/* eBook-Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in w-full">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-spiritual-gold/20 to-spiritual-lightGold/20 rounded-3xl blur-xl"></div>
              <img 
                src="/lovable-uploads/popeger-mockup.webp" 
                alt="30 Mächtigste Gebete von Papst Franziskus - eBook" 
                className="relative w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll-Indikator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-spiritual-gold" />
      </div>
    </section>
  );
};

export default HeroSectionGer;
