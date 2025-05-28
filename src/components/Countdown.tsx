
import { useState, useEffect } from 'react';

interface CountdownProps {
  className?: string;
}

const Countdown = ({ className = "" }: CountdownProps) => {
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

  if (timeLeft <= 0) {
    return (
      <div className={`text-center ${className}`}>
        <div className="text-red-600 font-bold text-lg">
          Oferta expirada!
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="bg-spiritual-gold/10 border border-spiritual-gold/30 rounded-2xl p-4 inline-block">
        <div className="text-spiritual-gold font-semibold mb-2">Oferta especial expira em:</div>
        <div className="text-3xl font-bold text-spiritual-gold font-mono">
          {formatTime(timeLeft)}
        </div>
        <div className="text-sm text-gray-600 mt-1">Depois que o tempo acabar, essa oferta não poderá ser acessada novamente.</div>
      </div>
    </div>
  );
};

export default Countdown;
