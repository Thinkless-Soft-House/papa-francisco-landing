
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      city: "São Paulo, SP",
      text: "Essas orações transformaram minha rotina de fé. Sinto uma paz que há muito tempo não experimentava. O Papa Francisco tem um dom especial para tocar nossa alma.",
      rating: 5
    },
    {
      name: "João Santos",
      city: "Rio de Janeiro, RJ", 
      text: "Como pai de família, encontrei nessas palavras a força que precisava. Agora leio uma oração todos os dias com minha esposa e filhos. Recomendo de coração!",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      city: "Belo Horizonte, MG",
      text: "Estava passando por um momento difícil e essas orações me deram esperança. As palavras do Papa Francisco são um bálsamo para a alma. Gratidão imensa!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Vidas Transformadas pela
            <span className="block text-spiritual-gold">Palavra de Deus</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como essas orações têm tocado e fortalecido a fé de milhares de pessoas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-spiritual-warm/20 border-spiritual-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Estrelas */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-spiritual-gold text-spiritual-gold" />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-spiritual-gold/60" />

                  {/* Depoimento */}
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Autor */}
                  <div className="border-t border-spiritual-gold/20 pt-6">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.city}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Papa Francisco no fundo */}
        <div className="relative mt-16 text-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 opacity-10">
            <img 
              src="/lovable-uploads/a378db39-20d7-4c08-b54b-4fdee7ac3fda.png" 
              alt="Papa Francisco"
              className="w-32 h-auto"
            />
          </div>
          <div className="relative z-10 bg-white/80 backdrop-blur-sm inline-block px-8 py-4 rounded-full">
            <p className="text-spiritual-gold font-semibold">
              + 10.000 pessoas já foram abençoadas por essas orações
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
