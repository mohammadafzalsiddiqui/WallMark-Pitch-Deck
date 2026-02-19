const roles = [
  {
    title: "Wall Owners",
    desc: 
    <ul className="text-muted-foreground text-sm space-y-2 font-body">
        <li>• From village shops to city malls</li>
        <li>• Turn idle walls into BNB revenue</li>
        <li>• Instant listing, no paperwork</li>

      </ul>,
  },
  {
    title: "Advertisers",
    desc:
    <ul className="text-muted-foreground text-sm space-y-2 font-body">
          <li>• Precision targeting at 1/10th cost</li>
          <li>• Transparent, on-chain verification</li>
          <li>• No agency gatekeepers</li>
        </ul>,
  },
  {
    title: "Installers",
    desc: 
    <ul className="text-muted-foreground text-sm space-y-2 font-body">
          <li>• Guaranteed smart-contract pay</li>
          <li>• Work proofed via IPFS & On-Chain</li>
          <li>• Global jobs for local workers</li>
        </ul>,
  },
];

const Slide3Solution = () => (
  <div className="flex flex-col h-full justify-center px-6 md:px-16 max-w-6xl mx-auto">
    <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-3 text-center fade-up">
      One Marketplace. <span className="text-gradient-yellow">Three Aligned Participants.</span>
    </h2>
    <p className="text-center text-muted-foreground font-mono text-xs mb-12 fade-up stagger-1">Three Sided Marketplace</p>

    <div className="grid md:grid-cols-3 gap-6 mb-14">
      {roles.map((r, i) => (
        <div key={i} className={`glass-card rounded-2xl p-8 text-center fade-up stagger-${i + 2}`}>
          <h3 className="font-display font-bold text-xl text-foreground mb-3">{r.title}</h3>
          <p className="text-muted-foreground text-sm font-body">{r.desc}</p>
        </div>
      ))}
    </div>

    {/* Flywheel */}
    <div className="fade-up stagger-5">
      <div className="glass-card rounded-xl p-6 flex flex-col md:flex-row items-center justify-center gap-3 text-center text-sm font-mono text-muted-foreground">
        <span>More listed walls</span>
        <span className="text-gradient-yellow font-bold">→</span>
        <span>More campaigns posted</span>
        <span className="text-gradient-yellow font-bold">→</span>
        <span>More installation jobs</span>
        <span className="text-gradient-yellow font-bold">→</span>
        <span className="text-foreground font-semibold">Stronger network effects</span>
        <span className="text-gradient-yellow font-bold">↺</span>
      </div>
    </div>
  </div>
);

export default Slide3Solution;
