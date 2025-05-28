import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const PrayerExcerptsGer = () => {
  const excerpts = [
    {
      title: "Gebet für den Frieden",
      text: "Herr, mache mich zu einem Werkzeug deines Friedens. Wo Zwietracht ist, lass mich Einheit bringen; wo Irrtum ist, lass mich die Wahrheit bringen...",
      theme: "Innerer Frieden"
    },
    {
      title: "Gebet für die Bedürftigen",
      text: "Barmherziger Gott, hilf uns, Christus in den Armen und Bedürftigen zu sehen und ihm mit Liebe und Mitgefühl in allen Leidenden zu dienen...",
      theme: "Nächstenliebe"
    },
    {
      title: "Gebet für die Familie",
      text: "Herr Jesus, segne unsere Familien und mache sie zu kleinen Hauskirchen, in denen Liebe und Glaube wachsen und sich stärken können...",
      theme: "Familie"
    },
    {
      title: "Gebet der Hoffnung",
      text: "Gott der Hoffnung, wenn alles dunkel und schwer erscheint, erinnere uns daran, dass du unser Licht und unser Heil bist, unsere Kraft und unser Frieden...",
      theme: "Hoffnung"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-spiritual-heavenly to-spiritual-peace">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Auszüge, die das Herz
            <span className="block text-spiritual-gold">berühren</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie einige der kraftvollsten Gebete, die Sie im eBook finden werden
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
            <span className="font-semibold text-spiritual-gold">Und vieles mehr...</span> 26 weitere kraftvolle Gebete warten auf Sie!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrayerExcerptsGer;
