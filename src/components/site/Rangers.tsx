import {
  Boxes,
  Workflow,
  Brain,
  Shield,
  TrendingUp,
  Palette,
  Mic,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Ranger = {
  code: string;
  name: string;
  role: string;
  tagline: string;
  outcome: string;
  icon: LucideIcon;
};

const rangers: Ranger[] = [
  {
    code: "R-01",
    name: "Nexus",
    role: "Web Architecture",
    tagline: "The Dimension Builder",
    outcome: "Scalable digital foundations engineered for compounding growth.",
    icon: Boxes,
  },
  {
    code: "R-02",
    name: "Flux",
    role: "Automation",
    tagline: "The Time Bender",
    outcome: "Workflows that replace teams — reclaim hundreds of hours per month.",
    icon: Workflow,
  },
  {
    code: "R-03",
    name: "Spark",
    role: "AI Integration",
    tagline: "The Mind Weaver",
    outcome: "Intelligent layers that turn your product into a living system.",
    icon: Brain,
  },
  {
    code: "R-04",
    name: "Vault",
    role: "Security & Data",
    tagline: "The Guardian",
    outcome: "Fortress-grade protection for every mission-critical asset.",
    icon: Shield,
  },
  {
    code: "R-05",
    name: "Pulse",
    role: "Growth Marketing",
    tagline: "The Expansionist",
    outcome: "Data-driven acceleration: more reach, more conversion, more orbit.",
    icon: TrendingUp,
  },
  {
    code: "R-06",
    name: "Forge",
    role: "UI / UX Design",
    tagline: "The Reality Sculptor",
    outcome: "Cinematic interfaces engineered to leave a lasting impression.",
    icon: Palette,
  },
  {
    code: "R-07",
    name: "Echo",
    role: "Content & Story",
    tagline: "The Voice of Markets",
    outcome: "Brand narratives that resonate across every channel and culture.",
    icon: Mic,
  },
];

export function Rangers() {
  return (
    <section id="rangers" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
            03 · ELITE UNITS
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Recruit one of the
            <br />
            <span className="text-gradient">Seven Rangers.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            You don’t buy a service — you deploy a Ranger. Each unit is an AI-human hybrid trained
            for a single craft, executed at the level of a global studio.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rangers.map((r, i) => {
            const Icon = r.icon;
            return (
              <article
                key={r.code}
                className="group relative glass rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[var(--gradient-aurora)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30 -z-10" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    {r.code}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_12px_oklch(0.78_0.18_300)]" />
                </div>

                <div className="mt-8 relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-aurora)]/15 border border-primary/30">
                  <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                  <Icon className="relative h-6 w-6 text-primary-glow" strokeWidth={1.5} />
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground">
                  {r.name}
                </h3>
                <div className="mt-1 text-xs font-mono tracking-[0.2em] uppercase text-primary-glow/90">
                  {r.role}
                </div>
                <p className="mt-3 text-sm italic text-muted-foreground/90">“{r.tagline}”</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.outcome}</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-[11px] font-mono tracking-[0.2em] text-muted-foreground">
                    DEPLOYABLE
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-medium text-foreground/80 hover:text-primary-glow transition-colors"
                  >
                    Recruit →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
