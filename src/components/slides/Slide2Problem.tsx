import { useEffect, useState } from "react";

const AnimCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = eased * target;
      setVal(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target]);
  return <span>{target >= 10 ? `$${val.toFixed(1)}B` : `$${val.toFixed(0)}B`}{suffix}</span>;
};

const Slide2Problem = () => (
  <div className="flex flex-col h-full justify-center px-6 md:px-16 max-w-6xl mx-auto">
    <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-10 fade-up">
      Problem & <span className="text-gradient-yellow">Market Opportunity</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mb-10">
      {/* Problems */}
      <div className="space-y-4">
        {[
          "30–40% middleman fees destroy advertiser ROI",
          "No trust mechanism, frequent fraud, non-delivery, unresolved disputes",
          "Disconnected flow between wall owners, advertisers and installers",
        ].map((text, i) => (
          <div key={i} className={`glass-card rounded-xl p-5 fade-up stagger-${i + 1}`}>
            <p className="text-foreground text-sm md:text-base font-body">{text}</p>
          </div>
        ))}
      </div>

      {/* Market */}
      <div className={`space-y-6 fade-up stagger-4`}>
        <div>
          <p className="font-mono text-muted-foreground text-xs uppercase tracking-wider mb-1">India OOH Market</p>
          <p className="font-display font-bold text-3xl md:text-4xl text-foreground">
            <AnimCounter target={1.3} /> → <AnimCounter target={2.2} />
          </p>
          <p className="font-mono text-muted-foreground text-xs">2024 → 2033</p>
        </div>
        <div>
          <p className="font-mono text-muted-foreground text-xs uppercase tracking-wider mb-1">Global Outdoor Advertising</p>
          <p className="font-display font-bold text-3xl md:text-4xl text-foreground">
            <AnimCounter target={40} suffix="+" />
          </p>
        </div>
        <p className="text-muted-foreground text-sm">Millions of idle walls waiting to be monetized</p>
      </div>
    </div>

    {/* Bottom highlight */}
    <div className="glass-card rounded-xl p-5 border-l-2 fade-up stagger-5" style={{ borderLeftColor: "hsl(var(--bnb-yellow))" }}>
      <p className="text-foreground text-sm md:text-base font-body">
        <span className="text-gradient-yellow font-semibold">Wallmark</span> unlocks direct P2P wall advertising at internet scale no intermediaries, no trust gaps.
      </p>
    </div>
  </div>
);

export default Slide2Problem;
