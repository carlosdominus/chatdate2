import React, { useEffect, useRef } from 'react';

interface VSLSectionProps {
  onComplete?: () => void;
}

export const VSLSection: React.FC<VSLSectionProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Check Local Storage for Delay Logic
    const SECONDS_TO_DISPLAY = 60;
    const STORAGE_KEY = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`;
    const alreadyDisplayed = localStorage.getItem(STORAGE_KEY);

    if (alreadyDisplayed && onComplete) {
      onComplete();
    }

    // 2. Load Script
    const scriptUrl = "https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/ab-test/691b9271d84e2d824a092e43/player.js";
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const s = document.createElement("script");
      s.src = scriptUrl;
      s.async = true;
      document.head.appendChild(s);
    }

    // 3. Manually mount with Double Isolation
    // We create a vanilla DIV wrapper inside the React Ref. 
    // This ensures the player's direct parent is NOT a React node with __reactFiber props.
    if (containerRef.current) {
        if (!wrapperRef.current) {
            wrapperRef.current = document.createElement('div');
            wrapperRef.current.style.width = '100%';
            containerRef.current.appendChild(wrapperRef.current);
        }
        
        const wrapper = wrapperRef.current;
        wrapper.innerHTML = ''; // Clear previous instances if any
        
        const player = document.createElement('vturb-smartplayer');
        player.setAttribute('id', 'ab-691b9271d84e2d824a092e43');
        player.className = 'block w-full mx-auto';
        
        wrapper.appendChild(player);
    }

    // 4. Monitor Video Progress for Delay
    const interval = setInterval(() => {
        if (localStorage.getItem(STORAGE_KEY)) return; // Stop checking if already set

        const smartplayer = (window as any).smartplayer;
        if (smartplayer && smartplayer.instances && smartplayer.instances[0]) {
            const instance = smartplayer.instances[0];
            
            // Trigger if video passes the time threshold
            if (instance.video.currentTime > SECONDS_TO_DISPLAY) {
                if (onComplete) onComplete();
                localStorage.setItem(STORAGE_KEY, "true");
                clearInterval(interval);
            }
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <section className="relative w-full pt-8 pb-4 z-50">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] border border-white/10 bg-black/50 backdrop-blur-sm">
          <div ref={containerRef} className="w-full min-h-[200px]" />
        </div>
      </div>
    </section>
  );
};