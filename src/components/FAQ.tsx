
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Como recebo o eBook após a compra?",
      answer: "Após a confirmação do pagamento, você receberá imediatamente um e-mail com o link para download do eBook em formato PDF. O processo é 100% digital e instantâneo."
    },
    {
      question: "Posso ler o eBook no meu celular ou tablet?",
      answer: "Sim! O eBook está em formato PDF e pode ser lido em qualquer dispositivo: celular, tablet, computador ou e-reader. Você pode ainda imprimir se preferir ter uma versão física."
    },
    {
      question: "Este é conteúdo genuinamente católico?",
      answer: "Sim, todas as orações são baseadas nos ensinamentos autênticos do Papa Francisco e estão alinhadas com a doutrina católica. O conteúdo foi cuidadosamente selecionado respeitando a tradição da Igreja."
    },
    {
      question: "O eBook é adequado para novos convertidos?",
      answer: "Absolutamente! As orações foram escolhidas por sua simplicidade e poder de conexão com Deus. São perfeitas tanto para católicos experientes quanto para quem está iniciando sua jornada de fé."
    },
    {
      question: "Posso compartilhar o eBook com minha família?",
      answer: "O eBook é para uso pessoal e familiar. Você pode compartilhar com membros da sua família que moram na mesma casa, mas pedimos que respeite os direitos autorais e não distribua publicamente."
    },
    {
      question: "E se eu não gostar do conteúdo?",
      answer: "Oferecemos garantia total de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta entrar em contato conosco que devolvemos 100% do seu investimento, sem questionamentos."
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
                Perguntas Frequentes
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Esclarecemos suas principais dúvidas sobre o eBook
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
                Ainda tem dúvidas? Entre em contato conosco!
              </p>
              <p className="text-spiritual-gold font-semibold">
                Estamos aqui para ajudar você em sua jornada espiritual
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
