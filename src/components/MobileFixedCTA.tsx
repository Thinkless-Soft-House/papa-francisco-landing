
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const MobileFixedCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white/95 backdrop-blur-sm border-t border-spiritual-gold/30 p-4 shadow-xl">
        <Button 
          size="lg" 
          className="w-full bg-spiritual-gold hover:bg-spiritual-gold/90 text-white py-4 text-lg font-bold rounded-full shadow-lg"
        >
          <Download className="mr-2 w-5 h-5" />
          QUERO O EBOOK AGORA - R$ 19,90
        </Button>
      </div>
    </div>
  );
};

export default MobileFixedCTA;
