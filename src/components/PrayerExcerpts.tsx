
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const PrayerExcerpts = () => {
  const excerpts = [
    {
      title: "Oração pela Paz",
      text: "Senhor, fazei de mim um instrumento da vossa paz. Onde houver discórdia, que eu leve a união; onde houver erro, que eu leve a verdade...",
      theme: "Paz Interior"
    },
    {
      title: "Oração pelos Necessitados",
      text: "Deus misericordioso, ajudai-nos a ver Cristo nos pobres e necessitados, e a servi-lo com amor e compaixão em todos aqueles que sofrem...",
      theme: "Caridade"
    },
    {
      title: "Oração pela Família",
      text: "Senhor Jesus, abençoai nossas famílias e fazei delas pequenas igrejas domésticas, onde o amor e a fé possam crescer e se fortalecer...",
      theme: "Família"
    },
    {
      title: "Oração pela Esperança",
      text: "Deus da esperança, quando tudo parece escuro e difícil, lembrai-nos de que sois nossa luz e nossa salvação, nossa força e nossa paz...",
      theme: "Esperança"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-spiritual-heavenly to-spiritual-peace">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trechos que Tocam
            <span className="block text-spiritual-gold">o Coração</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça algumas das orações mais poderosas que você encontrará no eBook
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

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-spiritual-gold">E muito mais...</span> 26 outras orações poderosas esperam por você!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrayerExcerpts;
