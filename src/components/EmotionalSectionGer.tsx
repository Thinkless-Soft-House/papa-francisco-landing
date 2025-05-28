const EmotionalSectionGer = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-spiritual-warm to-spiritual-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Emotionales Bild */}
          <div className="flex-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-spiritual-lightGold/20 rounded-3xl blur-xl"></div>
              <img 
                src="/lovable-uploads/popeger.webp" 
                alt="Papst Franziskus mit dem Buch 30 Mächtigste Gebete" 
                className="relative w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
          {/* Emotionaler Inhalt */}
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Fühlen Sie sich manchmal
                <span className="block text-spiritual-gold">fern von Gott?</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Manchmal führt uns das Leben auf schwierige Wege und wir fühlen uns von der Spiritualität getrennt...
                </p>
                <p>
                  <strong>Haben Sie sich schon gefragt:</strong>
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    Wie kann ich Gottes Gegenwart wieder spüren?
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    Wo finde ich Frieden im Alltagschaos?
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    Wie schaffe ich eine Gebetsroutine, die wirklich funktioniert?
                  </li>
                </ul>
                <p className="font-semibold text-spiritual-gold">
                  Die Worte von Papst Franziskus können das Licht sein, das Sie suchen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSectionGer;
// (Nenhum script de redirecionamento presente nesta página. Nenhuma alteração necessária aqui.)
