import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const PrayerExcerpts = () => {
  const excerpts = [
    {
      title: "Prière pour la Paix",
      text: "Seigneur, fais de moi un instrument de ta paix. Là où il y a la discorde, que j'apporte l'union ; là où il y a l'erreur, que j'apporte la vérité...",
      theme: "Paix intérieure"
    },
    {
      title: "Prière pour les Nécessiteux",
      text: "Dieu miséricordieux, aide-nous à voir le Christ dans les pauvres et les nécessiteux, et à le servir avec amour et compassion en tous ceux qui souffrent...",
      theme: "Charité"
    },
    {
      title: "Prière pour la Famille",
      text: "Seigneur Jésus, bénis nos familles et fais-en de petites églises domestiques, où l'amour et la foi peuvent grandir et se renforcer...",
      theme: "Famille"
    },
    {
      title: "Prière pour l'Espérance",
      text: "Dieu de l'espérance, quand tout semble sombre et difficile, rappelle-nous que tu es notre lumière et notre salut, notre force et notre paix...",
      theme: "Espérance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-spiritual-heavenly to-spiritual-peace">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Extraits qui Touchent
            <span className="block text-spiritual-gold">le Cœur</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes des prières les plus puissantes que vous trouverez dans l'eBook
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {excerpts.map((excerpt, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-spiritual-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Quote className="w-6 h-6 text-spiritual-gold" />
                    <span className="text-sm font-semibold text-spiritual-gold uppercase tracking-wide">
                      {excerpt.theme}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-gray-800">
                    {excerpt.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{excerpt.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrayerExcerpts;
