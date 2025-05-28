const EmotionalSectionUk = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-spiritual-warm to-spiritual-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Imagem emocional */}          <div className="flex-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-spiritual-lightGold/20 rounded-3xl blur-xl"></div>
              <img 
                src="/lovable-uploads/popeuk.webp" 
                alt="Pope Francis embracing a person"
                className="relative w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Conteúdo emocional */}
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Do you feel you are
                <span className="block text-spiritual-gold">distant from God?</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Sometimes, life takes us through difficult paths and we feel we have lost our connection with the sacred...
                </p>
                <p>
                  <strong>Have you ever wondered:</strong>
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    How can I feel God's presence again?
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    Where can I find peace amidst the chaos of daily life?
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    How can I create a prayer routine that truly works?
                  </li>
                </ul>
                <p className="font-semibold text-spiritual-gold">
                  Pope Francis's words can be the light you are looking for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSectionUk;
