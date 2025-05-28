
import { Button } from "@/components/ui/button";
import { Check, Download, Heart, BookOpen } from "lucide-react";

const ProductPresentation = () => {
  const benefits = [
    "30 orações cuidadosamente selecionadas",
    "Palavras autênticas do Papa Francisco",
    "Guia para fortalecer sua fé diária",
    "Momentos de paz e reflexão",
    "Formato PDF para ler em qualquer lugar",
    "Linguagem simples e acessível"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Descubra o Poder Transformador
            <span className="block text-spiritual-gold">das Orações do Papa Francisco</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um tesouro espiritual que vai acompanhar você em cada momento de oração e reflexão
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Mockup do produto */}
          <div className="flex-1 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-spiritual-gold/20 to-spiritual-lightGold/20 rounded-3xl blur-2xl"></div>
              <img 
                src="/lovable-uploads/9adbb17e-4cbc-4d74-9bca-4581243f0bdb.png" 
                alt="eBook 30 Orações do Papa Francisco"
                className="relative w-80 md:w-96 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Informações do produto */}
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-spiritual-gold">
                <BookOpen className="w-6 h-6" />
                <span className="font-semibold">eBook Digital em PDF</span>
              </div>
              
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gray-800">
                O que você vai encontrar:
              </h3>

              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-spiritual-gold/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-spiritual-gold" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-spiritual-warm/30 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-spiritual-gold" />
                  <span className="font-semibold text-gray-800">Para quem é este eBook:</span>
                </div>
                <p className="text-gray-700">
                  Cristãos que buscam fortalecer sua fé, criar uma rotina devocional significativa 
                  e encontrar paz através das palavras inspiradoras do Papa Francisco.
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-spiritual-gold hover:bg-spiritual-gold/90 text-white py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 w-5 h-5" />
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
