
import { Button } from "@/components/ui/button";
import { ArrowDown, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-spiritual-heavenly via-spiritual-peace to-spiritual-warm opacity-90"></div>
      
      {/* Padrão sutil de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Conteúdo textual */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-spiritual-gold">
                <Heart className="w-6 h-6" />
                <span className="text-sm font-medium tracking-wide uppercase">Palavras que tocam a alma</span>
              </div>
              
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                30 Orações Mais
                <span className="block text-spiritual-gold">Poderosas</span>
                <span className="block">do Papa Francisco</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl">
                Encontre conforto, fé e esperança em palavras que iluminam o coração e fortalecem o espírito
              </p>
            </div>

            <div className="space-y-6">
              <Button 
                size="lg" 
                className="bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                QUERO FORTALECER MINHA FÉ AGORA
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-sm text-gray-500">
                ✓ Entrega imediata por e-mail • ✓ Formato PDF • ✓ Garantia de 7 dias
              </p>
            </div>
          </div>

          {/* Mockup do eBook */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-spiritual-gold/20 to-spiritual-lightGold/20 rounded-3xl blur-xl"></div>
              <img 
                src="/lovable-uploads/9adbb17e-4cbc-4d74-9bca-4581243f0bdb.png" 
                alt="30 Orações Mais Poderosas do Papa Francisco - eBook"
                className="relative w-80 md:w-96 lg:w-[450px] h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-spiritual-gold" />
      </div>
    </section>
  );
};

export default HeroSection;
