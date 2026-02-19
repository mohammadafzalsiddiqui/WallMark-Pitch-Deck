import { useState, useEffect, useCallback, useRef } from "react";
import ParticleField from "./ParticleField";
import Slide1Hero from "./slides/Slide1Hero";
import Slide2Problem from "./slides/Slide2Problem";
import Slide3Solution from "./slides/Slide3Solution";
import Slide4HowItWorks from "./slides/Slide4HowItWorks";

const slides = [Slide1Hero, Slide2Problem, Slide3Solution, Slide4HowItWorks, ];
const TOTAL = slides.length;

const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchRef = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => {
      if (isAnimating || next === current || next < 0 || next >= TOTAL) return;
      setDirection(next > current ? 1 : -1);
      setIsAnimating(true);
      setCurrent(next);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [current, isAnimating]
  );

  const goNext = useCallback(() => go(current + 1), [current, go]);
  const goPrev = useCallback(() => go(current - 1), [current, go]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchRef.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchRef.current === null) return;
    const diff = touchRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    touchRef.current = null;
  };

  const SlideComponent = slides[current];

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ background: "#030712" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Particle field */}
      <ParticleField />

      {/* Hex grid watermark */}
      <div className="fixed inset-0 hex-grid pointer-events-none" style={{ zIndex: 1 }} />

      {/* Noise overlay */}
      <div className="fixed inset-0 noise-overlay pointer-events-none" style={{ zIndex: 1 }} />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-muted/20" style={{ zIndex: 40 }}>
        <div
          className="h-full progress-bar-gradient transition-all duration-700 ease-out"
          style={{ width: `${((current + 1) / TOTAL) * 100}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="fixed top-5 right-6 font-mono text-xs text-muted-foreground" style={{ zIndex: 40 }}>
        {String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
      </div>

      {/* Slide content */}
      <div
        className="relative w-full h-full"
        style={{
          zIndex: 10,
          animation: `slideEnter 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        }}
        key={current}
      >
        <SlideComponent />
      </div>

      {/* Dot navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2" style={{ zIndex: 40 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 h-2 bg-primary shadow-[0_0_10px_rgba(240,185,11,0.5)]"
                : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* BNB Chain badge */}
      <div className="fixed bottom-6 right-6 glass-pill flex items-center gap-2 text-[10px] text-muted-foreground" style={{ zIndex: 40 }}>
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
        Built on BNB Chain
      </div>
    </div>
  );
};

export default Presentation;
