import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsUk = () => {
  const testimonials = [
    {
      name: "Mary Smith",
      city: "London, UK",
      text: "These prayers have transformed my faith routine. I feel a peace I haven't experienced in a long time. Pope Francis has a special gift for touching our souls.",
      rating: 5,
      image: "/lovable-uploads/maria.webp"
    },
    {
      name: "John Williams",
      city: "Manchester, UK", 
      text: "As a family man, I found in these words the strength I needed. Now I read a prayer every day with my wife and children. I wholeheartedly recommend it!",
      rating: 5,
      image: "/lovable-uploads/joao-santos.webp"
    },
    {
      name: "Anne Johnson",
      city: "Birmingham, UK",
      text: "I was going through a difficult time and these prayers gave me hope. Pope Francis's words are a balm for the soul. Immense gratitude!",
      rating: 5,
      image: "/lovable-uploads/ana-carolina.webp"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lives Transformed by
            <span className="block text-spiritual-gold">God's Word</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how these prayers have touched and strengthened the faith of thousands of people
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
                  <div className="border-t border-spiritual-gold/20 pt-6 text-center">
                    <img
                      src={testimonial.image}
                      alt={`Photo of ${testimonial.name}`}
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

        {/* Papa Francisco no fundo */}
        <div className="relative mt-16 text-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 opacity-10">
            <img 
              src="/lovable-uploads/a378db39-20d7-4c08-b54b-4fdee7ac3fda.png" 
              alt="Pope Francis"
              className="w-32 h-auto"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 bg-white/80 backdrop-blur-sm inline-block px-8 py-4 rounded-full">
            <p className="text-spiritual-gold font-semibold">
              + 10,000 people have already been blessed by these prayers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsUk;
