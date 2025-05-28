
const EmotionalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-spiritual-warm to-spiritual-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Imagem emocional */}
          <div className="flex-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-spiritual-lightGold/20 rounded-3xl blur-xl"></div>
              <img 
                src="/lovable-uploads/cb0d11f6-5a2d-4816-8710-047a8cfd56f0.png" 
                alt="Papa Francisco abraçando uma pessoa"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Conteúdo emocional */}
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Você sente que está
                <span className="block text-spiritual-gold">distante de Deus?</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Às vezes, a vida nos leva por caminhos difíceis e sentimos que perdemos a conexão com o sagrado...
                </p>
                <p>
                  <strong>Você já se perguntou:</strong>
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    Como posso sentir a presença de Deus novamente?
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    Onde encontrar paz em meio ao caos do dia a dia?
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-spiritual-gold">•</span>
                    Como criar uma rotina de oração que realmente funcione?
                  </li>
                </ul>
                <p className="font-semibold text-spiritual-gold">
                  As palavras do Papa Francisco podem ser a luz que você procura.
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
