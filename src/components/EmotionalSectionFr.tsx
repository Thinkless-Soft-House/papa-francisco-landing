const EmotionalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-spiritual-warm to-spiritual-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-spiritual-lightGold/20 rounded-3xl blur-xl"></div>
              <img 
                src="/lovable-uploads/popefr1.webp" 
                alt="Le Pape François étreignant une personne"
                className="relative w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Vous sentez-vous
                <span className="block text-spiritual-gold">éloigné de Dieu ?</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Parfois, la vie nous mène sur des chemins difficiles et nous avons l'impression d'avoir perdu le lien avec le sacré...
                </p>
                <p>
                  <strong>Vous êtes-vous déjà demandé :</strong>
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    Comment ressentir à nouveau la présence de Dieu ?
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    Où trouver la paix au milieu du chaos quotidien ?
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    Comment créer une routine de prière vraiment efficace ?
                  </li>
                </ul>
                <p className="font-semibold text-spiritual-gold">
                  Les paroles du Pape François peuvent être la lumière que vous cherchez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
