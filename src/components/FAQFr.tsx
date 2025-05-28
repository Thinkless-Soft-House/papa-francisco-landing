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
      question: "Comment vais-je recevoir l'eBook après l'achat ?",
      answer: "Après la confirmation du paiement, vous recevrez immédiatement un e-mail avec le lien pour télécharger l'eBook au format PDF. Le processus est 100% numérique et instantané."
    },
    {
      question: "Puis-je lire l'eBook sur mon téléphone ou ma tablette ?",
      answer: "Oui ! L'eBook est au format PDF et peut être lu sur n'importe quel appareil : téléphone, tablette, ordinateur ou liseuse. Vous pouvez également l'imprimer si vous préférez une version papier."
    },
    {
      question: "Ce contenu est-il authentiquement catholique ?",
      answer: "Oui, toutes les prières sont basées sur les enseignements authentiques du Pape François et sont alignées avec la doctrine catholique. Le contenu a été soigneusement sélectionné dans le respect de la tradition de l'Église."
    },
    {
      question: "L'eBook convient-il aux nouveaux convertis ?",
      answer: "Absolument ! Les prières ont été choisies pour leur simplicité et leur pouvoir de connexion avec Dieu. Elles sont parfaites aussi bien pour les catholiques expérimentés que pour ceux qui commencent leur chemin de foi."
    },
    {
      question: "Puis-je partager l'eBook avec ma famille ?",
      answer: "L'eBook est destiné à un usage personnel et familial. Vous pouvez le partager avec les membres de votre famille vivant sous le même toit, mais nous vous demandons de respecter les droits d'auteur et de ne pas le distribuer publiquement."
    },
    {
      question: "Et si je ne suis pas satisfait du contenu ?",
      answer: "Nous offrons une garantie totale de 7 jours. Si pour une raison quelconque vous n'êtes pas satisfait, il suffit de nous contacter et nous vous rembourserons 100% de votre investissement, sans question."
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
                Questions Fréquentes
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Nous répondons à vos principales questions sur l'eBook
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
                  <AccordionTrigger className="font-semibold text-lg text-spiritual-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
