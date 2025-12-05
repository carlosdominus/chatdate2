import React, { useEffect } from 'react';

export const VSLSection: React.FC = () => {
  useEffect(() => {
    const scriptUrl = "https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/ab-test/691b9271d84e2d824a092e43/player.js";
    
    // Check if script already exists to avoid duplicates
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const s = document.createElement("script");
      s.src = scriptUrl;
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  const VturbSmartPlayer = 'vturb-smartplayer' as any;

  return (
    <section className="relative w-full bg-[#050505] pt-8 pb-4 z-50">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] border border-white/10 bg-black/50 backdrop-blur-sm">
          <VturbSmartPlayer 
            id="ab-691b9271d84e2d824a092e43" 
            className="block w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};