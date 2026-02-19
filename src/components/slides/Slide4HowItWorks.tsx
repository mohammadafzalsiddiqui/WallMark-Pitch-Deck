import { useEffect, useState } from "react";

const steps = [
  "Wall Owner Lists",
  "Advertiser Locks Escrow",
  "Installer Uploads Proof",
  "Advertiser Approves",
  "Funds Auto-Release",
];

const Slide4HowItWorks = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % steps.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-full justify-center px-6 md:px-16 max-w-6xl mx-auto">
      <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-2 text-center fade-up">
        Trustless by Design.
      </h2>
      <p className="text-center text-muted-foreground font-mono text-xs mb-14 fade-up stagger-1">
        No Custody. No Oracles. Pure on-chain enforcement.
      </p>

      {/* Steps */}
      <div className="relative mb-12 fade-up stagger-2">
        {/* Progress line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted hidden md:block">
          <div
            className="h-full progress-bar-gradient transition-all duration-700 ease-out"
            style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-bold mb-3 transition-all duration-500 ${
                  i <= active
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(240,185,11,0.4)]"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`text-xs md:text-sm font-body transition-colors duration-300 ${
                  i <= active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {step}
              </span>
              {/* {i === 1 && (
                <span className="text-[10px] font-mono text-bnb mt-1 opacity-60">0x3f...a7c2</span>
              )} */}
            </button>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-4 fade-up stagger-4">
        {["Zero platform custody", "No oracles required", "Pure on-chain enforcement"].map((b, i) => (
          <div key={i} className="glass-pill text-xs text-muted-foreground">
            {b}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide4HowItWorks;
