
import { Button } from "@/components/ui/button";
import { Download, Clock, Star } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-spiritual-gold/10 via-spiritual-warm to-spiritual-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Mockup grande */}
            <div className="flex-1 flex justify-center animate-scale-in">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-spiritual-gold/30 to-spiritual-lightGold/30 rounded-3xl blur-3xl"></div>
                <img 
                  src="/lovable-uploads/9adbb17e-4cbc-4d74-9bca-4581243f0bdb.png" 
                  alt="30 Orações Mais Poderosas do Papa Francisco"
                  className="relative w-96 md:w-[500px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Call to Action final */}
            <div className="flex-1 space-y-8 animate-fade-in text-center lg:text-left">
              
              <div className="space-y-6">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  Transforme Sua Vida
                  <span className="block text-spiritual-gold">com a Oração</span>
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Não deixe para amanhã o que pode fortalecer sua fé hoje. 
                  Milhares de pessoas já foram abençoadas por essas palavras sagradas.
                </p>

                {/* Benefícios rápidos */}
                <div className="space-y-3">
                  {[
                    "✓ Entrega imediata por e-mail",
                    "✓ Acesso vitalício ao conteúdo", 
                    "✓ Garantia incondicional de 7 dias",
                    "✓ Suporte cristão dedicado"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <span className="text-spiritual-gold font-bold">{benefit.split(' ')[0]}</span>
                      <span>{benefit.substring(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Urgência suave */}
                <div className="bg-spiritual-gold/10 p-6 rounded-2xl border border-spiritual-gold/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-spiritual-gold" />
                    <span className="font-semibold text-gray-800">Oferta Especial</span>
                  </div>
                  <p className="text-gray-700">
                    Por tempo limitado, você pode começar sua jornada espiritual por apenas 
                    <span className="font-bold text-spiritual-gold"> R$ 19,90</span>
                  </p>
                </div>

                {/* Botão principal */}
                <Button 
                  size="lg" 
                  className="w-full lg:w-auto bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-10 py-6 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="mr-3 w-6 h-6" />
                  QUERO TRANSFORMAR MINHA FÉ AGORA
                </Button>

                {/* Confiança */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-spiritual-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">Avaliado por milhares de fiéis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
