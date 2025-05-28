
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Selo de Garantia */}
            <div className="flex-shrink-0 animate-scale-in">
              <img 
                src="/lovable-uploads/7aeeb62f-f96c-425c-a7e1-a8dab366d3d1.png" 
                alt="Garantia de 7 dias"
                className="w-48 h-48 md:w-64 md:h-64 drop-shadow-xl"
              />
            </div>

            {/* Conteúdo da garantia */}
            <div className="flex-1 space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-spiritual-gold" />
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800">
                    Garantia Total de
                    <span className="block text-spiritual-gold">7 Dias</span>
                  </h2>
                </div>
                
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Acreditamos tanto no poder transformador dessas orações que oferecemos 
                    uma <strong>garantia incondicional de 7 dias</strong>.
                  </p>
                  
                  <p className="leading-relaxed">
                    Se por qualquer motivo você não sentir que o eBook atendeu suas expectativas 
                    espirituais, devolvemos <strong>100% do seu investimento</strong>, sem perguntas 
                    e sem complicações.
                  </p>

                  <div className="bg-spiritual-warm/30 p-6 rounded-2xl">
                    <p className="font-semibold text-gray-800 mb-2">Por que oferecemos essa garantia?</p>
                    <p className="text-gray-700">
                      Porque sabemos que essas orações do Papa Francisco têm o poder de tocar 
                      corações e fortalecer a fé. Queremos que você tenha total tranquilidade 
                      em sua decisão de crescer espiritualmente.
                    </p>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  QUERO COMEÇAR MINHA JORNADA AGORA
                  <ArrowRight className="ml-2 w-5 h-5" />
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
