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
            
            {/* Selo de Garantia */}
            <div className="flex-shrink-0 animate-scale-in">
              <img 
                src="/lovable-uploads/7aeeb62f-f96c-425c-a7e1-a8dab366d3d1.png" 
                alt="Garantia de 7 dias"
                className="w-48 h-48 md:w-64 md:h-64 drop-shadow-xl"
                loading="lazy"
              />
            </div>

            {/* Conteúdo da garantia */}
            <div className="flex-1 space-y-6 lg:space-y-8 animate-fade-in w-full overflow-hidden">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-spiritual-gold flex-shrink-0" />
                  <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 break-words">
                    Garantia Total de
                    <span className="block text-spiritual-gold">7 Dias</span>
                  </h2>
                </div>
                
                <div className="space-y-4 text-base sm:text-lg text-gray-700">
                  <p className="leading-relaxed break-words">
                    Acreditamos tanto no poder transformador dessas orações que oferecemos 
                    uma <strong>garantia incondicional de 7 dias</strong>.
                  </p>
                  
                  <p className="leading-relaxed break-words">
                    Se por qualquer motivo você não sentir que o eBook atendeu suas expectativas 
                    espirituais, devolvemos <strong>100% do seu investimento</strong>, sem perguntas 
                    e sem complicações.
                  </p>

                  <div className="bg-spiritual-warm/30 p-4 sm:p-6 rounded-2xl">
                    <p className="font-semibold text-gray-800 mb-2 break-words">Por que oferecemos essa garantia?</p>
                    <p className="text-gray-700 break-words">
                      Porque sabemos que essas orações do Papa Francisco têm o poder de tocar 
                      corações e fortalecer a fé. Queremos que você tenha total tranquilidade 
                      em sua decisão de crescer espiritualmente.
                    </p>
                  </div>
                </div>

                  <Button 
                    onClick={scrollToOffer}
                    size="lg"
                    className="w-full sm:w-auto bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-normal break-words text-center"
                  >
                    QUERO COMEÇAR MINHA JORNADA AGORA
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

export default GuaranteeSection;
