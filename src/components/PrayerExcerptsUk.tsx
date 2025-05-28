import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const PrayerExcerptsUk = () => {
  const excerpts = [
    {
      title: "Prayer for Peace",
      text: "Lord, make me an instrument of your peace. Where there is discord, may I bring unity; where there is error, may I bring truth...",
      theme: "Inner Peace"
    },
    {
      title: "Prayer for the Needy",
      text: "Merciful God, help us to see Christ in the poor and needy, and to serve him with love and compassion in all those who suffer...",
      theme: "Charity"
    },
    {
      title: "Prayer for the Family",
      text: "Lord Jesus, bless our families and make them small domestic churches, where love and faith can grow and be strengthened...",
      theme: "Family"
    },
    {
      title: "Prayer for Hope",
      text: "God of hope, when everything seems dark and difficult, remind us that you are our light and our salvation, our strength and our peace...",
      theme: "Hope"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-spiritual-heavenly to-spiritual-peace">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Excerpts that Touch
            <span className="block text-spiritual-gold">the Heart</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover some of the most powerful prayers you will find in the eBook
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
            <span className="font-semibold text-spiritual-gold">And much more...</span> 26 other powerful prayers await you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrayerExcerptsUk;
