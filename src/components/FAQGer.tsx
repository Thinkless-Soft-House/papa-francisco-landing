import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQGer = () => {
  const faqs = [
    {
      question: "Wie erhalte ich das eBook nach dem Kauf?",
      answer: "Nach Zahlungsbestätigung erhalten Sie sofort eine E-Mail mit dem Download-Link für das eBook im PDF-Format. Der Prozess ist 100% digital und sofortig."
    },
    {
      question: "Kann ich das eBook auf meinem Handy oder Tablet lesen?",
      answer: "Ja! Das eBook ist im PDF-Format und kann auf jedem Gerät gelesen werden: Handy, Tablet, Computer oder e-Reader. Sie können es auch ausdrucken, wenn Sie eine physische Version bevorzugen."
    },
    {
      question: "Ist dies wirklich katholischer Inhalt?",
      answer: "Ja, alle Gebete basieren auf den authentischen Lehren von Papst Franziskus und sind mit der katholischen Lehre abgestimmt. Der Inhalt wurde sorgfältig ausgewählt und respektiert die Tradition der Kirche."
    },
    {
      question: "Ist das eBook für neue Gläubige geeignet?",
      answer: "Absolut! Die Gebete wurden wegen ihrer Einfachheit und Kraft zur Verbindung mit Gott ausgewählt. Sie sind perfekt für erfahrene Katholiken und für alle, die ihren Glaubensweg beginnen."
    },
    {
      question: "Darf ich das eBook mit meiner Familie teilen?",
      answer: "Das eBook ist für den persönlichen und familiären Gebrauch bestimmt. Sie können es mit Familienmitgliedern teilen, die im selben Haushalt leben, aber wir bitten Sie, die Urheberrechte zu respektieren und es nicht öffentlich zu verbreiten."
    },
    {
      question: "Was, wenn mir der Inhalt nicht gefällt?",
      answer: "Wir bieten eine vollständige 7-Tage-Garantie. Wenn Sie aus irgendeinem Grund nicht zufrieden sind, kontaktieren Sie uns einfach und wir erstatten Ihnen 100% Ihres Investments – ohne Nachfragen."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-spiritual-peace to-spiritual-heavenly">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-spiritual-gold" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800">
                Häufige Fragen
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Wir beantworten Ihre wichtigsten Fragen zum eBook
            </p>
          </div>
          <div className="animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur-sm border border-spiritual-gold/20 rounded-2xl px-6 shadow-lg"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-spiritual-gold transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-spiritual-gold/20">
              <p className="text-lg text-gray-700 mb-4">
                Noch Fragen? Kontaktieren Sie uns gern!
              </p>
              <p className="text-spiritual-gold font-semibold">
                Wir sind für Sie da und begleiten Sie auf Ihrer spirituellen Reise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQGer;
