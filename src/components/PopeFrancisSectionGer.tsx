import { Crown, Heart, Globe } from "lucide-react";

const PopeFrancisSectionGer = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-spiritual-heavenly to-spiritual-peace">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Bild von Papst Franziskus */}
          <div className="flex-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-6 bg-spiritual-gold/20 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/a378db39-20d7-4c08-b54b-4fdee7ac3fda.png" 
                alt="Papst Franziskus"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
          {/* Spirituelle Biografie */}
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Crown className="w-8 h-8 text-spiritual-gold" />
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800">
                  Papst Franziskus
                </h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Jorge Mario Bergoglio</strong>, weltweit bekannt als Papst Franziskus, ist der erste jesuitische Papst und der erste Papst aus Amerika.
                </p>
                <p>
                  Seit seiner Wahl 2013 ist er eine kraftvolle Stimme der <strong>Hoffnung, Barmherzigkeit und Liebe</strong> für Millionen Menschen weltweit.
                </p>
                <div className="grid gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-spiritual-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Hirte der Herzen</p>
                      <p className="text-gray-600">Seine Worte berühren und trösten Seelen auf der ganzen Welt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-spiritual-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Globaler Glaubensführer</p>
                      <p className="text-gray-600">Spiritueller Führer von über 1,3 Milliarden Katholiken</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 p-6 rounded-2xl border border-spiritual-gold/20">
                  <p className="font-playfair text-xl text-spiritual-gold italic text-center">
                    "Das Gebet ist der Sauerstoff der Seele"
                  </p>
                  <p className="text-center text-gray-600 mt-2">- Papst Franziskus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopeFrancisSectionGer;
