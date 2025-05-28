import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      city: "Paris, FR",
      text: "Ces prières ont transformé ma routine de foi. Je ressens une paix que je n'avais pas connue depuis longtemps. Le Pape François a un don pour toucher notre âme.",
      rating: 5,
      image: "/lovable-uploads/maria.webp"
    },
    {
      name: "Jean Martin",
      city: "Lyon, FR",
      text: "En tant que père de famille, j'ai trouvé dans ces paroles la force dont j'avais besoin. Je lis une prière chaque jour avec ma femme et mes enfants. Je recommande de tout cœur !",
      rating: 5,
      image: "/lovable-uploads/joao-santos.webp"
    },
    {
      name: "Sophie Bernard",
      city: "Marseille, FR",
      text: "Je traversais une période difficile et ces prières m'ont donné de l'espoir. Les paroles du Pape François sont un baume pour l'âme. Immense gratitude !",
      rating: 5,
      image: "/lovable-uploads/ana-carolina.webp"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Vies Transformées par
            <span className="block text-spiritual-gold">la Parole de Dieu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez comment ces prières ont touché et renforcé la foi de milliers de personnes
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-spiritual-warm/20 border-spiritual-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-spiritual-gold text-spiritual-gold" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-spiritual-gold/60" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border-2 border-spiritual-gold" />
                    <div>
                      <span className="font-semibold text-gray-800">{testimonial.name}</span>
                      <span className="block text-xs text-gray-500">{testimonial.city}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
