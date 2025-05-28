import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const GuaranteeSectionUk = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Selo de Garantia */}
            <div className="flex-shrink-0 animate-scale-in">
              <img 
                src="/lovable-uploads/garantiauk.webp" 
                alt="7-day guarantee"
                className="w-48 h-48 md:w-64 md:h-64 drop-shadow-xl"
                loading="lazy"
              />
            </div>

            {/* Conteúdo da garantia */}
            <div className="flex-1 space-y-6 lg:space-y-8 animate-fade-in w-full overflow-hidden">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-spiritual-gold flex-shrink-0" />
                  <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 break-words">
                    Complete
                    <span className="block text-spiritual-gold">7-Day Guarantee</span>
                  </h2>
                </div>
                
                <div className="space-y-4 text-base sm:text-lg text-gray-700">
                  <p className="leading-relaxed break-words">
                    We believe so much in the transforming power of these prayers that we offer 
                    an <strong>unconditional 7-day guarantee</strong>.
                  </p>
                  
                  <p className="leading-relaxed break-words">
                    If for any reason you don't feel the eBook has met your spiritual expectations, 
                    we'll refund <strong>100% of your investment</strong>, no questions asked 
                    and without complications.
                  </p>

                  <div className="bg-spiritual-warm/30 p-4 sm:p-6 rounded-2xl">
                    <p className="font-semibold text-gray-800 mb-2 break-words">Why do we offer this guarantee?</p>
                    <p className="text-gray-700 break-words">
                      Because we know these Pope Francis prayers have the power to touch 
                      hearts and strengthen faith. We want you to have complete peace of mind 
                      in your decision to grow spiritually.
                    </p>
                  </div>
                </div>

                  <Button 
                    onClick={scrollToOffer}
                    size="lg"
                    className="w-full sm:w-auto bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-normal break-words text-center"
                  >
                    I WANT TO START MY JOURNEY NOW
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSectionUk;
