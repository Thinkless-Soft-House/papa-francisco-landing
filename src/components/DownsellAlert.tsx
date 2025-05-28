import { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownsellAlert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false); // Fecha o alerta ao clicar no botão
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-spiritual-gold shadow-lg">
      <div className="container mx-auto px-4 py-4 max-w-4xl relative">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-spiritual-gold">
            <Gift className="w-6 h-6" />
            <h3 className="font-playfair text-xl font-bold">
              Espera um pouco... Temos uma nova oportunidade para você!
            </h3>
          </div>

          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Selecionamos você para receber uma oferta especial com <strong>desconto exclusivo por tempo limitado!</strong> 
            Esta é sua chance de garantir o livro <em>"30 Orações Mais Poderosas do Papa Francisco"</em> com valor reduzido.
            <br />
            <strong>Aproveite enquanto o cronômetro está rodando!</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-spiritual-gold/10 border border-spiritual-gold/30 rounded-lg px-4 py-2">
              <div className="text-spiritual-gold font-semibold text-sm">Oferta especial expira em:</div>
              <div className="text-2xl font-bold text-spiritual-gold font-mono">
                {formatTime(timeLeft)}
              </div>
            </div>

            <Button 
              onClick={scrollToOffer}
              className="bg-spiritual-gold hover:bg-spiritual-gold/90 text-white px-6 py-2 rounded-full font-semibold"
            >
              Quero receber agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownsellAlert;
