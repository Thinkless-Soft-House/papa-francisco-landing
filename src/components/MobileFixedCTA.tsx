
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const MobileFixedCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white/95 backdrop-blur-sm border-t border-spiritual-gold/30 p-3 sm:p-4 shadow-xl">
        <Button 
          size="lg" 
          className="w-full bg-spiritual-gold hover:bg-spiritual-gold/90 text-white py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-full shadow-lg max-w-full overflow-hidden"
        >
          <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="truncate">QUERO O EBOOK AGORA - R$ 19,90</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileFixedCTA;
