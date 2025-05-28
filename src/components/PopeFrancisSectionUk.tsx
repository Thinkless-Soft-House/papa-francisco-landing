import { Crown, Heart, Globe } from "lucide-react";

const PopeFrancisSectionUk = () => {
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
                alt="Pope Francis"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Biografia espiritual */}
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Crown className="w-8 h-8 text-spiritual-gold" />
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800">
                  Pope Francis
                </h2>
              </div>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Jorge Mario Bergoglio</strong>, known worldwide as Pope Francis, 
                  is the first Jesuit Pope and the first Pope born in the Americas.
                </p>
                
                <p>
                  Since his election in 2013, he has been a powerful voice of <strong>hope, 
                  mercy and love</strong> for millions of people around the world.
                </p>

                <div className="grid gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-spiritual-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Shepherd of Hearts</p>
                      <p className="text-gray-600">His words touch and console souls around the world</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-spiritual-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Global Leader of Faith</p>
                      <p className="text-gray-600">Spiritual guide to more than 1.3 billion Catholics</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 p-6 rounded-2xl border border-spiritual-gold/20">
                  <p className="font-playfair text-xl text-spiritual-gold italic text-center">
                    "Prayer is the oxygen of the soul"
                  </p>
                  <p className="text-center text-gray-600 mt-2">- Pope Francis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopeFrancisSectionUk;
