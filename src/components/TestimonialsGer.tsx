import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsGer = () => {
  const testimonials = [
    {
      name: "Maria Schmidt",
      city: "Berlin",
      text: "Diese Gebete haben meine Glaubensroutine verändert. Ich spüre einen Frieden, den ich lange nicht mehr erlebt habe. Papst Franziskus hat eine besondere Gabe, unsere Seele zu berühren.",
      rating: 5,
      image: "/lovable-uploads/maria.webp"
    },
    {
      name: "Johann Bauer",
      city: "München",
      text: "Als Familienvater habe ich in diesen Worten die Kraft gefunden, die ich brauchte. Jetzt lese ich jeden Tag ein Gebet mit meiner Frau und meinen Kindern. Von Herzen zu empfehlen!",
      rating: 5,
      image: "/lovable-uploads/joao-santos.webp"
    },
    {
      name: "Anna Weber",
      city: "Hamburg",
      text: "Ich habe eine schwere Zeit durchgemacht und diese Gebete haben mir Hoffnung gegeben. Die Worte von Papst Franziskus sind ein Balsam für die Seele. Große Dankbarkeit!",
      rating: 5,
      image: "/lovable-uploads/ana-carolina.webp"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Leben, die durch das
            <span className="block text-spiritual-gold">Wort Gottes</span> verwandelt wurden
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sehen Sie, wie diese Gebete den Glauben von Tausenden gestärkt und berührt haben
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-spiritual-warm/20 border-spiritual-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Sterne */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-spiritual-gold text-spiritual-gold" />
                    ))}
                  </div>
                  {/* Zitat-Icon */}
                  <Quote className="w-8 h-8 text-spiritual-gold/60" />
                  {/* Testimonial */}
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  {/* Autor */}
                  <div className="border-t border-spiritual-gold/20 pt-6 text-center">
                    <img
                      src={testimonial.image}
                      alt={`Foto von ${testimonial.name}`}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-spiritual-gold mx-auto mb-4"
                      loading="lazy"
                    />
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.city}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Papst Franziskus im Hintergrund */}
        <div className="relative mt-16 text-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 opacity-10">
            <img 
              src="/lovable-uploads/a378db39-20d7-4c08-b54b-4fdee7ac3fda.png" 
              alt="Papst Franziskus"
              className="w-32 h-auto"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 bg-white/80 backdrop-blur-sm inline-block px-8 py-4 rounded-full">
            <p className="text-spiritual-gold font-semibold">
              Über 10.000 Menschen wurden bereits durch diese Gebete gesegnet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGer;
