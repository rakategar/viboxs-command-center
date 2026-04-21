import heroDevice from "@/assets/hero-device.jpg";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* eyebrow */}
        <div className="flex justify-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.2em] text-muted-foreground animate-fade-up">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            MISSION CONTROL · ONLINE
          </div>
        </div>

        {/* headline */}
        <h1
          className="mt-8 text-center font-display font-semibold tracking-tight text-[2.6rem] leading-[1.02] sm:text-7xl md:text-[5.5rem] lg:text-[7rem] animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <span className="block text-foreground/90">Explore the</span>
          <span className="block text-gradient">Interstellar</span>
          <span className="block text-foreground/90">
            Frontier of <span className="italic font-light text-gradient-violet">Creation</span>
          </span>
        </h1>

        <p
          className="mx-auto mt-7 max-w-2xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          VIBOXS is the first interstellar village agency — an AI-powered creative command center
          where seven elite Rangers execute premium missions for ambitious brands.
          <span className="text-foreground/90"> NASA-grade solutions. Village-grade prices.</span>
        </p>

        {/* CTAs */}
        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-2xl bg-[var(--gradient-aurora)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
          >
            <span className="absolute inset-0 rounded-2xl bg-[var(--gradient-aurora)] blur-xl opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
            <Sparkles className="h-4 w-4" />
            Launch a Mission
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#rangers"
            className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-white/5"
          >
            Recruit a Ranger
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* trust line */}
        <p
          className="mt-6 text-center text-xs font-mono tracking-[0.25em] text-muted-foreground/70 animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          150+ MISSIONS DEPLOYED · 98% COMMANDER SATISFACTION · 24/7 BASECAMP
        </p>

        {/* hero device */}
        <div
          className="relative mx-auto mt-16 max-w-5xl animate-fade-up"
          style={{ animationDelay: "420ms" }}
        >
          <div className="absolute inset-x-10 top-10 -bottom-6 rounded-[2rem] bg-[var(--gradient-aurora)] blur-3xl opacity-40" />
          <div className="relative glass-strong rounded-[2rem] p-2 glow-ring overflow-hidden">
            {/* window chrome */}
            <div className="flex items-center justify-between px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                BASECAMP — MISSION CONTROL v2.0
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary-glow">
                ● LIVE
              </span>
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] aspect-[16/9]">
              <img
                src={heroDevice}
                alt="VIBOXS Mission Control — futuristic holographic dashboard floating in a deep space station"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
              {/* floating glass overlay panels */}
              <div className="absolute left-4 top-4 sm:left-8 sm:top-8 glass rounded-2xl p-3 sm:p-4 max-w-[55%] animate-float">
                <div className="font-mono text-[9px] tracking-[0.3em] text-primary-glow">
                  RANGER · NEXUS
                </div>
                <div className="mt-1 font-display text-sm sm:text-base font-medium">
                  Web architecture deployed
                </div>
                <div className="mt-2 flex items-center gap-2 text-[10px] text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  Build pipeline · 03:42 ETA
                </div>
              </div>
              <div
                className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 glass rounded-2xl p-3 sm:p-4 animate-float-slow"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="font-mono text-[9px] tracking-[0.3em] text-primary-glow">
                  TELEMETRY
                </div>
                <div className="mt-1 flex items-end gap-1">
                  <span className="font-display text-2xl font-semibold text-foreground">98</span>
                  <span className="text-xs text-muted-foreground mb-1">% uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
