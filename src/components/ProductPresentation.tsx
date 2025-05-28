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
    "30 orações cuidadosamente selecionadas",
    "Palavras autênticas do Papa Francisco",
    "Guia para fortalecer sua fé diária",
    "Momentos de paz e reflexão",
    "Formato PDF para ler em qualquer lugar",
    "Linguagem simples e acessível"
  ];

  return (
    <section className="py-16 sm:py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 break-words">
            Descubra o Poder Transformador
            <span className="block text-spiritual-gold">das Orações do Papa Francisco</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Um tesouro espiritual que vai acompanhar você em cada momento de oração e reflexão
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Mockup do produto */}
          <div className="flex-1 flex justify-center animate-scale-in w-full">
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-spiritual-gold/20 to-spiritual-lightGold/20 rounded-3xl blur-2xl"></div>
              <img 
                src="/lovable-uploads/9adbb17e-4cbc-4d74-9bca-4581243f0bdb.png" 
                alt="eBook 30 Orações do Papa Francisco"
                className="relative w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Informações do produto */}
          <div className="flex-1 space-y-6 lg:space-y-8 animate-fade-in w-full">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-spiritual-gold">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-semibold text-sm sm:text-base">eBook Digital em PDF</span>
              </div>
              
              <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center lg:text-left">
                O que você vai encontrar:
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
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Para quem é este eBook:</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 text-center lg:text-left">
                  Cristãos que buscam fortalecer sua fé, criar uma rotina devocional significativa 
                  e encontrar paz através das palavras inspiradoras do Papa Francisco.
                </p>
              </div>

              <Button 
                onClick={scrollToOffer}
                size="lg" 
                className="w-full bg-spiritual-gold hover:bg-spiritual-gold/90 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                QUERO RECEBER AGORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;
