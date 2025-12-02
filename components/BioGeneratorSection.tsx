
import React from 'react';
import { Layers, Trophy } from 'lucide-react';

interface BioGeneratorSectionProps {
  onCtaClick: () => void;
}

export const BioGeneratorSection: React.FC<BioGeneratorSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-12 md:py-24 bg-[#F7F9FF] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
            <Layers className="w-4 h-4 text-[#395BC7]" />
            <span className="text-sm font-semibold text-[#395BC7]">Gerador de Bio</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0B14] tracking-tight leading-[1.1]">
            Não passe vergonha com uma <span className="text-[#0A0B14]">bio ruim...</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
            O ChatDate vai gerar uma bio que faz as mulheres te enviarem a primeira mensagem
          </p>
        </div>

        {/* CTA Button (Moved Up) */}
        <div className="flex justify-center mb-12 md:mb-16">
          <button 
            onClick={onCtaClick}
            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-[#1786FF] hover:bg-blue-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(23,134,255,0.5)] hover:-translate-y-1 active:translate-y-0 active:scale-95"
          >
            Quero Usar Agora
          </button>
        </div>

        {/* Comparison Cards Stack */}
        <div className="relative max-w-md mx-auto h-[340px] md:h-[400px] flex justify-center">
          
          {/* Card 1: Old Bio (Background) */}
          <div className="absolute top-0 w-[90%] bg-white rounded-[2rem] p-4 shadow-xl border border-slate-200 transform scale-95 opacity-60 z-0 origin-bottom pb-20">
            <div className="flex gap-4 items-start mb-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-200">
                <img 
                  src="https://framerusercontent.com/images/I41Ey23H85A6gp16RJaVakmOndg.png" 
                  alt="Old Bio" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="space-y-1 pt-1">
                <p className="text-sm font-bold text-slate-800">Sua Bio Antiga</p>
                <p className="text-xs text-slate-500">23y</p>
                <p className="text-xs text-slate-500">📍Florianópolis</p>
                <p className="text-xs text-slate-500 mt-1">🥊✈🎸🎬</p>
              </div>
            </div>
          </div>

          {/* Card 2: ChatDate Bio (Foreground) */}
          <div className="absolute top-20 md:top-24 w-full bg-white rounded-[2rem] p-4 shadow-[0_20px_60px_-15px_rgba(23,134,255,0.3)] border-2 border-[#5B9DFF] z-10 transform hover:scale-[1.02] transition-transform duration-300">
             <div className="flex gap-4 items-start mb-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-blue-100">
                  <img 
                    src="https://framerusercontent.com/images/YhqB0M7q8DkUuAwy9MiT1NTos.png" 
                    alt="ChatDate Bio" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1 pt-1">
                  <p className="text-sm font-bold text-slate-900">Sua Bio com ChatDate</p>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mt-2">
                    <p className="text-sm text-slate-700 leading-snug">
                      🏆 Campeão do meu bairro em piadas de tiozão
                    </p>
                    <p className="text-sm text-slate-700 leading-snug mt-2">
                      Se você ganhar de mim nas piadas ruins vai receber um presente 👀
                    </p>
                  </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};
