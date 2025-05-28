import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQUk = () => {
  const faqs = [
    {
      question: "How do I receive the eBook after purchase?",
      answer: "After payment confirmation, you will immediately receive an email with the download link for the eBook in PDF format. The process is 100% digital and instant."
    },
    {
      question: "Can I read the eBook on my mobile or tablet?",
      answer: "Yes! The eBook is in PDF format and can be read on any device: mobile, tablet, computer or e-reader. You can even print it if you prefer to have a physical version."
    },
    {
      question: "Is this genuinely Catholic content?",
      answer: "Yes, all prayers are based on Pope Francis's authentic teachings and are aligned with Catholic doctrine. The content has been carefully selected respecting Church tradition."
    },
    {
      question: "Is the eBook suitable for new converts?",
      answer: "Absolutely! The prayers were chosen for their simplicity and power of connection with God. They are perfect for both experienced Catholics and those beginning their faith journey."
    },
    {
      question: "Can I share the eBook with my family?",
      answer: "The eBook is for personal and family use. You may share it with family members living in the same household, but we ask that you respect copyright and not distribute it publicly."
    },
    {
      question: "What if I don't like the content?",
      answer: "We offer a complete 7-day guarantee. If for any reason you are not satisfied, simply contact us and we'll refund 100% of your investment, no questions asked."
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
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              We clarify your main questions about the eBook
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
                Still have questions? Contact us!
              </p>
              <p className="text-spiritual-gold font-semibold">
                We are here to help you on your spiritual journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQUk;
