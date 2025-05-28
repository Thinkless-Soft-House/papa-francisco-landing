import { Crown, Heart, Globe } from "lucide-react";

const PopeFrancisSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-spiritual-heavenly to-spiritual-peace">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-6 bg-spiritual-gold/20 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/a378db39-20d7-4c08-b54b-4fdee7ac3fda.png" 
                alt="Pape François"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Crown className="w-8 h-8 text-spiritual-gold" />
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800">
                  Pape François
                </h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Jorge Mario Bergoglio</strong>, connu mondialement comme le Pape François, est le premier pape jésuite et le premier pape né en Amérique.
                </p>
                <p>
                  Depuis son élection en 2013, il est une voix puissante d'<strong>espérance, de miséricorde et d'amour</strong> pour des millions de personnes à travers le monde.
                </p>
                <div className="grid gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-spiritual-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Pasteur des Cœurs</p>
                      <p className="text-gray-600">Ses paroles touchent et consolent des âmes dans le monde entier</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-spiritual-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Leader Spirituel Mondial</p>
                      <p className="text-gray-600">Guide spirituel de plus de 1,3 milliard de catholiques</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 p-6 rounded-2xl border border-spiritual-gold/20">
                  <p className="text-gray-700 italic">
                    « La prière humble et confiante fait des miracles. »
                  </p>
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
