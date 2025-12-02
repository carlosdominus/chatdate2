
import React from 'react';
import { Gauge } from 'lucide-react';

interface ConversationThermometerSectionProps {
  onCtaClick: () => void;
}

export const ConversationThermometerSection: React.FC<ConversationThermometerSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients/Images */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         {/* Subtle colored glows matching the design vibe */}
         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
             {/* Badge */}
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#78BBFF] shadow-[0_0_0_1px_rgba(120,187,255,0.2)] bg-transparent">
                <Gauge className="w-5 h-5 text-[#78BBFF]" />
                <span className="text-sm font-bold text-[#78BBFF] tracking-wide">Termômetro da Conversa</span>
             </div>

             {/* Heading */}
             <div className="space-y-2">
               <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-br from-[#EEE] to-[#94B4FF] bg-clip-text text-transparent block">
                      Ela está interessada ou só está sendo simpática?
                  </span>
               </h2>
               <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-br from-[#EEE] to-[#94B4FF] bg-clip-text text-transparent block">
                       Nunca mais fique na dúvida…
                  </span>
               </h2>
             </div>

             {/* Description */}
             <div className="space-y-1">
               <p className="text-lg text-[#B0B5BE] font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                  O ChatDate tem um termômetro em tempo real da conversa.
               </p>
               <p className="text-lg text-[#B0B5BE] font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Te dizendo se é hora de esquentar a conversa ou dar uma diminuída na intensidade
               </p>
             </div>

             {/* CTA */}
             <button 
                onClick={onCtaClick}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95 mt-4"
              >
                Quero Usar Agora
              </button>
          </div>

          {/* Image Column */}
           <div className="relative flex justify-center items-center order-1 lg:order-2">
              {/* Background Glow Image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-125 opacity-50">
                   <img 
                     src="https://framerusercontent.com/images/I43yLmhkoot8Oi97850vaNJx30.png" 
                     alt="" 
                     className="w-full h-full object-contain animate-pulse-slow" 
                   />
              </div>
              
              {/* Feature Image (Phone) */}
              <img 
                  src="https://framerusercontent.com/images/dLx9XN4eBB0irqDTNwAbGt2X4.png" 
                  alt="Thermometer Feature Interface" 
                  className="relative z-10 w-full max-w-[280px] md:max-w-[340px] h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
          </div>

        </div>
      </div>
    </section>
  );
};
