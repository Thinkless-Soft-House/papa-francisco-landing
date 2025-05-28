import { Button } from "@/components/ui/button";
import { Download, Clock, Star } from "lucide-react";
import Countdown from "@/components/Countdown";

const FinalCTADownsell = () => {
  return (
    <section id="oferta" className="py-16 sm:py-20 bg-gradient-to-br from-spiritual-gold/10 via-spiritual-warm to-spiritual-cream overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Mockup grande */}
            <div className="flex-1 flex justify-center animate-scale-in w-full">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-spiritual-gold/30 to-spiritual-lightGold/30 rounded-3xl blur-3xl"></div>
                <img 
                  src="/lovable-uploads/9adbb17e-4cbc-4d74-9bca-4581243f0bdb.png" 
                  alt="30 Orações Mais Poderosas do Papa Francisco"
                  className="relative w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Call to Action final */}
            <div className="flex-1 space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left w-full">
              
              <div className="space-y-4 lg:space-y-6">
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight break-words">
                  Transforme Sua Vida
                  <span className="block text-spiritual-gold">com a Oração</span>
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Não deixe para amanhã o que pode fortalecer sua fé hoje. 
                  Milhares de pessoas já foram abençoadas por essas palavras sagradas.
                </p>

                {/* Benefícios rápidos */}
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "✓ Entrega imediata por e-mail",
                    "✓ Acesso vitalício ao conteúdo", 
                    "✓ Garantia incondicional de 7 dias",
                    "✓ Suporte cristão dedicado"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base text-gray-700">
                      <span className="text-spiritual-gold font-bold flex-shrink-0">{benefit.split(' ')[0]}</span>
                      <span className="break-words">{benefit.substring(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Urgência suave */}
                <div className="bg-spiritual-gold/10 p-4 sm:p-6 rounded-2xl border border-spiritual-gold/30 mx-auto max-w-md lg:max-w-none">
                  <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                    <Clock className="w-5 h-5 text-spiritual-gold flex-shrink-0" />
                    <span className="font-semibold text-gray-800">Oferta Especial</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 text-center lg:text-left mb-4">
                    Por tempo limitado, você pode começar sua jornada espiritual por apenas 
                    <span className="font-bold text-spiritual-gold"> R$ 19,90</span>
                  </p>
                  <Countdown className="mt-4" />
                </div>

                {/* Botão principal */}
                <div className="flex justify-center lg:justify-start">
                  <a 
                      href="https://pay.kirvano.com/e7fc57ad-014d-48f5-9631-1e40178cec24" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto max-w-full"
                    >
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-full"
                  >
                    <Download className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="hidden sm:inline">QUERO TRANSFORMAR MINHA FÉ AGORA</span>
                    <span className="sm:hidden text-center">TRANSFORMAR MINHA FÉ</span>
                  </Button>
                  </a>
                </div>

                {/* Confiança */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-spiritual-gold flex-wrap pb-[30px]">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">Avaliado por milhares de fiéis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTADownsell;
