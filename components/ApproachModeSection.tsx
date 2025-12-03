
import React from 'react';
import { MessageSquareText, Play } from 'lucide-react';

interface ApproachModeSectionProps {
  onCtaClick: () => void;
}

export const ApproachModeSection: React.FC<ApproachModeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 bg-[#F7F9FF] relative overflow-hidden flex flex-col items-center">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center w-full">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#BDD1FF] shadow-[0_2px_10px_rgba(57,91,199,0.05)] mb-6">
           <MessageSquareText className="w-4 h-4 text-[#395BC7]" />
           <span className="text-sm font-bold text-[#395BC7] tracking-wide">Modo Abordagem</span>
        </div>
 
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#323140] text-center max-w-3xl mb-4 leading-[1.15] tracking-tight">
          Quer abordar uma mulher mas não sabe o que dizer?
        </h2>
 
        {/* Subtitle */}
        <p className="text-base text-slate-500 font-medium text-center max-w-2xl mb-8 leading-relaxed">
          Mande um áudio explicando a situação que o ChatDate vai te dar frase perfeita para começar a conversa
        </p>
 
        {/* CTA */}
        <button 
           onClick={onCtaClick}
           className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95 mb-12"
         >
           Quero Usar Agora
        </button>
 
        {/* Visuals Container */}
        <div className="relative w-full max-w-[400px] mx-auto flex flex-col items-center">
           
           {/* Audio Player Bubble */}
           <div className="w-[90%] bg-[#1786FF] rounded-full p-3 px-4 flex items-center gap-4 shadow-[0_8px_30px_rgba(23,134,255,0.3)] mb-[-10px] z-40 relative transform transition hover:scale-105 duration-300 cursor-default">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm shadow-inner cursor-pointer hover:bg-white/30 transition">
                <Play size={14} fill="white" className="ml-0.5 text-white"/>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-1.5 h-full">
                 {/* Waveform Visualization */}
                 <div className="flex items-center gap-[2px] h-5 overflow-hidden items-end pb-1">
                    {[...Array(45)].map((_, i) => (
                       <div 
                        key={i} 
                        className="w-[2px] bg-white/70 rounded-full" 
                        style={{ 
                          height: `${30 + Math.random() * 70}%`,
                          opacity: Math.random() > 0.5 ? 1 : 0.6
                        }}
                      ></div>
                    ))}
                 </div>
              </div>
              <span className="text-[11px] text-white/90 font-medium tracking-wide">1:06</span>
           </div>
 
           {/* Card 1 */}
           <div className="w-[85%] bg-white/90 backdrop-blur-sm rounded-2xl p-6 pt-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white z-10 transform translate-y-4 scale-[0.92] opacity-50">
             <p className="text-slate-400 text-sm leading-relaxed">
               1. O curioso: "Com licença, desculpa te incomodar. Vi que você tá com várias..."
             </p>
           </div>
           
           {/* Card 2 */}
           <div className="w-[92%] bg-white/95 backdrop-blur-md rounded-2xl p-6 pt-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white z-20 transform -translate-y-6 scale-[0.96] opacity-80">
             <p className="text-slate-600 text-sm leading-relaxed">
               2. Observador: "Com licença, desculpa te incomodar. Vi que você tá com várias sacolas..."
             </p>
           </div>
 
           {/* Card 3 (Main) */}
           <div className="w-full bg-white rounded-3xl p-6 pt-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-slate-100 z-30 transform -translate-y-16 hover:-translate-y-[4.5rem] transition-transform duration-500 ease-out group/card">
             <p className="text-slate-800 text-[15px] leading-relaxed">
                <span className="font-bold text-slate-900 block mb-2 text-base">3. O direto:</span>
                "Com licença, desculpa te incomodar. Sei que você tá ocupada, mas não podia deixar de te dizer que você tem um charme que me chamou a atenção!"
             </p>
             <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
           </div>
 
        </div>

      </div>
    </section>
  );
};
