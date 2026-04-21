import galaxyBg from "@/assets/galaxy-bg.jpg";

export function CosmicBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-cosmos)]" />

      {/* faint galaxy image */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          backgroundImage: `url(${galaxyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
        }}
      />

      {/* stars layer */}
      <div className="stars absolute inset-0 opacity-60 animate-drift" />

      {/* drifting purple haze blobs */}
      <div className="absolute -top-32 -left-32 h-[42rem] w-[42rem] rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/2 -right-32 h-[36rem] w-[36rem] rounded-full bg-violet/20 blur-[140px] animate-float" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary-glow/15 blur-[100px] animate-pulse-glow" />

      {/* subtle grid */}
      <div className="grid-cosmos absolute inset-0 opacity-50" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.05_0.02_285)_100%)]" />
    </div>
  );
}
