import { Button } from "@/components/ui/button";
import { Download, Clock, Star } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="oferta" className="py-16 sm:py-20 bg-gradient-to-br from-spiritual-gold/10 via-spiritual-warm to-spiritual-cream overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 flex justify-center animate-scale-in w-full">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-spiritual-gold/30 to-spiritual-lightGold/30 rounded-3xl blur-3xl"></div>
                <img 
                  src="/lovable-uploads/mockupfr.webp" 
                  alt="30 Prières les Plus Puissantes du Pape François"
                  className="relative w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left w-full">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight break-words">
                  Transformez Votre Vie
                  <span className="block text-spiritual-gold">avec la Prière</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Ne remettez pas à demain ce qui peut renforcer votre foi aujourd'hui. Des milliers de personnes ont déjà été bénies par ces paroles sacrées.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "✓ Livraison immédiate par e-mail",
                    "✓ Accès à vie au contenu", 
                    "✓ Garantie inconditionnelle de 7 jours",
                    "✓ Support chrétien dédié"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base text-gray-700">
                      <span className="text-spiritual-gold font-bold flex-shrink-0">{benefit.split(' ')[0]}</span>
                      <span className="break-words">{benefit.substring(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-spiritual-gold/10 p-4 sm:p-6 rounded-2xl border border-spiritual-gold/30 mx-auto max-w-md lg:max-w-none">
                  <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                    <Clock className="w-5 h-5 text-spiritual-gold flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Offre Spéciale</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 text-center lg:text-left">
                    Pour une durée limitée, commencez votre chemin spirituel pour seulement <span className="font-bold text-spiritual-gold">9,90 €</span> !
                  </p>
                </div>
                <a 
                      href="https://veagle-llc.mycartpanda.com/checkout/185554350:1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto max-w-full"
                    >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300 mt-4"
                >
                  <Download className="mr-2 w-5 h-5 flex-shrink-0" />
                  JE VEUX LE EBOOK MAINTENANT - 9,90 €
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
