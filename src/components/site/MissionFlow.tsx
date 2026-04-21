const steps = [
  {
    n: "01",
    title: "Brief",
    desc: "Direct line to Commander. No account managers, no friction — clarity from minute one.",
  },
  {
    n: "02",
    title: "Strategize",
    desc: "Mission blueprint engineered around outcomes, timelines, and measurable KPIs.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Rangers deploy. AI-augmented execution at 3× the speed of a conventional studio.",
  },
  {
    n: "04",
    title: "Launch",
    desc: "Cinematic delivery. Every project shipped with polish, performance, and a story.",
  },
  {
    n: "05",
    title: "Optimize",
    desc: "Continuous orbit. We tune, scale, and evolve the system long after launch day.",
  },
];

export function MissionFlow() {
  return (
    <section id="flow" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
            04 · MISSION FLOW
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Five phases.
            <br />
            <span className="text-gradient">One precise orbit.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden lg:block h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.n} className="group relative">
                <div className="glass rounded-3xl p-6 h-full transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                      <div className="absolute inset-0 rounded-2xl bg-primary/40 blur-md opacity-50 group-hover:opacity-90 transition-opacity" />
                      <span className="relative font-mono text-sm font-semibold text-primary-glow">
                        {s.n}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <span className="hidden lg:block flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
