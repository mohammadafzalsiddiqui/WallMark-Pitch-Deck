import { useEffect, useState } from "react";

const targetText = "WALLMARK";

const Slide1Hero = () => {
  const [display, setDisplay] = useState("_________");

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const result = targetText
        .split("")
        .map((ch, i) => (frame > i * 3 + 6 ? ch : chars[Math.floor(Math.random() * chars.length)]))
        .join("");
      setDisplay(result);
      if (frame > targetText.length * 3 + 6) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full relative px-6 text-center">
      {/* Refined spotlight */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 40%, rgba(240,185,11,0.05) 0%, transparent 70%)" }} />

      <div className="glass-pill mb-12 fade-up stagger-1 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 border-white/5">
        BNB Chain Ecosystem
      </div>

      <h1
        className="font-display font-bold text-gradient-yellow text-glow-yellow fade-up stagger-2 leading-none mb-8"
        style={{ 
          fontSize: "clamp(3rem, 12vw, 8.5rem)", 
          letterSpacing: "0.05em", // More spacing makes it look sober/premium
          fontWeight: 800 
        }}
      >
        {display}
      </h1>

      <p className="font-body font-medium text-foreground/80 text-lg md:text-xl max-w-2xl fade-up stagger-3 mb-12 tracking-wide">
      List the wall.Market the World.<br></br>
        <span className="text-muted-foreground text-sm font-normal">Connecting Walls, Brands, and Local Workers</span>
      </p>

      <div className="flex flex-wrap justify-center gap-6 fade-up stagger-4">
        <a href="#" className="glass-pill-cta text-[11px] px-10 py-3 tracking-widest uppercase border-bnb/20 hover:border-bnb/50 transition-all">
          Explore Network
        </a>
      </div>
    </div>
  );
};

export default Slide1Hero;