
import { Crown, Heart, Globe } from "lucide-react";

const PopeFrancisSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-spiritual-heavenly to-spiritual-peace">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Foto do Papa Francisco */}
          <div className="flex-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-6 bg-spiritual-gold/20 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/a378db39-20d7-4c08-b54b-4fdee7ac3fda.png" 
                alt="Papa Francisco"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Biografia espiritual */}
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Crown className="w-8 h-8 text-spiritual-gold" />
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800">
                  Papa Francisco
                </h2>
              </div>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Jorge Mario Bergoglio</strong>, conhecido mundialmente como Papa Francisco, 
                  é o primeiro Papa jesuíta e o primeiro Papa nascido na América.
                </p>
                
                <p>
                  Desde sua eleição em 2013, tem sido uma voz poderosa de <strong>esperança, 
                  misericórdia e amor</strong> para milhões de pessoas ao redor do mundo.
                </p>

                <div className="grid gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-spiritual-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Pastor dos Corações</p>
                      <p className="text-gray-600">Suas palavras tocam e consolam almas em todo o mundo</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-spiritual-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Líder Global da Fé</p>
                      <p className="text-gray-600">Guia espiritual de mais de 1,3 bilhão de católicos</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 p-6 rounded-2xl border border-spiritual-gold/20">
                  <p className="font-playfair text-xl text-spiritual-gold italic text-center">
                    "A oração é o oxigênio da alma"
                  </p>
                  <p className="text-center text-gray-600 mt-2">- Papa Francisco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopeFrancisSection;
